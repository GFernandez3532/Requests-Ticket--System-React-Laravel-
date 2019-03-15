<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTableArea extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');

            $table->timestamps();
        });

        Schema::create('tipo_Pedido', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->integer('area_id')->unsigned();
            $table->foreign('area_id')->references('id')->on('areas');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('area');
        Schema::dropIfExists('tipoPedido');
    }
}
