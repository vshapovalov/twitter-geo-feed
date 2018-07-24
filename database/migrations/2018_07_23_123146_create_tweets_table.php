<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTweetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tweets', function (Blueprint $table) {
            $table->increments('id');
	        $table->string('id_str', 191);
	        $table->string('user_name', 191);
	        $table->timestamp('created');
	        $table->text('text');
	        $table->text('coordinates');

	        $table->index('user_name', 'tweets_user_name_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {


    	Schema::table('tweets', function(Blueprint $table){
		    $table->dropIndex('tweets_user_name_idx');
	    });

        Schema::dropIfExists('tweets');
    }
}

