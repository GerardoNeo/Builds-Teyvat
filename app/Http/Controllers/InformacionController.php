<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InformacionController extends Controller
{
    function infoPj($id)
    {
        $info = DB::table('info_personaje as a')
            ->join('personaje as b', 'a.id_personaje', '=', 'b.id_personaje')
            ->join('elemento as c', 'b.id_elemento', '=', 'c.id_elemento')
            ->where('a.id_personaje', $id)
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
