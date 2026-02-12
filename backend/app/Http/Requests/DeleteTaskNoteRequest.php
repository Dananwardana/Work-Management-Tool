<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\TaskNote;
use App\Enum\UserRole;

class DeleteTaskNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $taskNote = $this->route('taskNote'); // dari route model binding

        if (!$taskNote) return false;

        // Admin & PM boleh hapus semua tasknote
        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return true;
        }

        // Member hanya boleh hapus tasknote miliknya sendiri
        if ($user->role === UserRole::MEMBER) {
            return $taskNote->user_id === $user->id;
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
            //
        ];
    }
}
