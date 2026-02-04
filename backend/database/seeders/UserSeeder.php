<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Enum\UserRole;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insertOrIgnore([
        [
            'name' => 'Test Admin',
            'email' => 'testadmin@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => UserRole::ADMIN,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'name' => 'Test PM',
            'email' => 'testpm@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => UserRole::PM,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'name' => 'Test Member',
            'email' => 'testmember@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => UserRole::MEMBER,
            'created_at' => now(),
            'updated_at' => now(),
        ]
        ]);
    }
}
