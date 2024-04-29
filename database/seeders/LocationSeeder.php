<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Kavist\RajaOngkir\Facades\RajaOngkir;
use App\Models\Province;
use App\Models\City;


class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $provinces = RajaOngkir::provinsi()->all();
        foreach ($provinces as $province) {
            Province::create([
                'province_id' => $province['province_id'],
                'province'        => $province['province'],
            ]);
            $cities = RajaOngkir::kota()->dariProvinsi($province['province_id'])->get();

            foreach ($cities as $city) {
                City::create([
                    'province_id'   => $province['province_id'],
                    'province' => $province['province'],
                    'city_id'       => $city['city_id'],
                    'city_name'          => $city['city_name'],
                    'type' => $city['type'],
                    'postal_code' => $city['postal_code']

                ]);
            }
        }
    }
}
