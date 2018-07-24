<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Tweet
 * @package App
 */
class Tweet extends Model
{
	protected $fillable = [
    	'user_name', 'text', 'id_str', 'created', 'coordinates'
    ];

	public $timestamps = false;

	protected $appends = [ 'coords', 'createdFormatted' ];

	public function getCoordsAttribute(){

    	return json_decode( $this->coordinates );
	}

	public function getCreatedFormattedAttribute(){

		return Carbon::parse( $this->created )->diffForHumans();
	}
}
