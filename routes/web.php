<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TransactionDetailController;
use App\Http\Controllers\UserController;

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
use App\Models\Cart;
use App\Models\District;
use App\Models\UserAddress;
use App\Models\Transaction;

use Illuminate\Http\Request;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

// use App\Http\Controllers\Email\TestSendEmailController;

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

// Route::get('/ship', function () {
//     return view('emails.notification.shipped');
// });

Route::get('/', function () {
    $user = Auth::user();
    $products = Product::with('images')->take(8)->get();
    $categories = Category::take(10)->get();

    return Inertia::render('LandingPage', [
        'products' => $products,
        'categories' => $categories,
        'user' => $user,
    ]);
})->name('landing-page');

// Route::get('/', [ShopController::class, "landing"])->name('landing-page');
Route::get('/shop', [ShopController::class, "shop"])->name("shop");


Route::get('/detail-product/{id}', function (string $id) {
    $user = Auth::user();
    $product = Product::with(['images', 'category'])->findOrFail($id);


    if ($user !== null) {
        $product_cart = Cart::where('user_id', $user->id)
            ->where('product_id', $id)
            ->first();
    }

    $product_cart = $product_cart ?? 0;

    return Inertia::render('DetailProduct', [
        'product' => $product,
        'user' => $user,
        'productCart' => $product_cart
    ]);
})->name("detail.product");



Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile/create-address', [UserProfileController::class, 'createAddress'])->name('profile.address.create');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::group(['middleware' => ['role:admin|super-admin']], function () {
        Route::prefix('dashboard')->group(function () {
            Route::prefix('admin')->group(function () {
                Route::get('/', function () {
                    return Inertia::render('Admin/Dashboard/Index');
                })->name('dashboard.admin');

                Route::resource('category', CategoryController::class);
                Route::resource('product', ProductController::class);
                Route::resource('user', UserController::class);
                Route::resource('transaction', TransactionController::class);
                Route::get('/transaction-export', [TransactionController::class, 'exportAll'])->name('transaction.export');
            });
        });
    });


    Route::group(['middleware' => ['role:user']], function () {
        Route::prefix('dashboard')->group(function () {
            Route::prefix('user')->group(function () {
        //         Route::get('/', function () {
        //             return Inertia::render('User/Dashboard/Index');
        //         })->name('dashboard.user');

                Route::prefix('profile')->name('profile.')->group(function () {
                    Route::get('/', [UserProfileController::class, 'index'])->name('index');
                    Route::get('/address/create', [UserProfileController::class, 'createAddress'])->name('address.create');
                    Route::post('/address/store', [UserProfileController::class, 'storeAddress'])->name('address.store');
                    Route::get('/address/edit/{id}', [UserProfileController::class, 'editAddress'])->name('address.edit');
                    Route::put('/address/update/{id}', [UserProfileController::class, 'updateAddress'])->name('address.update');
                    Route::delete('/address/delete/{id}', [UserProfileController::class, 'deleteAddress'])->name('address.delete');

                    Route::get('/edit-profile', [UserProfileController::class, 'edit'])->name('edit');
                    Route::put('/update-profile', [UserProfileController::class, 'update'])->name('update');
                    Route::put('/update-email', [UserProfileController::class, 'updateEmail'])->name('update.email');
                    Route::put('/resend-email', [UserProfileController::class, 'resendEmail'])->name('resend.email');
                });
            });
        });

        Route::get('/cart', [UserCartController::class, 'index'])->name('user.cart');
        Route::delete('/cart/{id}', [UserCartController::class, 'destroy'])->name('user.cart.destroy');
        Route::delete('/cart', [UserCartController::class, 'clear'])->name('user.cart.clear');

        Route::get('/user-settings', function () {
            $user = Auth::user();

            $user_address = UserAddress::where('user_id', $user->id)->get();

            return Inertia::render('UserSettings', [
                'user' => $user,
                'userAddress' => $user_address
            ]);
        })->name('user.settings');

        Route::middleware(['auth:sanctum', 'verified'])->group(function () {
            // Taruh sini untuk route yang perlu verifikasi terlebih dahulu

            Route::resource('transactions', UserTransactionController::class);
            Route::put('/transactions/{id}/cancel', [UserTransactionController::class, 'cancel'])->name('transactions.cancel');

            Route::get('/checkout', [UserCartController::class, 'checkout'])->name('user.cart.checkout');

            Route::get('/transactions/{id}/invoice', [UserTransactionController::class, 'invoice'])->name('transactions.invoice');
            Route::get('/user-transaction', function () {
                $user = Auth::user();

                $transactions = Transaction::where('user_id', $user->id)->with('transaction_details.product.images')->get();


                return Inertia::render('UserTransaction', [
                    'user' => $user,
                    'transactions' => $transactions
                ]);
            });

            Route::get('/user-transaction/{id}', function (string $id) {
                $user = Auth::user();

                $transaction = Transaction::where('code', $id)->with('transaction_details.product.images', 'user_address')->first();


                return Inertia::render('UserTransactionDetail', [
                    'user' => $user,
                    'transaction' => $transaction
                ]);
            });
            Route::get('/user-address', function () {
                $user = Auth::user();

                $addresses = UserAddress::where('user_id', $user->id)->get();

                $userAddresses = [];
                foreach ($addresses as $address) {
                    $data = District::where('district_id', $address->district_id)->first();

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
                        'province' => $data["province"],
                        'city' => $data["city"],
                        'district' => $data["district_name"],
                        'village' => $address->village,
                    ];


                    $userAddresses[] = $addressWithNewData;
                }


                return Inertia::render('UserAddress', [
                    'user' => $user,
                    'addresses' => $userAddresses
                ]);
            })->name('user.address');

            Route::get('/user-address/create', function () {
                return Inertia::render('UserAddressCreate');
            });

            Route::get('/user-address/edit', function () {
                return Inertia::render('UserAddressEdit');
            });

            Route::post('/checkout', [CheckoutController::class, 'processPayment'])->name('checkout');
            Route::get('/invoice/{id}', [CheckoutController::class, 'invoice'])->name('invoice');

            Route::get('/payment', function(Request $request) {
                $token = $request->query('token');
                $code = $request->query('code');
                
                return Inertia::render('Payment', [
                    'token' => $token,
                    'code' => $code
                ]);
            })->name('payment');

            
        });
    });
});





// Route::get('/send-email', [TestSendEmailController::class, 'index']);
// Route::get('/send-newsletter', [TestSendEmailController::class, 'newsletter']);
// Route::get('/superadmin', [SuperadminController::class, 'index']);




require __DIR__ . '/auth.php';
