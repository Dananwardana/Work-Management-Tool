<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $UserIds = DB::table('users')->pluck('id');

        DB::table('projects')->insertOrIgnore([
            'nama_project' => 'Example project',
            'PIC' => 2,
            'start_date'=> now(),
            'end_date' => Carbon::now()->addDays(30)->toDateString(),
        ]);
    }
}
