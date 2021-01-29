<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/boot/{id}',[App\Http\Controllers\Controller::class, 'boot'])->name('boot');//ga naar boot 
Route::get('/contact',[App\Http\Controllers\Controller::class, 'contact'])->name('contact');//ga naar boot 
Route::get('/dag',[App\Http\Controllers\Controller::class, 'dag'])->name('dag');//ga naar boot 
Route::get('/prive',[App\Http\Controllers\Controller::class, 'prive'])->name('prive');//ga naar boot 
Route::get('/review',[App\Http\Controllers\Controller::class, 'review'])->name('review');//ga naar boot 
Route::get('/ons',[App\Http\Controllers\Controller::class, 'ons'])->name('ons');//ga naar boot 

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
