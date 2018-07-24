<?php

namespace App\Http\Controllers;

use App\Services\TwitterApiService;
use App\Setting;
use App\Tweet;
use Illuminate\Support\Facades\Log;

/**
 *
 * Class TweetController
 * @package App\Http\Controllers
 */
class TweetController extends Controller
{

	/**
	 * twitter auth token
	 *
	 * @var string
	 */
	protected $bearerToken = null;

	/**
	 *
	 * TweetController constructor.
	 */
	public function __construct() {

		$this->bearerToken = settings('twitter_bearer_token');
	}


	/**
	 * Get tweets by twitter account name
	 *
	 * @param $username
	 *
	 * @return array
	 */
	function getByUserName($username){

	    $twService = New TwitterApiService(
		    env('TWITTER_API_ID', false),
		    env('TWITTER_API_SECRET', false),
		    $this->bearerToken
	    );

	    $userTimeline = $twService->getUserTimeline($username, 200);

	    if (!$this->bearerToken)
		    settings_put( 'twitter_bearer_token', $twService->bearerToken);

		$tweets = [];

		if (!isset($userTimeline->errors)) {
			Tweet::where('user_name', $username)->delete();

			foreach ($userTimeline as $tweet){

				if (
					($coordsObj = $tweet->geo)
					|| ($coordsObj = $tweet->coordinates)
				){
					$tweets[] = Tweet::create([
						'id_str' => $tweet->id_str,
						'user_name' => $username,
						'text' => $tweet->text,
						'created' => date('Y-m-d H:i:s', strtotime($tweet->created_at)),
						'coordinates' => json_encode($coordsObj),
					]);
				}
			}
		}

	    return $tweets;
    }
}