<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


use App\Models\Transaction;
use App\Models\User;
use App\Models\UserAddress;
use App\Models\Product;

use Faker\Factory as Faker;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        // Ambil semua user
        $users = User::all();

        // Ambil semua alamat user
        $userAddresses = UserAddress::all();

        // Loop untuk membuat 5 transaksi
        foreach (range(1, 5) as $index) {
            $user = $users->random();
            $userAddress = $userAddresses->random();

            // Buat transaksi baru
            $transaction = Transaction::create([
                'user_id' => $user->id,
                'user_address_id' => $userAddress->id,
                'total_weight' => $faker->randomFloat(2, 0, 1000),
                'shipping_cost' => $faker->numberBetween(1000, 10000),
                'delivery_code' => $faker->text(10),
                'code' => 'TRX' . $faker->unique()->randomNumber(6),
                'processed_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'shipped_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'accepted_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'rejected_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'status' => $faker->randomElement(['unpaid', 'processed', 'shipped', 'accepted', 'rejected', 'canceled']),
            ]);
        }
    }
}
