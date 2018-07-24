<?php

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

Route::get('/', 'SiteController@getIndex');

Route::group([ 'prefix' => 'tweets'], function(){
	Route::get('user/{username}', 'TweetController@getByUserName');
});

