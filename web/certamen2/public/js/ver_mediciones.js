const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let consolas = await getLecturas();
            cargarTabla(consolas);
            Swal.fire("Lectura destruida", "Lectura borrada exitosamente", "info");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};


const cargarTabla = (lectura)=>{
    let tbody = document.querySelector("#tbody-medicion");
    tbody.innerHTML="";
    for(let i=0; i<lectura.length; ++i){
        let tr=document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = lectura[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lectura[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lectura[i].medidor;
        let tdValor = document.createElement("td");
        tdValor.innerText = lectura[i].valor;
        
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText="Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = lectura[i].id;
        botonEliminar.addEventListener("click",iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);

    }
};



document.addEventListener("DOMContentLoaded", async()=>{
    let lectura = await getLecturas();
    cargarTabla(lectura);
});