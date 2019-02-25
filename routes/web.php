<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Empleado;
use Illuminate\Support\Facades\DB;
/*
Route::get('/', function () {
    return view('welcome');
});
*/
Route::get('/empleados','EmpleadoController@index')->name('empleados.index');
Route::get('/empleados/create','EmpleadoController@create');
Route::post('/empleados/create','EmpleadoController@store')->name('empleados.store');

Route::get('/Pedidos','PedidosController@indexForm')->name('pedidos.pedidosForm');
Route::get('/wwww/{id}','PedidosController@pedidoParticular')->name('pedidos.pedidoParticular');
Route::post('/asdasd','PedidosController@Guardar')->name('pedidos.store');
Route::get('/Home','PedidosController@index')->name('pedidos.index');


Route::view('/{path?}', 'app');
