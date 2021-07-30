@extends('layouts.master')

@section('main')
<div class="row">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Registrar Lectura</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="hora-txt" class="">Hora</label>
                    <input type="text" id="hora-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="medidor-select" class="form-label">Medidor</label>
                    <select class="form-select" id="medidor-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="direccion-txt" class="">Direccion</label>
                    <input type="text" id="direccion-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="valor-num" class="">Valor</label>
                    <input type="number" id="valor-num" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="medida-select" class="form-label">Tipo de Medida</label>
                    <select class="form-select" id="medida-select">

                    </select>
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>    
@endsection

@section('js')
    <script src="{{asset('js/servicios/lectura_service.js')}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>
@endsection