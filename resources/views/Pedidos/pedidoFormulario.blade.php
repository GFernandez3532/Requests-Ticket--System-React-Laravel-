<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        * {
            box-sizing: border-box;
        }

        input[type=text], select, textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
        }

        label {
            padding: 12px 12px 12px 0;
            display: inline-block;
        }

        input[type=submit] {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            float: right;
        }

        input[type=submit]:hover {
            background-color: #45a049;
        }

        .container {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
        }

        .col-25 {
            float: left;
            width: 25%;
            margin-top: 6px;
        }

        .col-75 {
            float: left;
            width: 75%;
            margin-top: 6px;
        }

        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
        }

        /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
            .col-25, .col-75, input[type=submit] {
                width: 100%;
                margin-top: 0;
            }
        }

        h2.headerTexto {
            text-align: center;
        }
        .button4 {
            background-color: white;
            color: black;
            border: 2px solid #e7e7e7;
        }

        .button4:hover {background-color: #e7e7e7;}

    </style>
</head>
<body>
<h2 class="headerTexto"> Formulario de Pedido</h2>
<button type="button" class="button4" onclick="window.location='{{route('pedidos.index')}}'"> Mis Pedidos</button>
<p></p>
<div class="container">
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
     <form action="{{route('pedidos.store')}}" method="post">
         @csrf
        <div class="row">
            <div class="col-25">
                <label for="titulo">Titulo</label>
            </div>
            <div class="col-75">
                <input type="text" name="titulo" placeholder="Titulo..">
                @if($errors->has("titulo"))
                    <small>{{$errors->first("titulo")}}</small>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="datos">Datos Requeridos</label>
            </div>
            <div class="col-75">
                <input type="checkbox" name="datosRequeridos[]" id="datos" value="idSalesforce" {{is_array(old("datosRequeridos")) && in_array("idSalesforce",old("datosRequeridos"))?"checked":""}}>Id Salesforce<br>
                <input type="checkbox" name="datosRequeridos[]" id="datos" value="nombre">Nombre<br>
                <input type="checkbox" name="datosRequeridos[]" id="datos" value="apellido">Apellido<br>
                <input type="checkbox" name="datosRequeridos[]" id="datos" value="domicilio">Domicilio<br>
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="descripcion">Descripcion</label>
            </div>
            <div class="col-75">
                <textarea id="subject" name="descripcion" placeholder="Escribi una descripcion CORTA.." style="height:200px">{{old("descripcion")}}</textarea>
            </div>
        </div>
        <div class="row">
            <input type="submit" value="Submit">
        </div>
    </form>
</div>

</body>
</html>
