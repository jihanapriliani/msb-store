<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $categories = [
            [
                'display_name' => 'Bolt',
                'slug' => 'bolt',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Key',
                'slug' => 'key',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Special Glue',
                'slug' => 'special-glue',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Tire',
                'slug' => 'tire',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Rope',
                'slug' => 'rope',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Wrench',
                'slug' => 'wrench',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Oil',
                'slug' => 'oil',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Screwdriver',
                'slug' => 'screwdriver',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Filter',
                'slug' => 'filter',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
            [
                'display_name' => 'Jack',
                'slug' => 'jack',
                // 'image' => 'storage/images/category/bolt.jpg',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }

}
