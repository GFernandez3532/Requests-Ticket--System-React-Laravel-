<html>
    <head></head>
    <body>
        <div class="container">
            <h1>Crear Empleado</h1>
            <form action="{{route('empleados.store')}}" class="" method="post">
                <input type="hidden" name="_token" value="{{csrf_token()}}">
                <div class="form-group">
                    <label for="">Nombre</label>
                    <input type="text" name="nombre" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Apellido</label>
                    <input type="text" name="apellido" class="form-control">
                </div>
                <input type="submit" class="btn btn-success">
            </form>
        </div>
    </body>
</html>