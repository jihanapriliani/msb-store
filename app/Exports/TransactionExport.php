<?php

namespace App\Exports;

use App\Models\Transaction;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TransactionExport implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view() : View
    {
        $transactions = Transaction::with('user', 'user_address', 'transaction_details.product')->get();
        
        return view('exports.transactionExport', [
            'transactions' => $transactions 
        ]);
    }
}
