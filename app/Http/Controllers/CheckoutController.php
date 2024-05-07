<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Product;
use App\Models\Cart;
use App\Models\Transaction;
use App\Models\TransactionDetail;

use Midtrans\Config;
use Midtrans\Snap;
use Midtrans\Notification;

use Inertia\Inertia;
use Carbon\Carbon;

class CheckoutController extends Controller
{
    public function processPayment(Request $request) {


        
        $user = Auth::user();
        
        // proses checkout
        $code = 'TRX'. mt_rand(0000000, 9999999);
        $carts = Cart::with(['product', 'user'])->where('user_id', Auth::user()->id)->get();
        
        // create transaction
        $transaction = Transaction::create([
            'user_id' => $user->id,
            'user_address_id' => $request->user_address_id,
            'total_weight' => $request->total_weight,
            'total_price' => $request->total_price,
            'shipping_cost' => $request->shipping_cost,
            'delivery_code' => "-",
            'code' => $code,
            'status' => 'unpaid',
            'created_at'=> Carbon::now()
        ]);

        // create transaction detail
        foreach ($carts as $cart) {
            TransactionDetail::create([
                'transaction_id' => $transaction->id,
                'product_id' => $cart->product_id,
                'actual_price' => $cart->product->price,
                'amount' => $cart->amount,
                'created_at'=> Carbon::now() 
            ]);
        }

        foreach($carts as $cart) {
            $product = Product::where('id', $cart->product_id)->first();
            $currentProductStock = $product->stock - $cart->amount;
            $product->update([
                'stock' => $currentProductStock,
            ]);
        }

        foreach($carts as $cart) {
            $cart->delete();
        }


        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');


        $midtrans = [
            'transaction_details' => [
                'order_id' => $transaction->code,
                'gross_amount' => (int) $request->total_price + $request->shipping_cost,
            ],
            'customer_details' => [
                'first_name' => $user->fullname,
                'email' => '11211005@student.itk.ac.id',
            ],
            'enabled_payment' => [
                'gopay', 'permata_va', 'bri_va', 'mandiri_va', 'bank_transfer', 'other_va'
            ],
            'vtweb' => []
            ];

            
        
        try {
                $paymentUrl = Snap::createTransaction($midtrans)->redirect_url;
            
                return Inertia::location($paymentUrl);
        }
        catch (Exception $e) {
            echo $e->getMessage();
        }
        
    }

    public function callback(Request $request) {
        // set konfigurasi midtrans
        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');

        // instance midtrans notification
        $notification = new Notification();

        // assign ke variabel untuk memudahkan  koding
        $status = $notification->transaction_status;
        $type = $notification->payment_type;
        $fraud = $notification->fraud_status;
        $order_id = $notification->order_id;

        // cari transaksi berdasarkan id
        $transaction = Transaction::findOrFail($order_id);

        // handle notification status
        if($status == 'capture') {
            if($type == 'credit_card') {
                if($fraud == 'challenge') {
                    $transaction->status = 'UNPAID';
                } else {
                    $transaction->status = 'PROCESSED';
                }
            }
        }

        else if($status == 'settlement') {
            $transaction->status = 'PROCESSED';
        }

        else if($status == 'pending') {
            $transaction->status = 'UNPAID';
        }

        else if($status == 'deny') {
            $transaction->status = 'CANCELED';
        }

        else if($status == 'expire') {
            $transaction->status = 'CANCELED';
        }

        else if($status == 'cancel') {
            $transaction->status = 'CANCELED';
        }

        // simpan transaksi
        $transaction->save();
    
        // kirim ke email
    
    }
}
