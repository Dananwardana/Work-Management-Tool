<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Task;
use App\Enum\UserRole;

class DeleteTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $task = $this->route('task'); // dari route model binding

        if (!$task) return false;

        // Admin bebas hapus task
        if ($user->role === UserRole::ADMIN) {
            return true;
        }

        // PM boleh hapus task jika task berada di project buatan admin
        if ($user->role === UserRole::PM) {
            return $task->project->creator->role === UserRole::ADMIN;
        }

        // Member tidak boleh hapus task
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
            //
        ];
    }
}
