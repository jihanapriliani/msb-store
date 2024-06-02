<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Midtrans\Snap;

use App\Models\Cart;
use Inertia\Inertia;
use Midtrans\Config;
use App\Models\Product;
use App\Models\District;

use Midtrans\Notification;
use App\Jobs\ProcessStatus;
use App\Models\Transaction;

use App\Models\UserAddress;
use App\Models\User
;
use Illuminate\Http\Request;

use App\Models\TransactionDetail;
use App\Mail\ProcessedNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;


class CheckoutController extends Controller
{
    public function processPayment(Request $request) {
        $user = Auth::user();

        
        $address = UserAddress::findOrFail($request->user_address_id);
        $data = District::where('district_id', $address->district_id)->first();
        
         $addressWithNewData = (object) [
                    'id' => $address->id,
                    'user_id' => $address->user_id,
                    'province_id' => $address->province_id,
                    'city_id' => $address->city_id,
                    'district_id' => $address->district_id,
                    'alias' => $address->alias,
                    'zipcode' => $address->zipcode,
                    'country' => $address->country,
                    'address' => $address->address,
                    'province' => $data["province"],
                    'city' => $data["city"],
                    'district' => $data["district_name"],
                    'village' => $address->village,
        ];

        $textAddress = $address->address . ", " . $address->village . ", " . $data["district_name"] . ", " . $data["city"] . ", " . $data["province"] . ", " . $address->country . ", " . $address->zipcode;

     
        // proses checkout
        $code = 'TRX'. mt_rand(0000000, 9999999);
        $carts = Cart::with(['product', 'user'])->where('user_id', Auth::user()->id)->get();
        
        // create transaction
        $transaction = Transaction::create([
            'user_id' => $user->id,
            'user_address_id' => $request->user_address_id,
            'total_weight' => ($request->total_weight / 1000),
            'total_price' => $request->total_price,
            'shipping_cost' => $request->shipping_cost,
            'delivery_code' => "-",
            'code' => $code,
            'status' => 'unpaid',
            'note' => $request->note,
            'address' => $textAddress,
            'created_at'=> Carbon::now(),
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
            'callbacks' => [
                'finish' => "https://mandirisejatiborneo.store/invoice/" . $transaction->code,
            ],
            'customer_details' => [
                'first_name' => $user->fullname,
                'email' => $user->email,
            ],
            'enabled_payment' => [
                'gopay', 'permata_va', 'bri_va', 'mandiri_va', 'bank_transfer', 'other_va'
            ],
            'vtweb' => []
            ];

            
        
        try {
                $paymentUrl = Snap::createTransaction($midtrans)->redirect_url;
                
                $transaction->update([
                    'payment_url' => $paymentUrl
                ]);

                return Inertia::location($paymentUrl);
        }
        catch (Exception $e) {
            echo $e->getMessage();
        }
        
    }

    public function callback(Request $request) {
        
        $serverKey = config('services.midtrans.serverKey');
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.$serverKey);

        $emails = User::whereHas('roles', function ($query) {
            $query->whereIn('name', ['admin', 'super-admin']);
        })->pluck('email');
        
        $transaction = Transaction::where('code', $request->order_id)->firstOrFail();

        if($hashed == $request->signature_key) {
            if($request->transaction_status == 'capture') {
                $transaction->update(['status' => 'processed']);

                foreach ($emails as $email) {
                    ProcessStatus::dispatch($email, $transaction);
                }

                Mail::to($transaction->user->email)->send(new ProcessedNotification($transaction));
            }
    
            else if($request->transaction_status == 'settlement') {
                $transaction->update(['status' => 'processed']);

                foreach ($emails as $email) {
                    ProcessStatus::dispatch($email, $transaction);
                }

                Mail::to($transaction->user->email)->send(new ProcessedNotification($transaction));
            }
    
            else if($request->transaction_status == 'pending') {
                $transaction->update(['status' => 'unpaid']);
            }
    
            else if($request->transaction_status == 'deny') {
                $transaction->update(['status' => 'canceled']);

                foreach ($transaction->transaction_details as $transaction_detail) {
                    $transaction_detail->product->update([
                        'stock' => $transaction_detail->product->stock + $transaction_detail->amount,
                    ]);
                }

            }
    
            else if($request->transaction_status == 'expire') {
                $transaction->update(['status' => 'canceled']);

                foreach ($transaction->transaction_details as $transaction_detail) {
                    $transaction_detail->product->update([
                        'stock' => $transaction_detail->product->stock + $transaction_detail->amount,
                    ]);
                }
            }
    
            else if($request->transaction_status == 'cancel') {
                 $transaction->update(['status' => 'canceled']);

                 foreach ($transaction->transaction_details as $transaction_detail) {
                    $transaction_detail->product->update([
                        'stock' => $transaction_detail->product->stock + $transaction_detail->amount,
                    ]);
                }
            }
        }
       
 
    }


    public function invoice(string $id) {
        $transaction = Transaction::where('code', $id)->with(['transaction_details.product', 'user'])->first();

        return Inertia::render('Invoice', [
            'transaction' => $transaction
        ]);

    }
}
