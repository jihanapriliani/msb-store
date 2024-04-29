<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserCartController;

use App\Models\Cart;
use App\Models\Province;
use App\Models\City;
use App\Models\User;

use Kavist\RajaOngkir\Facades\RajaOngkir;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Facades\Hash;

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


Route::get('/get-provinces', function(Request $request) {
    $provinces = Province::all();
    return response()->json($provinces);
});


Route::get('/get-cities', function(Request $request) {
    $province_id = $request->input('province_id');
    $province = Province::find($province_id); 
    if (!$province) {
        return response()->json(['error' => 'Province not found'], 404); 
    }
    $cities = $province->cities; 
    return response()->json($cities);
});

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


Route::post('/compare-password', function(Request $request) {
    try {
        $user = User::findOrFail($request->params['user_id']);
    
        $savedPassword = $user->password;
        $password = $request->input('password');
        $hash = Hash::make($password);

        return response()->json([
            'success' => true,
            'message' => 'Password match',
            'data' => [
                'passLama' => $savedPassword,
                'passInput' => bcrypt($password),
                'isSame' => Hash::check($hash, $savedPassword)
            ]
        ]);
        
        if(Hash::check($password, $savedPassword)) {
            return response()->json([
                'success' => true,
                'message' => 'Password match',
                'data' => []
            ]);
        } else {
            throw new Exception('Passwords do not match');
        }

    } catch(\Throwable $th) {
        return response()->json([
            'success' => false,
            'message' => $th->getMessage(),
            'data'    => []
        ]);
    }
});

