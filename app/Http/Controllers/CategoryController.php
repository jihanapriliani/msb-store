<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();

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
            'slug' => 'required|string|unique:categories,slug',
            'image' => 'required|image|mimes:jpeg,png,jpg', 
        ]);
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('storage/images/category/'), $imageName);
            $validatedData['image'] = 'storage/images/category/' . $imageName;
        }
        
        Category::create($validatedData);

        return to_route('category.index');
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
            'slug' => 'required|string|unique:categories,slug',
            'image' => 'nullable|image|mimes:jpeg,png,jpg', 
        ]);

        $category = Category::findOrFail($id);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('storage/images/category/'), $imageName);
            $validatedData['image'] = 'storage/images/category/' . $imageName;
        }

        $category->update($validatedData);

        return to_route('category.index');
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);

        $category->delete();

        return to_route('category.index');
    }
}
