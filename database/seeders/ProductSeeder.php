<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Array data produk
        $products = [
            [
                'category_id' => 1,
                'name' => 'Product 1',
                'description' => 'Description for Product 1',
                'price' => 10000,
                'stock' => 50,
                'unit_weight' => 0.5,
                'slug' => 'product-1'
            ],
            [
                'category_id' => 1,
                'name' => 'Product 2',
                'description' => 'Description for Product 2',
                'price' => 15000,
                'stock' => 40,
                'unit_weight' => 0.6,
                'slug' => 'product-2'
            ],
            [
                'category_id' => 2,
                'name' => 'Product 3',
                'description' => 'Description for Product 3',
                'price' => 12000,
                'stock' => 60,
                'unit_weight' => 0.7,
                'slug' => 'product-3'
            ],
            [
                'category_id' => 2,
                'name' => 'Product 4',
                'description' => 'Description for Product 4',
                'price' => 8000,
                'stock' => 30,
                'unit_weight' => 0.8,
                'slug' => 'product-4'
            ],
            [
                'category_id' => 3,
                'name' => 'Product 5',
                'description' => 'Description for Product 5',
                'price' => 9000,
                'stock' => 45,
                'unit_weight' => 0.9,
                'slug' => 'product-5'
            ],
            [
                'category_id' => 3,
                'name' => 'Product 6',
                'description' => 'Description for Product 6',
                'price' => 11000,
                'stock' => 55,
                'unit_weight' => 0.7,
                'slug' => 'product-6'
            ],
            [
                'category_id' => 4,
                'name' => 'Product 7',
                'description' => 'Description for Product 7',
                'price' => 13000,
                'stock' => 70,
                'unit_weight' => 0.6,
                'slug' => 'product-7'
            ],
            [
                'category_id' => 4,
                'name' => 'Product 8',
                'description' => 'Description for Product 8',
                'price' => 17000,
                'stock' => 80,
                'unit_weight' => 0.5,
                'slug' => 'product-8'
            ],
            [
                'category_id' => 5,
                'name' => 'Product 9',
                'description' => 'Description for Product 9',
                'price' => 14000,
                'stock' => 65,
                'unit_weight' => 0.4,
                'slug' => 'product-9'
            ],
            [
                'category_id' => 5,
                'name' => 'Product 10',
                'description' => 'Description for Product 10',
                'price' => 16000,
                'stock' => 75,
                'unit_weight' => 0.3,
                'slug' => 'product-10'
            ],
        ];

        // Loop untuk menambahkan produk ke database
        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
