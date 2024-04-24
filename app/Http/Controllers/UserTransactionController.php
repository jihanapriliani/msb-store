<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
