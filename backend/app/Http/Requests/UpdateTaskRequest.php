<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Task;
use App\Enum\UserRole;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $task = $this->route('task'); // ambil dari route parameter

        if (!$task) return false;

        // Admin bebas update task
        if ($user->role === UserRole::ADMIN) {
            return true;
        }

        // PM boleh update task jika task dibuat di project admin
        if ($user->role === UserRole::PM) {
            return $task->project->creator->role === UserRole::ADMIN;
        }

        // Member tidak boleh update task
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'assigned_to' => 'sometimes|exists:users,id',
            'judul_task'  => 'sometimes|string|max:255',
            'deskripsi'   => 'nullable|string',
            'status'      => 'sometimes|in:to_do,in_progress,done',
            'start_date'  => 'nullable|date',
            'due_date'    => 'nullable|date|after_or_equal:start_date',
            'priority'    => 'sometimes|in:low,medium,high',
        ];
    }
}
