<html>
    <head></head>
    <body>
        <div class="container">
            <h1>Empleados</h1>
            <ul>
                @foreach($empleados as $empleado)
                    <li>{{$empleado->apellido}}, {{$empleado->nombre}}</li>
                @endforeach
            </ul>
        </div>
    </body>
</html>