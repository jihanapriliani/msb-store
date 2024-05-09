<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'user');
        })->get();

        return Inertia::render('Admin/User/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $roles = Role::all();

        return Inertia::render('Admin/User/Create', [
            'roles' => $roles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required|string|unique:users,username',
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
            'phone' => 'required|string',
        ]);

        $user = User::create($validatedData);

        $user->assignRole('user');

        return redirect()->route('user.index')->with('success', 'User berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with('addresses', 'transactions', 'carts')->findOrFail($id);

        return Inertia::render('Admin/User/Show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id)->load('roles');
        $roles = Role::all();

        return Inertia::render('Admin/User/Edit', [
            'user' => $user,
            'roles' => $roles
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       
        $validatedData = $request->validate([
            'username' => 'required|string|unique:users,username,' . $id,
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable|string',
            'phone' => 'required|string',
        ]);

        $user = User::findOrFail($id);

        if ($request->password)
        {
            $validatedData['password'] = bcrypt($request->password);
        }
        else
        {
            unset($validatedData['password']);
        }

        $user->update($validatedData);


        return redirect()->route('user.index')->with('success', 'User berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        try {
            $user = User::findOrFail($id);
            $hasUnpaidTransactions = $user->transactions()->whereIn('status', ['unpaid', 'processed', 'shipped'])->exists();
            
            if($hasUnpaidTransactions) {
                return redirect()->route('user.index')->with('error', 'User memiliki transaksi aktif!');
            }
    
            $user->delete();
            return redirect()->route('user.index')->with('success', 'User berhasil dihapus!');

        } catch(e) {

        }

    }
}
