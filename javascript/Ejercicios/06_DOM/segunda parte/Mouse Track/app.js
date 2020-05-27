// Hacer que un elemento siga al cursor del mouse. **TIP**: la función que hace que el elemento vaya a la posición del mouse debería invocarse cada cierto intervalo de tiempo con `setInterval`.

const tracker = document.querySelector(".tracker");

document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  moveTracker(posX, posY);
});

const moveTracker = (posX, posY) => {
  tracker.style.left = posX + "px";
  tracker.style.top = posY + "px";
};
