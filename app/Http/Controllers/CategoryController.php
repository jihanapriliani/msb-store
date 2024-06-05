<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'asc')->with('products')->get();

        // count the number of products in each category
        foreach ($categories as $category) {
            $category->productCount = $category->products->count();
        }

        return Inertia::render('Admin/Category/Index', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'display_name' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:5000',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('storage/images/category/'), $imageName);
            $validatedData['image'] = 'storage/images/category/' . $imageName;
        } else {
            $validatedData['image'] = null;
        }

        $validatedData['slug'] = Str::slug($validatedData['display_name'], '-');

        Category::create($validatedData);

        return to_route('category.index')
            ->with('success', 'Kategori baru berhasil ditambahkan!');
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
        $category = Category::findOrFail($id);

        return Inertia::render('Admin/Category/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'display_name' => 'required|string',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg|max:5000',
            'image' => 'nullable|string',
        ]);

        $validatedData['slug'] = Str::slug($validatedData['display_name'], '-');

        $category = Category::findOrFail($id);

        if ($request->hasFile('image_file') ) {
            $image = $request->file('image_file');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('storage/images/category/'), $imageName);
            $validatedData['image'] = 'storage/images/category/' . $imageName;
        } else {
            $validatedData['image_file'] = $category->image;
        }

        $category->update($validatedData);

        return redirect()->route('category.index')->with('success', 'Kategori berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);

        $category->delete();

        return redirect()->route('category.index')->with('success', 'Kategori berhasil dihapus!');
    }
}
