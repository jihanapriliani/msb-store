<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        $validatedData = $request->validate([
            'status' => 'required|string',
            'delivery_code' => 'required',
        ]);

        $transaction->update($validatedData);

        return redirect()->route('transaction.index')->with('success', 'Status transaksi berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
