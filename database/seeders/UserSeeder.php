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


               
        User::updateOrCreate([
            'username' => 'jihan',
            'fullname' => 'Jihan',
            'email' => 'jihan@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('user');

        User::updateOrCreate([
            'username' => 'nisa',
            'fullname' => 'Nisa',
            'email' => 'nisa@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('user');

        User::updateOrCreate([
            'username' => 'diba',
            'fullname' => 'Diba',
            'email' => 'diba@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('user');

        User::updateOrCreate([
            'username' => 'bijar',
            'fullname' => 'Bijar',
            'email' => 'bijar@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('user');

        User::updateOrCreate([
            'username' => 'ikhsan',
            'fullname' => 'Ikhsan',
            'email' => 'ikhsan@gmail.com',
            'password' => bcrypt('test'),
            'email_verified_at' => now(),
            'remember_token' => '1234567890',
        ])->assignRole('user');
    
    
    }
}