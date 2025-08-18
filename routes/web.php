<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewsController;

Route::get('/', function () {
    return view('catalogo');
});

//vistas
Route::get('/infoPersonaje{id}', [ViewsController::class, 'infoPag']);
Route::get('/catalogo', [ViewsController::class, 'catalogo']);