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
            'user_id' => User::where('username', 'Superadmin')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Superadmin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Admin Address
        UserAddress::create([
            'user_id' => User::where('username', 'admin')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Admin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Jihan Address
        UserAddress::create([
            'user_id' => User::where('username', 'jihan')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Jihan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Nisa Address
        UserAddress::create([
            'user_id' => User::where('username', 'nisa')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Nisa',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Diba Address
        UserAddress::create([
            'user_id' => User::where('username', 'diba')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Diba',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Bijar Address
        UserAddress::create([
            'user_id' => User::where('username', 'bijar')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Bijar',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);

        // Ikhsan Address
        UserAddress::create([
            'user_id' => User::where('username', 'ikhsan')->first()->id,
            'province_id' => 1, 
            'city_id' => 1, 
            'district_id' => 1, 
            'village_id' => 1, 
            'alias' => 'Rumah Ikhsan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, 
            'long' => 106.123456,
        ]);
    }
}




