<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserAddress;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;


class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Auth::user();
        $user->load('addresses', 'transactions', 'carts');
    
        return Inertia::render('User/Profile/Index', [
            'user' => $user,
        ]);

    }


    public function createAddress(Request $request) {
        \Log::info('This is some useful information.');
        return Inertia::render('User/Profile/CreateAddress');
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
        //
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
