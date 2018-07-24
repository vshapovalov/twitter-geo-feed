<?php

if (!function_exists('settings')){

	function settings( $code, $default = null ){

		return \App\Setting::getByCode( $code, $default);
	}
}

if (!function_exists('settings_put')){

	function settings_put( $code, $value ){

		\App\Setting::put( $code, $value );
	}
}