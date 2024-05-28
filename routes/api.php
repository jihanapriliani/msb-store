<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Cart;
use App\Models\User;

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\LocationController;
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
  
    return response()->json(['success' => 'Amount berhasil ditambahkan!']);

})->name('api.user.cart.update');


Route::delete('/user/cart/{id}', function(string $id) {
    $cart = Cart::findOrFail($id);
    $cart->delete();
    
    return response()->json(['success' => 'Barang berhasil dihapus!']);

})->name('api.user.cart.delete');


Route::post('/add-product-to-cart', function(Request $request) {
    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
        'product_id' => 'required|exists:products,id',
        'amount' => 'required|integer|min:1'
    ]);

    $response = Cart::updateOrCreate(
        [
            'user_id' => $validated['user_id'],
            'product_id' => $validated['product_id']
        ],
        [
            'amount' => $validated['amount']
        ]
    );

    return response()->json($response);
})->name('api.add-product_to_cart');


Route::get('/get-provinces', [LocationController::class, 'getProvincesApi'])->name('api.get_provinces');
Route::get('/get-cities',[LocationController::class, 'getCitiesApi'])->name('api.get_cities');
Route::get('/get-districts',[LocationController::class, 'getDistrictsApi'])->name('api.get_districts');

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
        
        $user->refresh();

        $savedPassword = $user->password;
        $password = $request->params['password'];

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

Route::post('/change-password', function(Request $request) {
    try {
        $user = User::findOrFail($request->params['user_id']);
        
        $user->refresh();

        $password = $request->params['password'];


        $user->update([
            'password' => Hash::make($password),
        ]);


        return response()->json([
            'success' => true,
            'message' => 'Password successfully changed',
            'data'    => []
        ]);

    } catch(\Throwable $th) {
        return response()->json([
            'success' => false,
            'message' => $th->getMessage(),
            'data'    => []
        ]);
    }
});

// Route::post('/get-products-by-category', function(Request $request) {
//     $selectedCategoryIds = array_map(function($category) {
//         return $category['id'];
//     }, $request->selected_categories);


//     $products = Product::whereIn('category_id', $selectedCategoryIds)->with('images')->get();

//     return response()->json([
//         'success' => true,
//         'message' => 'success load data',
//         'data'    => [
//             'products' => $products
//         ]
//     ]);

    

// });


// Route::post('/get-products-with-price-range', function (Request $request) {
   
//     $startPrice = $request->start_price;
//     $endPrice = $request->end_price;

    
//     if(empty($request->selected_categories)) {
//         $products = Product::whereBetween('price', [$startPrice, $endPrice])->with('images')->get();
//     } else {
//         $selectedCategoryIds = array_map(function($category) {
//             return $category['id'];
//         }, $request->selected_categories);

//         $products = Product::whereIn('category_id', $selectedCategoryIds)->whereBetween('price', [$startPrice, $endPrice])->with('images')->get();
//     } 

//     return response()->json([
//         'success' => true,
//         'message' => "success load data",
//         'data'    => [
//             'products' => $products
//         ]
//     ]);

// });

Route::post('/midtrans-callback', [CheckoutController::class, 'callback'])->name('midtrans.callback');



