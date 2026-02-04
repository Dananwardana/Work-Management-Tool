<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
}
