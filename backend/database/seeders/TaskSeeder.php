<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\Project;
use App\Models\User;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = Project::all();
        $members = User::where('role', 'member')->get();
        $admin = User::where('role', 'admin')->first();

        foreach ($projects as $project) {
            foreach ($members->take(3) as $member) {
                Task::create([
                    'project_id' => $project->id,
                    'assigned_to' => $member->id,
                    'created_by' => $admin->id,
                    'judul_task' => 'Task untuk ' . $member->name,
                    'deskripsi' => 'Deskripsi task dummy',
                    'status' => 'to_do',
                    'start_date' => now(),
                    'due_date' => now()->addDays(rand(3,10)),
                    'priority' => collect(['low','medium','high'])->random(),
                ]);
            }
        }
    }
}
