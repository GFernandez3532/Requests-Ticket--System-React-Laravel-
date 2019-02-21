<?php

namespace App\Http\Controllers;

use App\Empleado;
use Illuminate\Http\Request;

class EmpleadoController extends Controller
{
    public function index(){
        $empleados = Empleado::all();
        return view('empleados.empleados',compact('empleados'));
    }

    public function create(){
        return view('empleados.create');
    }

    public function store(Request $request){

        $request->validate([
           'nombre' => 'required',
            'apellido' => 'required'
        ]);

        $empleado = new Empleado();

        $empleado->nombre = $request->nombre;
        $empleado->apellido = $request->apellido;

        $empleado->save();

        return redirect()->route('empleados.index');
    }
}
