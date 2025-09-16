<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InformacionController extends Controller
{
    function infoPj($id)
    {
        $info = DB::table('info_personaje')
            ->join('personaje', 'info_personaje.id_personaje', '=', 'personaje.id_personaje')
            ->join('elemento', 'personaje.id_elemento', '=', 'elemento.id_elemento')
            ->join('tipo_arma', 'personaje.id_tp_arma', '=', 'tipo_arma.id_tp')
            ->where('info_personaje.id_personaje', $id)
            ->first();

        return response()->json($info);
    }

    function set_recomend()
    {
        $info = DB::table('artefacto')
            ->get();

        return response()->json($info);
    }

    function new_comment(Request $request){
        $ok = DB::table('comentario')->insert([
            'id_usuario'   => $request->autor,
            'id_personaje' => $request->pj,
            'texto'        => $request->text
        ]);

        if(!$ok){
            return response()->json(['error' => 'No se puedo hacer el comentario'], 400);
        }else{
            return response()->json(['status' => true]);
        }
    }

    function comments($id){
        $comentarios = DB::table('comentario as a')
            ->join('usuario as b', 'a.id_usuario', '=', 'b.id_usuario')
            ->select('b.nombre_usuario', 'a.texto', 'a.fecha', 'b.foto_url')
            ->where('a.id_personaje', $id)
            ->get();

        return response()->json($comentarios);
    }
}
