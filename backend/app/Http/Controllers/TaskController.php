<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Enum\UserRole;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Requests\DeleteTaskRequest;

class TaskController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = Task::with(['project', 'user', 'creator']);

        // Admin: lihat semua task
        if ($user->role === UserRole::ADMIN) {
            return response()->json($query->get());
        }

        // PM: lihat task di project buatan admin
        if ($user->role === UserRole::PM) {
            return response()->json(
                $query->whereHas('project.creator', function ($q) {
                    $q->where('role', UserRole::ADMIN);
                })->get()
            );
        }

        // Member: hanya lihat task yang dia kerjakan
        if ($user->role === UserRole::MEMBER) {
            return response()->json(
                $query->where('assigned_to', $user->id)->get()
            );
        }

        return response()->json([], 403);
    }

    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = auth()->id();

        $task = Task::create($data);

        return response()->json([
            'message' => 'Task created successfully.',
            'data'    => $task,
        ], 201);
    }

    public function show(Task $task)
    {
        return response()->json(
            $task->load(['project', 'user', 'notes'])
        );
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return response()->json([
            'message' => 'Task berhasil diperbarui',
            'data' => $task
        ]);
    }

    public function destroy(DeleteTaskRequest $request, Task $task)
    {
        $task->delete();

        return response()->json([
            'message' => 'Task berhasil dihapus'
        ]);
    }
}
