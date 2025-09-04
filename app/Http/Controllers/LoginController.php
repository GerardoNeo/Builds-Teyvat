<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    function create(Request $request){
        $existe = DB::table('usuario')
            ->where('nombre_usuario', $request->name)
            ->orWhere('correo', $request->correo)
            ->exists();

        if($existe){
            return response()->json(['error' => 'El nombre de usuario o correo ya está registrado'], 400);
        }else{
            DB::table('usuario')->insert([
                'nombre_usuario' => $request->name,
                'correo' => $request->correo,
                'password' => bcrypt($request->pass1),
            ]);

            return response()->json(['success' => 'Usuario creado correctamente']);
        }
    }

    function login(Request $request){
        $existe = DB::table('usuario')
            ->where('nombre_usuario', $request->name)
            ->orWhere('correo', $request->name)
            ->first();

        if(!$existe){
            return response()->json(['error' => 'No existe ese usuario o correo'], 400);
        }else{
            if (($existe->nombre_usuario == $request->name || $existe->correo == $request->name) &&
                password_verify($request->pass1, $existe->password)
            ) {
                return response()->json(true);
            } else {
                return response()->json(false);
            }
        }
    }
}
