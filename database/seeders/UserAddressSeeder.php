<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\UserAddress;
use App\Models\User;


class UserAddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // Superadmin Address
          UserAddress::create([
            'user_id' => User::where('fullname', 'Superadmin')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Superadmin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Admin Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'admin')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Admin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Jihan Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'Jihan')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Jihan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Nisa Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'Nisa')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Nisa',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Diba Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'Diba')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Diba',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Bijar Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'Bijar')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Bijar',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);

        // Ikhsan Address
        UserAddress::create([
            'user_id' => User::where('fullname', 'Ikhsan')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1,
            'village' => 1, 
            'alias' => 'Rumah Ikhsan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
        ]);
    }
}




