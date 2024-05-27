<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\District;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Baca isi file JSON
        $json = File::get(database_path('seeders/json/cities_grouped_by_province_transformed_with_subdistricts.json'));
        $data = json_decode($json, true);

        foreach ($data as $province) {
            foreach ($province['cities'] as $city) {
                foreach ($city['sub_districts'] as $subDistrict) {
                    District::create([
                        'district_id' => $subDistrict['id'],
                        'city_id' => $city['city_id'],
                        'province_id' => $province['id'],
                        'province' => $province['province'],
                        'city_type' => $city['type'],
                        'city' => $city['city_name'],
                        'district_name' => $subDistrict['nama'],
                    ]);
                }
            }
        }
    }
}
