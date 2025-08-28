<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewsController;
use App\Http\Controllers\CatalogoController;

Route::get('/', function () {
    return view('login');
});

//vistas
Route::get('/infoPersonaje/{id}', [ViewsController::class, 'infoPag']);
Route::get('/catalogo', [ViewsController::class, 'catalogo']);

//Catalogo
Route::get('/catalogo/list', [CatalogoController::class, 'listPj']);

Route::get('/infoPersonaje/{id}/info', [CatalogoController::class, 'si']);


