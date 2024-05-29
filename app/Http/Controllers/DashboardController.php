<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Transaction;

use Inertia\Inertia;



class DashboardController extends Controller
{
    public function index() {
        if (Auth::user()->hasRole('user')) {
            return redirect('/user-settings');
        } elseif (Auth::user()->hasRole(['admin', 'super-admin'])) {
            
            $total_customers = User::whereHas('roles', function($q) {
                $q->where('name', 'user');
            })->count();
            $total_orders = Transaction::count();
            $total_profit = Transaction::sum('total_price');
            $total_transaction = Transaction::count();


            $latest_transactions = Transaction::with(['user', 'transaction_details'])->orderBy('created_at', 'asc')->take(5)->get();


            return Inertia::render('Admin/Dashboard/Index', [
                'total_customers' => $total_customers,
                'total_orders' => $total_orders,
                'total_profit' => $total_profit,
                'total_transaction' => $total_transaction,
                'transactions' => $latest_transactions
            ]);
        }
    }
}
