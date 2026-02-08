<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskNoteController;

Route::middleware('auth:sanctum')->group(function () {
    // Task
    Route::get('tasks', [TaskController::class, 'index']);
    Route::post('tasks', [TaskController::class, 'store']);     
    Route::get('tasks/{task}', [TaskController::class, 'show']); 
    Route::put('tasks/{task}', [TaskController::class, 'update']); 
    Route::delete('tasks/{task}', [TaskController::class, 'destroy']); 

    // Task Note
    Route::get('task-notes', [TaskNoteController::class, 'index']); 
    Route::post('task-notes', [TaskNoteController::class, 'store']); 
    Route::get('task-notes/{taskNote}', [TaskNoteController::class, 'show']); 
    Route::put('task-notes/{taskNote}', [TaskNoteController::class, 'update']); 
    Route::delete('task-notes/{taskNote}', [TaskNoteController::class, 'destroy']); 

    // custom: get notes by task
    Route::get('tasks/{task}/notes', [TaskNoteController::class, 'byTask']);
});

/*
Route::post('/login', [AuthController::class, 'login'])->middleware('web');


Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
*/