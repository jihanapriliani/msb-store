<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserCartController;

use App\Models\Cart;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::put('/user/cart/{cart}',[UserCartController::class,'update'])->name('api.user.cart.update');

Route::put('/user/cart/{id}', function(Request $request, string $id) {
    
    
    $cart = Cart::findOrFail($id);
    $cart->update(['amount' => $request->amount]);
  
    return response()->json($data);

})->name('api.user.cart.update');


Route::delete('/user/cart/{id}', function(string $id) {
    $cart = Cart::findOrFail($id);
    $cart->delete();
    
    return response()->json(['success' => 'Barang berhasil dihapus!']);

})->name('api.user.cart.delete');


Route::get('/get-shipping-cost', function(Request $request) {
    $origin = $request->input('origin');
    $destination = $request->input('destination');
    $weight = $request->input('weight');
    $courier = $request->input('courier');
    
    $shippingCost = RajaOngkir::ongkosKirim([
        'origin' => $origin,
        'destination' => $destination,
        'weight' => $weight,
        'courier' => $courier
    ]);
    
    return response()->json($shippingCost);
})->name('get_shipping_cost');


