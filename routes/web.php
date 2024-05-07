<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TransactionDetailController;

use App\Http\Controllers\UserTransactionController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\UserCartController;
use App\Http\Controllers\CheckoutController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $user = Auth::user();    
    $products = Product::with('images')->get();
    $categories = Category::take(10)->get();
    return Inertia::render('LandingPage', [
        'products' => $products,
        'categories' => $categories,
        'user' => $user
    ]);
})->name('landing-page');

Route::get('/shop', function () {
    $products = Product::with('images')->get();
    $categories = Category::all();
    return Inertia::render('Shop', [
        'products' => $products,
        'categories' => $categories
    ]);
})->name("shop");

Route::get('/detail-product', function () {
    
    $product = Product::with('images')->first();

    return Inertia::render('DetailProduct', [
        'product' => $product
    ]);
})->name("detail.product");



Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile/create-address',[UserProfileController::class,'createAddress'])->name('profile.address.create');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::group(['middleware' => ['role:admin']], function() {
        Route::prefix('dashboard')->group(function () {
            Route::prefix('admin')->group(function () {
                Route::get('/', function() {
                    return Inertia::render('Admin/Dashboard/Index');
                })->name('dashboard.admin');
    
                Route::resource('category', CategoryController::class);
                Route::resource('product', ProductController::class);
                Route::resource('user', UserController::class);
                Route::resource('transaction', TransactionController::class);
            });
        });

    });


    Route::group(['middleware' => ['role:user']], function() {
        Route::prefix('dashboard')->group(function () {
            Route::prefix('user')->group(function () {
                Route::get('/', function() {
                    return Inertia::render('User/Dashboard/Index');
                })->name('dashboard.user');  

                Route::resource('transactions', UserTransactionController::class);
            

                Route::prefix('profile')->name('profile.')->group(function() {
                    Route::get('/', [UserProfileController::class, 'index'])->name('index');
                    Route::get('/create-address', [UserProfileController::class,'createAddress'])->name('address.create');
                    Route::post('/store-address', [UserProfileController::class,'storeAddress'])->name('address.store');
                    Route::get('/edit-address/{id}', [UserProfileController::class,'editAddress'])->name('address.edit');
                    Route::put('/update-address/{id}', [UserProfileController::class,'updateAddress'])->name('address.update');
                    Route::delete('/delete-address/{id}', [UserProfileController::class,'deleteAddress'])->name('address.delete');

                    Route::get('/edit-profile', [UserProfileController::class,'edit'])->name('edit');
                    Route::put('/update-profile', [UserProfileController::class,'update'])->name('update');
                });    
            });
        });

        Route::get('/cart', [UserCartController::class, 'index'])->name('user.cart');
        Route::delete('/cart/{id}', [UserCartController::class, 'destroy'])->name('user.cart.destroy');

        Route::get('/checkout', [UserCartController::class, 'checkout'])->name('user.cart.checkout');
       


      

    });



    Route::post('/checkout', [CheckoutController::class, 'processPayment'])->name('checkout');
    Route::post('/checkout/midtrans-callback', [CheckoutController::class, 'callback'])->name('user.cart.callback');
});


require __DIR__.'/auth.php';
