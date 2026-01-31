<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use PhpParser\Node\Expr\FuncCall;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message' => 'Invalid credential'], 401);
        }
        return new UserResource(Auth::user());
    }
    public function user(){
        return new UserResource(Auth::user());
    }
    public function logout(){
        Auth::guard('web')->logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return response()->json(['message'=>'Logged out']);
    }
}
