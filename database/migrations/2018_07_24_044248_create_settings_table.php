<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
	        $table->string('code', 191);
	        $table->string('value', 191);
            $table->timestamps();

	        $table->index('code', 'settings_code_idx');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	    Schema::table('settings', function(Blueprint $table){
		    $table->dropIndex('settings_code_idx');
	    });

        Schema::dropIfExists('settings');
    }
}
