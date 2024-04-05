<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate([
            'username' => 'Superadmin',
            'fullname' => 'Superadmin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('super-admin');


        User::updateOrCreate([
            'username' => 'admin',
            'fullname' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('admin');


        // assign role user
        User::factory()->count(10)->create()->each(function ($user) {
            $user->assignRole('user');
        });
        
    }
}