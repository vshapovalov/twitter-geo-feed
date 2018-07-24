<?php

namespace App\Http\Controllers;

/**
 * Common site controller
 *
 * Class SiteController
 * @package App\Http\Controllers
 */
class SiteController extends Controller
{
	/**
	 * Handle root page
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	function getIndex(){
    	return view('index');
    }
}
