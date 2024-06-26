<?php

namespace App\Http\Controllers;


use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User;

use Kavist\RajaOngkir\Facades\RajaOngkir;

class UserCartController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {

        $user = Auth::user();

        $carts = $user->load([
            'carts'=> function($query) {
                $query->with('product.images')->orderBy('created_at', 'desc');
            }]);

        return Inertia::render('User/Cart/Index', [
           'carts' => $carts['carts']
        ]);
    }


    public function checkout() {

        $user = Auth::user();
        $carts = $user->load(['addresses','carts', 'carts.product.images']);

        $userAddresses = [];
        foreach ($carts['addresses'] as $address) {
            $data = RajaOngkir::kota()->find($address->city_id);
            
            $addressWithNewData = (object) [
                'id' => $address->id,
                'user_id' => $address->user_id,
                'province_id' => $address->province_id,
                'city_id' => $address->city_id,
                'district_id' => $address->district_id,
                'alias' => $address->alias,
                'zipcode' => $address->zipcode,
                'country' => $address->country,
                'address' => $address->address,
                'address' => $address->address,
                'village' => $address->village,
                'province' => $data["province"],
                'city' => $data["city_name"]
            ];

            
            $userAddresses[] = $addressWithNewData;
        }
        
        return Inertia::render('Checkout', [
           'carts' => $carts['carts'],
           'addresses' => $userAddresses,
        ]);
    }

   
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

     
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $cart)
    {
    }

    public function addToCartAPI(Request $request){

        $cart = Cart::where('user_id', $request->user_id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($cart) {
            $cart->amount += 1;
            $cart->save();
            $response = $cart;
        } else {
            $response = Cart::create([
                'user_id' => $request->user_id,
                'product_id' => $request->product_id,
                'amount' => 1
            ]);
        }
        return response()->json($response);
    }

    public function clear()
    {
        $user = Auth::user();
        $carts = $user->carts;

        foreach ($carts as $cart) {
            $cart->delete();
        }

        return redirect()->route("user.cart");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {     
        $cart = Cart::findOrFail($id);
        $cart->delete();


        return redirect()->route("user.cart");
    }

    
}
