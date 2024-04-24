<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Transaction;
use App\Models\TransactionDetail;

use Midtrans\Config;
use Midtrans\Snap;

use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function processPayment(Request $request) {
        
        $user = Auth::user();
        
        
        $transaction = Transaction::with('transaction_details')->findOrFail($request->transaction_id);
        
        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');


        $midtrans = [
            'transaction_details' => [
                'order_id' => $transaction->code,
                'gross_amount' => (int) $request->total_price
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
            
                return Inertia::location($paymentUrl);
        }
        catch (Exception $e) {
            echo $e->getMessage();
        }
        
    }

    public function callback(Request $request) {
        
    }
}
