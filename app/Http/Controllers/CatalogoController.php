<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CatalogoController extends Controller
{
    function listPj(){
        $list = DB::table('personaje')->get();

        return response()->json($list);
    }
}
