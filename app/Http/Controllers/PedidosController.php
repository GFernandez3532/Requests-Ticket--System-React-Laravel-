<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;

class PedidosController extends Controller
{
    public function index(){

        $pedidos = Pedido::all();

       // dd($pedidos);
        return view('Pedidos.Home', compact('pedidos'));

    }

    public function indexForm(){

        return view('Pedidos.PedidoFormulario');
    }

    public function pedidoParticular($id){

        dd($id);
        return view('Pedidos.PedidoParticular');
    }

    public function Guardar(Request $request){

        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'datosRequeridos' => 'required'
        ]);


        $datosrequeridos = implode(", ", $request->datosRequeridos);

        //dd($request->descripcion);

        $pedido = new Pedido();

        $pedido->titulo = $request->titulo;
        $pedido->descripcion = $request->descripcion;
        $pedido->DatosRequeridos = $datosrequeridos;

//        dd($pedido>titulo);

        $pedido->save();

        return redirect()->route('pedidos.index');
    }



// METODOS PARA MODO REACT


    public function indexReact(){

        $pedidos = Pedido::all();


        return $pedidos->toJson();

    }

}
