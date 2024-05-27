<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transaction::with('user', 'user_address')->get();

        return Inertia::render('Admin/Transaction/Index', [
           'transactions' => $transactions
        ]);   
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {


        $transaction = Transaction::with('user', 'user_address')->findOrFail($transaction->id);

        $transactionDetails = TransactionDetail::with('product')->where('transaction_id', $transaction->id)->get();
        
        return Inertia::render('Admin/Transaction/Show', [
            'transaction' => $transaction,
            'details' => $transactionDetails
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        $transaction = Transaction::findOrFail($transaction->id);
        
        return Inertia::render('Admin/Transaction/Edit', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        try {
            $validatedData = $request->validate([
                'status' => 'required|string',
                'delivery_code' => [
                    'required',
                    Rule::unique('transactions')->ignore($transaction->id),
                ],
            ]);

            if($validatedData['status'] === 'canceled') {
                foreach ($transaction->transaction_details as $transaction_detail) {
                    $transaction_detail->product->update([
                        'stock' => $transaction_detail->product->stock + $transaction_detail->amount,
                    ]);
                }
            }
    
            $transaction->update($validatedData);
    
            return redirect()->route('transaction.index')->with('success', 'Status transaksi berhasil diubah!');
        } catch (ValidationException $e) {
            if ($e->validator->errors()->has('delivery_code')) {
                return redirect()->back()->withInput()->with('error', 'Nomor resi telah digunakan sebelumnya.');
            } else {
                throw $e;
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
