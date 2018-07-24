<?php

namespace App\Services;

/**
 * Handle twitter API
 *
 * Class TwitterApiService
 * @package App\Services
 */
class TwitterApiService {

	/**
	 * Auth token
	 *
	 * @var string
	 */
	public $bearerToken;

	/**
	 * App id
	 *
	 * @var
	 */
	protected $appId;

	/**
	 * App secret
	 *
	 * @var
	 */
	protected $appSecret;

	/**
	 * Twitter api auth url
	 *
	 * @var string
	 */
	private $authUrl = 'https://api.twitter.com/oauth2/token';

	/**
	 * Twitter api get timeline url
	 *
	 * @var string
	 */
	private $timelineUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

	/**
	 *
	 *
	 * @param string|null $appId
	 * @param string|null $appSecret
	 * @param string|null $bearerToken
	 */
	public function __construct( $appId, $appSecret, $bearerToken = null) {

		$this->appId = $appId;
		$this->appSecret = $appSecret;
		$this->bearerToken = $bearerToken;
	}

	/**
	 * Base curl request
	 *
	 * @param $curlOptions
	 *
	 * @return mixed
	 */
	private function curlRequest( $curlOptions ){

		$ch = curl_init();
		curl_setopt_array($ch, $curlOptions);
		$response = curl_exec($ch);
		curl_close($ch);

		return $response;
	}

	/**
	 * Auth request
	 *
	 * @return string|bool
	 */
	public function auth(){

		if ( !$this->bearerToken && ( $this->appId && $this->appSecret) ) {

			$credentials = base64_encode( $this->appId . ':' . $this->appSecret );

			$response = $this->curlRequest([
				CURLOPT_URL => $this->authUrl,
				CURLOPT_HTTPHEADER => [
					'Authorization: Basic ' . $credentials,
					'Content-Type: application/x-www-form-urlencoded;charset=UTF-8'
				],
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_POST => true,
				CURLOPT_POSTFIELDS => 'grant_type=client_credentials'

			]);

			if ($response && ($response=json_decode($response))){

				return $response->token_type == 'bearer' ? $response->access_token : false;
			}
		}

		return false;
	}

	/**
	 * User timeline request
	 *
	 * @param string $userName
	 * @param int|null $count
	 *
	 * @return array
	 */
	public function getUserTimeline( $userName, $count = 200 ){

		if ( $this->bearerToken || ( $this->bearerToken = $this->auth()) ) {

			$requestUrl = $this->timelineUrl . '?' . http_build_query( [ 'screen_name' => $userName, 'count' => $count ]);

			$response = $this->curlRequest([
				CURLOPT_URL => $requestUrl,
				CURLOPT_HTTPHEADER => [
					'Authorization: Bearer ' . $this->bearerToken
				],
				CURLOPT_RETURNTRANSFER => true
			]);

			return $response ? json_decode($response) : [];
		}

		return [];
	}

}
