<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserCartController;

use App\Models\Cart;

use Kavist\RajaOngkir\Facades\RajaOngkir;
use Illuminate\Support\Facades\Http;


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


// Route::post('/get-shipping-cost', function(Request $request) {
//     $origin = $request->input('origin');
//     $destination = $request->input('destination');
//     $weight = $request->input('weight');
//     $courier = $request->input('courier');
    
//     $daftarProvinsi = RajaOngkir::ongkosKirim([
//         'origin'        => 155,     // ID kota/kabupaten asal
//         'destination'   => 80,      // ID kota/kabupaten tujuan
//         'weight'        => 1300,    // berat barang dalam gram
//         'courier'       => 'jne'    // kode kurir pengiriman: ['jne', 'tiki', 'pos'] untuk starter
//     ]);
    
//     return response()->json($daftarProvinsi);
// })->name('get_shipping_cost');


Route::post('/get-shipping-cost', function(Request $request) {
    try {
        $response = Http::withOptions(['verify' => false,])->withHeaders([
            'key' => env('RAJAONGKIR_API_KEY')
        ])->post('https://api.rajaongkir.com/starter/cost',[
            'origin'        => $request->params['origin'],
            'destination'   => $request->params['destination'],
            'weight'        => $request->params['weight'],
            'courier'       => $request->params['courier']
        ])
        ->json()['rajaongkir']['results'];

        return response()->json($response);
    } catch (\Throwable $th) {
        return response()->json([
            'success' => false,
            'message' => $th->getMessage(),
            'data'    => []
        ]);
    }
})->name('get_shipping_cost');

