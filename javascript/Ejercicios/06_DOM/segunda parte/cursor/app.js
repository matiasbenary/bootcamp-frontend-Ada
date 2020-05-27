/*
Hacer que un elemento siga al cursor del mouse. **TIP**: la función que hace que el elemento vaya a la posición del mouse debería invocarse cada cierto intervalo de tiempo con `setInterval`.

variables 
    div 
    document
*/
// agarro del dom el elemento con la clase tracker
const tracker = document.querySelector(".tracker");

// Al documento,que es toda la pantalla le agrego el evento mousemove
document.addEventListener("mousemove", (event) => {
  // event me trae toda las info del evento en si,como la posicion del mouse que es clientX y clientY
  const posicionX = event.clientX;
  const posicionY = event.clientY;

  // tracker lo muevo con la coordenadas obtenidas anteriormente
  // le resto 10 para centrarlo
  tracker.style.top = posicionY - 25 + "px";
  tracker.style.left = posicionX - 20 + "px";
});
