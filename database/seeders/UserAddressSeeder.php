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
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Superadmin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Admin Address
        UserAddress::create([
            'user_id' => User::where('username', 'admin')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Admin',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Jihan Address
        UserAddress::create([
            'user_id' => User::where('username', 'jihan')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Jihan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Nisa Address
        UserAddress::create([
            'user_id' => User::where('username', 'nisa')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Nisa',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Diba Address
        UserAddress::create([
            'user_id' => User::where('username', 'diba')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Diba',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Bijar Address
        UserAddress::create([
            'user_id' => User::where('username', 'bijar')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Bijar',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);

        // Ikhsan Address
        UserAddress::create([
            'user_id' => User::where('username', 'ikhsan')->first()->id,
            'province_id' => 1, // Ganti dengan ID provinsi yang sesuai
            'city_id' => 1, // Ganti dengan ID kota yang sesuai
            'regency_id' => 1, // Ganti dengan ID kabupaten/kota yang sesuai
            'alias' => 'Rumah Ikhsan',
            'zipcode' => 12345,
            'country' => 'Indonesia',
            'address' => 'Jalan Contoh No. 123',
            'lat' => -6.123456, // Ganti dengan koordinat latitude yang sesuai
            'long' => 106.123456, // Ganti dengan koordinat longitude yang sesuai
        ]);
    }
}




