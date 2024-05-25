<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ShopController extends Controller
{
    //
    public function landing(Request $request){
        $user = Auth::user();
        $products = Product::with('images')->get();
        $categories = Category::take(10)->get();
        return Inertia::render('LandingPage', [
            'products' => $products,
            'categories' => $categories,
            'user' => $user
        ]);
    }

    public function shop(Request $request){

        // parse str to array
        // dd($request->all());
        $query = Product::query();
        $user = Auth::user();

        if ($request->has('categories') && $request->categories != ""){
            $query->whereIn('category_id', explode(",", $request->categories));
        } else if ($request->has('category') && $request->category != "") {
            $query->where('category_id', $request->category);
        } 

        if ($request->has('startPrice') && $request->startPrice != "" && $request->has('endPrice') && $request->endPrice != "") {
            $query->whereBetween('price', [$request->startPrice, $request->endPrice]);
        } else if ($request->has('startPrice') && $request->startPrice != "") {
            $query->where('price', '>=', $request->startPrice);
        } else if ($request->has('endPrice') && $request->endPrice != "") {
            $query->where('price', '<=', $request->endPrice);
        }

        if($request->has('search') && $request->search != ""){
            $query->whereRaw('LOWER(name) LIKE ? ', ['%' . strtolower(trim($request->search)) . '%']);
        }

        if ($request->has('orderBy') && $request->orderBy != "") {
            if($request->orderBy== "1"){
                $query->orderBy('created_at', 'desc');
            } else if($request->orderBy == "2"){
                $query->orderBy('price', 'desc');
            } else if($request->orderBy == "3"){
                $query->orderBy('price', 'asc');
            } else if ($request->orderBy == "4") {
                $query->orderBy('name', 'asc');
            } else if ($request->orderBy == "5") {
                $query->orderBy('name', 'desc');
            }
        }

        $products = $query->with('images')->paginate($request->perPage ?? 12);

        // dd($products);
        $categories = Category::orderBy('id', 'asc')->get();
        return Inertia::render('Shop', [
            'user' => $user,
            'products' => $products,
            'categories' => $categories
        ]);
    }
}
