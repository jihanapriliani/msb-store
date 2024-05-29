<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        $transactions = $user->load(['transactions', 'transactions.transaction_details.product.images']);

        return Inertia::render('User/Transactions/Index', [
            'transactions' => $transactions,
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
    public function show(string $id)
    {
        $user = Auth::user();
        $transaction = $user->transactions()->findOrFail($id);
        $transaction->load('transaction_details.product.images', 'user_address');

        return Inertia::render('User/Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $transaction = Transaction::findOrFail($id);

        $transaction->update([
            'status' => 'accepted',
            'accepted_at' => now()->setTimezone('Asia/Singapore'),
        ]);

        return redirect()->back();
    }


    public function cancel(Request $request, string $id) {
        return DB::transaction(function () use ($request, $id) {
            $transaction = Transaction::with('transaction_details.product')->findOrFail($id);

            $transaction->update([
                'status' => 'canceled',
                'canceled_at' => now()->setTimezone('Asia/Singapore'),
            ]);

            foreach ($transaction->transaction_details as $transaction_detail) {
                $transaction_detail->product->update([
                    'stock' => $transaction_detail->product->stock + $transaction_detail->amount,
                ]);
            }
            return redirect()->back();
        });
    }


    public function invoice(string $id)
    {
        $user = Auth::user();
        $transaction = Transaction::where('code', $id)->with('transaction_details.product.images', 'user_address')->first();

        return Inertia::render('TransactionInvoice', [
            'user' => $user,
            'transaction' => $transaction,
        ]);
    }


    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
