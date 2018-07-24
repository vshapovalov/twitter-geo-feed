<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Setting
 * @package App
 */
class Setting extends Model
{
	/**
	 * @var array
	 */
	protected $fillable = [ 'code', 'value' ];

	/**
	 * Get setting by code
	 *
	 * @param string $code
	 * @param string|null $default
	 *
	 * @return string|null
	 */
	public static function getByCode( $code, $default = null ){

		if ( $settings = self::where('code', $code)->first()) {

			return $settings->value;
		} else {

			return $default;
		}
	}

	/**
	 * Save setting
	 *
	 * @param string $code
	 * @param string $value
	 */
	public static function put( $code, $value ){

		self::where('code', $code)->delete();
		self::create( [ 'code' => $code, 'value' => $value ] );
	}

}
