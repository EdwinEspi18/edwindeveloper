let soltar;
function comenzar() {
  soltar = document.getElementById("destino");
  soltar.addEventListener("dragenter",function (e) {e.preventDefault();},false);
  soltar.addEventListener("dragover",function (e) {e.preventDefault();},false);
  soltar.addEventListener("drop",soltado,false);
}


function soltado(e) {
  e.preventDefault();
  let archivos = e.dataTransfer.files;
  let listado="";

  for (let f = 0; f < archivos.length; f++) {
    listado +=`Archivo: ${archivos[f].name} Peso: ${(archivos[f].size/1024).toFixed(2)}kb Fecha:  ${archivos[f].lastModifiedDate.toLocaleDateString()} Tipo: ${archivos[f].type} <br>`;
  }

  soltar.innerHTML=listado;
}


window.addEventListener("load",comenzar,false);