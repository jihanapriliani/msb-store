<?php

namespace Database\Seeders;
use Database\Seeders\CategorySeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\ProductImageSeeder;
use Database\Seeders\TransactionSeeder;
use Database\Seeders\UserAddressSeeder;
use Database\Seeders\TransactionSDetailSeeder;
use Database\Seeders\LocationSeeder;
use Database\Seeders\DistrictSeeder;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(CategorySeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(ProductImageSeeder::class);
        $this->call(UserAddressSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(DistrictSeeder::class);

        // $this->call(TransactionSeeder::class);
        // $this->call(TransactionDetailSeeder::class);
    }
}
