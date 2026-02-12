<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\TaskNote;
use App\Enum\UserRole;

class UpdateTaskNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $note = $this->route('taskNote');

        if (!$note) return false;

        // Admin & PM boleh update semua tasknote
        if ($user->role === UserRole::ADMIN || $user->role === UserRole::PM) {
            return true;
        }

        // Member hanya boleh update tasknote miliknya
        if ($user->role === UserRole::MEMBER) {
            return $note->user_id === $user->id;
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
            'note'    => 'required|string',
        ];
    }
}
