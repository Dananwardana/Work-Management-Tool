<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Project;
use App\Enum\UserRole;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $project = Project::find($this->project_id);

        if (!$project) return false;

        // Admin bebas
        if ($user->role === UserRole::ADMIN) {
            return true;
        }

        // PM hanya boleh buat task di project buatan admin
        if ($user->role === UserRole::PM) {
            return $project->creator->role === UserRole::ADMIN;
        }

        // Member tidak boleh buat task
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
            'project_id'   => 'required|exists:projects,id',
            'assigned_to'  => 'required|exists:users,id',
            'judul_task'   => 'required|string|max:255',
            'deskripsi'    => 'nullable|string',
            'status'       => 'required|in:to_do,in_progress,done',
            'start_date'   => 'nullable|date',
            'due_date'     => 'nullable|date|after_or_equal:start_date',
            'priority'     => 'required|in:low,medium,high',
        ];
    }

    public function messages(): array
    {
        return [
            'project_id.required' => 'Project wajib diisi.',
            'assigned_to.required' => 'User harus dipilih.',
            'judul_task.required' => 'Judul task wajib diisi.',
        ];
    }
}
