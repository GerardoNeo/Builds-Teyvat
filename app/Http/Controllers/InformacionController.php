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
}
