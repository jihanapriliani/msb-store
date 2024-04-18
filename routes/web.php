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

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile/create-address',[UserProfileController::class,'createAddress'])->name('profile.address.create');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/dashboard', [DashboardController::class, 'index']);

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
                
                Route::resource('profile', UserProfileController::class);
                Route::get('/profile/create-address',[UserProfileController::class,'createAddress'])->name('profile.address.create');
                Route::post('/profile/store-address', [UserProfileController::class, 'storeAddress'])->name('profile.address.store');

            
            });
        });

    });



});

require __DIR__.'/auth.php';
