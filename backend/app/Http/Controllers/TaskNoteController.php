<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaskNote;
use App\Enum\UserRole;
use App\Models\Task;
use App\Http\Requests\StoreTaskNoteRequest;
use App\Http\Requests\UpdateTaskNoteRequest;
use App\Http\Requests\DeleteTaskNoteRequest;

class TaskNoteController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = TaskNote::with(['user','task']);

        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return response()->json($query->get());
        }

        if ($user->role === UserRole::MEMBER) {
            return response()->json(
                $query->where('user_id', $user->id)->get()
            );
        }

        return response()->json([], 403);
    }

    public function store(StoreTaskNoteRequest $request)
    {
        $note = TaskNote::create([
            'task_id' => $request->task_id,
            'user_id' => auth()->id(),
            'note'    => $request->note,
        ]);

        return response()->json([
            'message' => 'Catatan berhasil ditambahkan',
            'data' => $note
        ], 201);
    }

    public function show(TaskNote $taskNote)
    {
        $user = auth()->user();

        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return response()->json(
                $taskNote->load(['user','task'])
            );
        }

        if ($user->role === UserRole::MEMBER) {
            if ($taskNote->user_id === $user->id) {
                return response()->json(
                    $taskNote->load(['user','task'])
                );
            }
        }

        return response()->json([
            'message' => 'Anda tidak memiliki akses ke catatan ini'
        ], 403);
    }

    public function update(UpdateTaskNoteRequest $request, TaskNote $taskNote)
    {
        $taskNote->update($request->validated());

        return response()->json([
            'message' => 'Catatan berhasil diperbarui',
            'data' => $taskNote
        ]);
    }

    public function destroy(DeleteTaskNoteRequest $request, TaskNote $taskNote)
    {
        $taskNote->delete();

        return response()->json([
            'message' => 'Catatan berhasil dihapus'
        ]);
    }

    public function byTask($taskId)
    {
        $user = auth()->user();
        $task = Task::findOrFail($taskId);

        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return response()->json(
                $task->notes()->with('user')->get()
            );
        }

        if ($user->role === UserRole::MEMBER) {
            if ($task->assigned_to === $user->id) {
                return response()->json(
                    $task->notes()->with('user')->get()
                );
            }
        }

        return response()->json([
            'message' => 'Anda tidak memiliki akses ke task ini'
        ], 403);
    }
}
