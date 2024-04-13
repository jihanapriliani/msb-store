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
        //
        $users = User::with('roles')->get();

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
            'roles.*.name' => 'required|exists:roles',
        ]);

        $user = User::create($validatedData);

        $user->assignRole($validatedData["roles"]);

        return to_route('user.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //

        $user = User::findOrFail($id);

        return Inertia::render('Admin/User/Show', [
            'userData' => $user
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
            'userData' => $user,
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
            'roles.*.name' => 'required|exists:roles',
            'password' => 'nullable|string',
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

        $user->syncRoles($validatedData["roles"]);

        return to_route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $user = User::findOrFail($id);

    
        $user->delete();

        return to_route('user.index');
    }
}