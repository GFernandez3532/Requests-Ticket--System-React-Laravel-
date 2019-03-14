<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTipoyEstadoPedidos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Pedidos', function($table){
        $table->string('tipo');
        $table->string('estado')->default('pendiente');

    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Pedidos', function($table){
            $table->dropColumn('estado');
            $table->dropColumn('tipo');
        });
    }
}
