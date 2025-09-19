<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PerfilController extends Controller
{
    function ult_comentario($id){
        $comentario = DB::table('comentario as a')
            ->join('usuario as b', 'a.id_usuario', '=', 'b.id_usuario')
            ->where('a.id_usuario', $id)
            ->orderBy('a.fecha', 'desc')
            ->first();

        return response()->json($comentario);
    }

    function info_usuario($id){
        $usuario = DB::table('usuario as b')
            ->join('comentario as a', 'a.id_usuario', '=', 'b.id_usuario')
            ->select('b.*', DB::raw('COUNT(a.id_coment) as total'))
            ->where('b.id_usuario', $id)
            ->groupBy('b.id_usuario')
            ->first();

        if($usuario){
            return response()->json($usuario);
        }else{
            return response()->json(['state' => false, 'message' => 'usuario no encontrado']);
        }
    }

    function nueva_foto(Request $request){
        $request->validate([
            'foto' => 'required|string|max:255'
        ]);

        $ok = DB::table('usuario')
            ->where('id_usuario', $request->id_usuario)
            ->update(['foto_url' => $request->foto]);

        if($ok){
            return response()->json(['state' => true, 'message' => 'foto cambiada']);
        }else{
            return response()->json(['state' => false, 'message' => 'foto no cambiada']);
        }
    }
}