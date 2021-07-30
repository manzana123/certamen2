<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use namespace App\Models\Lectura;

class LecturasController extends Controller
{

    public function getTipos(){
        $tipo = array();
        $tipo[] = "Kilowatts";
        $tipo[] = "Watts";
        $tipo[] = "Temperatura";

        return $tipo;

    }

    public function getLecturas(){
        $lecturas = Lectura::all();
        return $lecturas;
    }

    public function crearLectura(Request $request){
        $input = $request->all();

        $lectura = new Lectura();
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->tipo = $input["tipo"];

        $lectura->save();

        return $lectura;
    }

    public function eliminarLectura(Request $request){
        $input = $request -> all();
        $id = $input["id"];
        $lectura = Lectura::findOrFail($id);
        $lectura -> delete();
        return "ok";
    }

}
