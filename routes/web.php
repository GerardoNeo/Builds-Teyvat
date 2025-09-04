<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewsController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\InformacionController;

Route::get('/', function () {
    return view('login');
});

//vistas
Route::get('/infoPersonaje/{id}', [ViewsController::class, 'infoPag']);
Route::get('/catalogo', [ViewsController::class, 'catalogo']);

//Catalogo
Route::get('/catalogo/list', [CatalogoController::class, 'listPj']);


//Informacion
Route::get('/infoPersonaje/{id}/info', [InformacionController::class, 'infoPj']);
Route::get('/artefacto', [InformacionController::class, 'set_recomend']);



