<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class ViewsController extends Controller
{
    function catalogo(){
        return view('catalogo');
    }

    function infoPag(){
        return view('informacion');
    }

    function perfil(){
        return view('perfil');
    }
}
