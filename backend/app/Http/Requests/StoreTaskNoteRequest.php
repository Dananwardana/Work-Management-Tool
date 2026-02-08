<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Task;
use App\Enum\UserRole;

class StoreTaskNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $task = Task::find($this->task_id);

        if (!$task) return false;

        // Admin & PM boleh
        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return true;
        }

        // Member hanya boleh note task miliknya
        if ($user->role === UserRole::MEMBER) {
            return $task->assigned_to === $user->id;
        }

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
            'task_id' => 'required|exists:tasks,id',
            'note'    => 'required|string',
        ];
    }
}
