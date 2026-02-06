<?php

namespace App\Http\Controllers\API;

use App\Enum\UserRole;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name'=> 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => ['required', Rule::enum(UserRole::class)],
        ]);

        $resource = User::create($fields);

        return response()->json([
            'succes' => true,
            'data' => new UserResource($resource),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            'succes' => true,
            'data' => new UserResource($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $fields = $request->validate([
            'name'=> 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255|unique:users',
            'password' => 'sometimes|required|string|min:8|confirmed',
            'role' => ['sometimes|required', Rule::enum(UserRole::class)],
        ]);

        $user->update($fields);

        return response()->json([
            'succes' => true,
            'data' => new UserResource($user),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->loadCount(['projects', 'tasks', 'taskNotes']);

        if($user->projects_count || $user->tasks_count || $user->task_notes_count){
            return response()->json([
                'success' => false,
                'message' => 'Cannot delete user because it still has related data.',
                'details' => [
                    'projects' => $user->projects_count,
                    'tasks' => $user->tasks_count,
                    'task_notes' => $user->task_notes_count,
            ],
            ], 409);
        }
        $user->delete();

       return response()->noContent();
    }
}
