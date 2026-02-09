<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use App\Models\Project;
use App\Models\User;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();
        $pm = User::where('role', 'pm')->first();

        Project::create([
            'nama_project' => 'Sistem Manajemen Workflow',
            'deskripsi' => 'Project internal untuk manajemen task',
            'status' => 'to_do',
            'start_date' => now(),
            'end_date' => now()->addDays(30),
            'PIC' => 2,
            'created_by' => $admin?->id ?? $pm?->id,
        ]);

        Project::create([
            'nama_project' => 'Dashboard Kinerja',
            'deskripsi' => 'Monitoring performa user',
            'status' => 'in_progress',
            'start_date' => now()->subDays(5),
            'end_date' => now()->addDays(20),
            'PIC' => 2,
            'created_by' => $pm?->id ?? $admi
    }
}
