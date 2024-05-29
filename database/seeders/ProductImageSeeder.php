<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductImage;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Product::all();

        foreach ($products as $product) {
            $imageName = 'bolt.jpg';
            ProductImage::create([
                'product_id' => $product->id,
                'is_thumbnail' => 0, 
                // 'image' => 'storage/images/category/' . $imageName,
            ]);
        }
    }
}
