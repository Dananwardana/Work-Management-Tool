<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message' => 'Invalid credential'], 401);
        }

        request()->session()->regenerate();

        return response()->json([
            'message' => 'Login successful',
            'user' => new UserResource($request->user()),
        ]);
    }

    public function user(Request $request){
        return new UserResource(Auth::user());
    }

    public function logout(Request $request){
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return response()->json(['message'=>'Logged out!']);
    }
}
