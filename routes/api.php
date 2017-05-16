<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::get('/', 'AuthenticateController@user')->name('auth.info');
    Route::get('/logout', 'AuthenticateController@logout')->name('auth.logout');
    Route::post('/login', 'AuthenticateController@login')->name('auth.login');

});
    Route::resource('owner', 'OwnerController');
    Route::resource('car', 'CarController');
    Route::resource('car-part', 'CarPartController');
