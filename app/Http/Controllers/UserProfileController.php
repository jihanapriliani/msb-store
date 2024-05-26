<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserAddress;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

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
        return Inertia::render('User/Profile/CreateAddress');
    }

    public function storeAddress(Request $request)
    {
        $validatedData = $request->validate([
            'alias' => 'required|string',
            'province_id' => 'required|integer',
            'city_id' => 'required|integer',
            'district_id' => 'required|integer',
            'village_id' => 'required|integer',
            'phone' => 'required|string',
            'zipcode' => 'required|integer',
            'country' => 'required|string',
            'address' => 'required|string',
            'lat' => 'required|integer',
            'long' => 'required|integer',
        ]);


        $user = Auth::user();

    
        $address = UserAddress::create([
            'user_id' => $user->id,
            'alias' =>  $validatedData['alias'],
            'province_id' => $validatedData['province_id'],
            'city_id' => $validatedData['city_id'],
            'district_id' =>  $validatedData['district_id'],
            'village_id' => $validatedData['village_id'],
            'phone' => $validatedData['phone'],
            'zipcode' => $validatedData['zipcode'],
            'country' => $validatedData['country'],
            'address' => $validatedData['address'],
            'lat' => $validatedData['lat'],
            'long' => $validatedData['long'],
        ]);

     
        return redirect()->route('profile.index')->with('success', 'Alamat berhasil ditambahkan!');
    }

    public function deleteAddress(string $id) {
        $address = UserAddress::findOrFail($id);

        $address->delete();
        return redirect()->route('profile.index')->with('success', 'Alamat berhasil dihapus!');
    }

    public function editAddress(string $id) {

        $address =  UserAddress::findOrFail($id);

        return Inertia::render('User/Profile/EditAddress', [
            'address' => $address
        ]);
    }


    public function updateAddress(Request $request, string $id) {
       
        $validatedData = $request->validate([
            'alias' => 'required|string',
            'province_id' => 'required|integer',
            'city_id' => 'required|integer',
            'district_id' => 'required|integer',
            'village_id' => 'required|integer',
            'phone' => 'required|string',
            'zipcode' => 'required|integer',
            'country' => 'required|string',
            'address' => 'required|string',
            'lat' => 'required|integer',
            'long' => 'required|integer',
        ]);

        $address =  UserAddress::findOrFail($id);


        $address->update($validatedData);

        return redirect()->route('profile.index')->with('success', 'Alamat berhasil diperbarui!');
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
    public function edit()
    {
        $user = Auth::user();

        return Inertia::render('User/Profile/EditProfile', [
            'user' => $user,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        
        try {
            $validatedData = $request->validate([
                'fullname' => 'required|string',
                'phone' => 'required|string', 
            ]);

           
            $user->update($validatedData);
    
            return redirect()->back()->with('success', 'Profil berhasil diperbarui!');

        } catch (ValidationException $e) { 
            if ($e->validator->errors()->has('email')) {
                return redirect()->back()->withInput()->with('error', 'Email tidak tersedia.');
            } else {
                throw $e;
            }
        }
        
    }

    public function updateEmail(Request $request) {
        $user = Auth::user();

        try {
            $validatedData = $request->validate([
                'email' => [
                    'required',
                    Rule::unique('users')->ignore($user->id),
                ],
            ]);

            $user->update([
                'email' => $validatedData['email'],
                'email_verified_at' => null
            ]);

            $request->user()->sendEmailVerificationNotification();

            return redirect()->back();

        } catch (ValidationException $e) { 
            if ($e->validator->errors()->has('email')) {
                return redirect()->back()->withInput()->with('error', 'Email tidak tersedia.');
            } else {
                throw $e;
            }
        }
    } 


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    
}
