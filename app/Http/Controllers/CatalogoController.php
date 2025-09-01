<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CatalogoController extends Controller
{
    function listPj(){
        $list = DB::table('elemento as a')
            ->join('personaje as b', 'a.id_elemento', '=', 'b.id_elemento')
            ->join('tipo_arma as c', 'b.id_tp_arma', '=', 'c.id_tp')
            ->select('b.id_personaje', 'b.nombre', 'a.nombre_ele', 'c.nombre_tp', 'b.poster_url', 'b.banner_url')
            ->orderBy('b.nombre', 'asc')
            ->get();

        return response()->json($list);
    }

    function si($id)
    {
        $info = DB::table('info_personaje')
            ->where('id_personaje', $id)
            ->get();

        return response()->json($info);
    }

    function no()
    {
        $info = DB::table('artefacto')
            ->get();

        return response()->json($info);
    }
}
