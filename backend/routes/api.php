<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;

//User
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');