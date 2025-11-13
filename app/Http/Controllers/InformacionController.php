<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InformacionController extends Controller
{
    function promedio($id){
        $promedio = DB::table('voto_personaje')
            ->where('id_personaje', $id) // reemplaza 1 por el id que necesites
            ->avg('voto');

        return response()->json($promedio);
    }

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

    function arma_recomend($id)
    {
        $info = DB::table('arma')
            ->where('id_tp', $id)
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
            ->where('a.id_personaje', $id)
            ->get();

        return response()->json($comentarios);
    }

    function recomendar_arma(Request $request){
        $ok = DB::table('voto_arma')
            ->where('id_personaje', $request->id_personaje)
            ->where('id_arma', $request->id_arma)
            ->where('id_usuario', $request->id_usuario)
            ->exists();

        if(!$ok){
            $result = DB::table('voto_arma')->insert([
                'id_usuario'    => $request->id_usuario,
                'id_arma'       => $request->id_arma,
                'id_personaje'  => $request->id_personaje
            ]);

            return response()->json(['status' => true]);
        }else{
            return response()->json([
                'status' => false, 
                'message' => 'Ya votaste por esta arma en este personaje'
            ], 400);
        }
    }

    function recomendar_set(Request $request){
        $ok = DB::table('voto_set')
            ->where('id_personaje', $request->id_personaje)
            ->where('id_art', $request->id_art)
            ->where('id_usuario', $request->id_usuario)
            ->exists();

        if(!$ok){
            $result = DB::table('voto_set')->insert([
            'id_usuario'    => $request->id_usuario,
            'id_art'       => $request->id_art,
            'id_personaje'  => $request->id_personaje
            ]);

            return response()->json(['status' => true]);
        }else{
            return response()->json([
                'status' => false, 
                'message' => 'Ya votaste por esta set en este personaje'
            ], 400);
        }
    }

    function recomendar_pj(Request $request){
        $ok = DB::table('voto_personaje')
            ->where('id_personaje', $request->id_personaje)
            ->where('id_usuario', $request->id_usuario)
            ->exists();

        if(!$ok){
            $result = DB::table('voto_personaje')->insert([
            'id_usuario'    => $request->id_usuario,
            'id_personaje'  => $request->id_personaje,
            'voto'          => $request->voto
            ]);

            return response()->json(['status' => true]);
        }else{
            return response()->json([
                'status' => false, 
                'message' => 'Ya votaste por este personaje'
            ], 400);
        }
    }
                
    function arma_list($id){
        $result = DB::table('voto_arma as a')
            ->join('arma as b', 'a.id_arma', '=', 'b.id_arma')
            ->select('b.*', DB::raw('COUNT(a.id_voto_arma) as total_votos'))
            ->where('a.id_personaje', $id)
            ->groupBy('b.id_arma')
            ->orderByDesc('total_votos')
            ->get();

        if(!$result){
            return response()->json(['error' => 'No hay armas recomendadas'], 400);
        }else{
            return response()->json($result);
        }
    }

    function set_list($id){
        $result = DB::table('voto_set as a')
            ->join('artefacto as b', 'a.id_art', '=', 'b.id_art')
            ->select('b.*', DB::raw('COUNT(a.id_voto_set) as total_votos'))
            ->where('a.id_personaje', $id)
            ->groupBy('b.id_art')
            ->orderByDesc('total_votos')
            ->get();

        if(!$result){
            return response()->json(['error' => 'No hay sets recomendadas'], 400);
        }else{
            return response()->json($result);
        }
    }
}
