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

Route::get('/', function () {
    return "api";
});
Route::group(['prefix' => 'auth'], function () {
    Route::get('/', 'AuthenticateController@user')->name('auth.info');
    Route::get('/logout', 'AuthenticateController@logout')->name('auth.logout');
    Route::post('/login', 'AuthenticateController@login')->name('auth.login');

});
//Route::group(['middleware' => 'jwt.auth'], function () {
    Route::resource('owner', 'OwnerController');
//});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
