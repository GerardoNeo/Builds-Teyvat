<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewsController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\InformacionController;
use App\Http\Controllers\LoginController;

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
Route::get('/artefacto_recomendado/{id}', [InformacionController::class, 'set_list']);
Route::get('/arma_recomendada/{id}', [InformacionController::class, 'arma_list']);
Route::get('/arma/{id}', [InformacionController::class, 'arma_recomend']);
Route::get('/artefacto', [InformacionController::class, 'set_recomend']);
Route::get('/comments/{id}', [InformacionController::class, 'comments']);
Route::post('/newComment', [InformacionController::class, 'new_comment']);
Route::post('/votoArma', [InformacionController::class, 'recomendar_arma']);
Route::post('/votoSet', [InformacionController::class, 'recomendar_set']);

//Login
Route::post('login/create', [LoginController::class, 'create']);
Route::post('login/in', [LoginController::class, 'login']);