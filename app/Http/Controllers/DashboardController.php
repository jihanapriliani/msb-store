<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class DashboardController extends Controller
{
    public function index() {
        if (Auth::user()->hasRole('user')) {
            return redirect('/user-settings');
        } elseif (Auth::user()->hasRole('admin')) {
            return redirect('/dashboard/admin');
        } elseif(Auth::user()->hasRole('superadmin')) {
            return redirect('/dashboard/superadmin');
        }
    }
}
