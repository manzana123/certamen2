const cargarTipos = async()=>{ 
    let resultado = await axios.get("api/tipos/get");
    let tipos = resultado.data;
    let medidaSelect = document.querySelector("#medida-select");
    tipos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidaSelect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipos();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{

    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-num").value.trim();
    let tipo = document.querySelector("#medida-select").value.trim();

    let errores =[];

    if(hora===""){
        errores.push ("Ingrese una hora");
    }else if(hora.length!=5 || hora.charAt(2)!=':'){
        errores.push("El formato de la hora ingresada no es valido");
    }

    if(valor==0){
        errores.push ("Ingrese un valor mayor a 0");
    }else if(valor<0 || valor>500){
        errores.push("El valor debe estar dentro del rango establecido (1-500)");
    }


    if(errores.length == 0){

    let lectura={};
    lectura.fecha = fecha;
    lectura.hora = hora;
    lectura.medidor = medidor;
    lectura.direccion = direccion;
    lectura.valor = valor;
    lectura.tipo = tipo;
        
    let res = await crearLectura(lectura);
    await Swal.fire("Lectura añadida", "Lectura añadida correctamente","info");
    window.location.href = "ver_mediciones";

    }else{
    Swal.fire({
        title:"Errores de validacion",
        icon: "warning",
        html: errores.join("<br />")
    });
};
});