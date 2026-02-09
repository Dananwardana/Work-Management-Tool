<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\UserController;

//User
Route::apiResource('users', UserController::class)->middleware(['auth:sanctum','can:only-admins']);

//Project
Route::apiResource('projects', ProjectController::class)->middleware(['auth:sanctum']);
