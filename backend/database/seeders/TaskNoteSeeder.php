<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\User;
use App\Models\TaskNote;

class TaskNoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tasks = Task::all();
        $users = User::all();

        foreach ($tasks as $task) {
            foreach ($users->take(2) as $user) {
                TaskNote::create([
                    'task_id' => $task->id,
                    'user_id' => $user->id,
                    'note' => 'Catatan dari ' . $user->name . ' untuk task #' . $task->id,
                ]);
            }
        }
    }
}
