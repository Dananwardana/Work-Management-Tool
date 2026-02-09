<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Enum\UserRole;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nama_project',
        'deskripsi',
        'status',
        'PIC',
        'start_date',
        'end_date',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'PIC');
    }
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    public function scopeVisibleTo($query, User $user)
    {
    // ADMIN lihat semua
    if ($user->role === UserRole::ADMIN) {
        return $query;
    }
     // PM hanya lihat project assigned
    if ($user->role === UserRole::PM) {
        return $query->where('PIC', $user->id);
    }
}
}
