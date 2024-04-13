<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')->get();

        return Inertia::render('Admin/Product/Index', [
           'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $categories = Category::all();

        return Inertia::render('Admin/Product/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string',
            'description' => 'required|string',
            'category' => 'required',
            'stock' => 'required',
            'price' => 'required',
            'unit_weight' => 'required',
            'product_images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:5048', 
        ]);
        
     
        $product = Product::create([
            'name' => $validatedData['name'],
            'slug' => $validatedData['slug'],
            'category_id' => $validatedData['category'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'stock' => $validatedData['stock'],
            'unit_weight' => $validatedData['unit_weight']
        ]);
           
        if ($request->hasFile('product_images')) {
            foreach ($request->file('product_images') as $imageFile) {
                $imageName = time() . '_' . $imageFile->getClientOriginalName();
                $imageFile->move(public_path('storage/images/product/'), $imageName);

               
                ProductImage::create([
                    'product_id' => $product->id,
                    'is_thumbnail' => "0",
                    'image' => 'storage/images/product/' . $imageName,
                ]);
            }
        }

        
        return redirect()->route('product.index')->with('success', 'Produk baru berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product = Product::findOrFail($product->id);   
        $productImages = ProductImage::where('product_id', $product->id)->get();
        $categories = Category::all();

        return Inertia::render('Admin/Product/Edit', [
           'product' => $product,
           'product_images' => $productImages,
           'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string',
            'description' => 'required|string',
            'category' => 'required',
            'stock' => 'required',
            'price' => 'required',
            'unit_weight' => 'required',
            'old_product_images.*' => 'required', 
            'new_product_images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:5048'
        ]);


        $product = Product::findOrFail($product->id);
        

        $product->update([
            'name' => $validatedData['name'],
            'slug' => $validatedData['slug'],
            'category_id' => $validatedData['category'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'stock' => $validatedData['stock'],
            'unit_weight' => $validatedData['unit_weight']
        ]);
           

        $product->images()->delete();


     
        if (!empty($validatedData['old_product_images'])) {
            foreach ($validatedData['old_product_images'] as $image) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $image['image'], 
                    'is_thumbnail' => $image['is_thumbnail'], 
                ]);
            }
        }

        if ($request->hasFile('new_product_images')) {
            foreach ($request->file('new_product_images') as $imageFile) {
                $imageName = time() . '_' . $imageFile->getClientOriginalName();
                $imageFile->move(public_path('storage/images/product/'), $imageName);

               
                ProductImage::create([
                    'product_id' => $product->id,
                    'is_thumbnail' => "0",
                    'image' => 'storage/images/product/' . $imageName,
                ]);
            }
        }

        
        return redirect()->route('product.index')->with('success', 'Produk berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product = Product::findOrFail($product->id);
        $productImages = ProductImage::where('product_id', $product->id)->get();
    
        $productImages->each(function ($productImage) {
            $productImage->delete();
        });
    
        $product->delete();

        return redirect()->route('product.index')->with('success', 'Produk berhasil dihapus!');
    }
}
