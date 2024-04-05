<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionDetail;

use Faker\Factory as Faker;

class TransactionDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        // Ambil semua transaksi yang ada
        $transactions = Transaction::all();

        // Ambil semua produk yang ada
        $products = Product::all();

        // Loop untuk membuat detail transaksi untuk setiap transaksi
        foreach ($transactions as $transaction) {
            // Tentukan jumlah detail transaksi yang akan dibuat
            $detailCount = $faker->numberBetween(1, 3);

            // Ambil produk secara acak
            $selectedProducts = $products->random($detailCount);

            // Loop untuk setiap produk yang dipilih
            foreach ($selectedProducts as $product) {
                // Buat detail transaksi baru
                TransactionDetail::create([
                    'transaction_id' => $transaction->id,
                    'product_id' => $product->id,
                    'actual_price' => $product->price,
                    'amount' => $faker->numberBetween(1, 5),
                ]);
            }
        }
    }
}
