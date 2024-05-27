<?php

namespace App\Http\Controllers;

use App\Models\Province;
use App\Models\City;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    //


    public function getProvincesApi()
    {
        $provinces = Province::all();
        return response()->json($provinces);
    }


    public function getCitiesApi(Request $request)
    {
        $province_id = $request->input('province_id');
        $province = Province::find($province_id);
        return response()->json($province->cities);
    }

    public function getDistrictsApi(Request $request)
    {
        $city_id = $request->input('city_id');
        $city = City::where('city_id', $city_id)->first();
        return response()->json($city->Districts);
    }
}
