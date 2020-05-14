/*

**🎨 Simón dice**

- Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.

```
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!

fx -> como parametro no le paso nada y me retorna un color al azar
  numeroAleatorio Math.random 0 -> 1 25% *4 100
si el numeroAleatorio es menor a 0.25 rojo
si el numeroAleatorio es menor a 0.50 azul
si el numeroAleatorio es menor a 0.75 azul
sino el color es amarillo



pedir 5 colores y almacenarlos en variables
azul rojo rojo rojo verde
si el usuario ingreso bien el color1 seguir sino perdio
si el usuario ingreso bien el color2 seguir sino perdio
si el usuario ingreso bien el color3 seguir sino perdio
si el usuario ingreso bien el color4 seguir sino perdio
si el usuario ingreso bien el color5 seguir sino perdio

mostrar felicitaciones


pront o algo para que el usuario ingrese el color
*/

const pedirColorAleatorio = () => {
  const numeroAleatorio = Math.random();
  if (numeroAleatorio < 0.25) {
    return "rojo";
  }
  if (numeroAleatorio < 0.5) {
    return "azul";
  }
  if (numeroAleatorio < 0.75) {
    return "amarillo";
  } else {
    return "verde";
  }
};

const color1 = pedirColorAleatorio();
const color2 = pedirColorAleatorio();
const color3 = pedirColorAleatorio();
const color4 = pedirColorAleatorio();
const color5 = pedirColorAleatorio();

alert(`los colores son:${color1},${color2},${color3},${color4},${color5}`);
const usuarioColor1 = prompt("ingrese el primer color");
if (color1 != usuarioColor1) {
  alert("perdiste");
}
const usuarioColor2 = prompt("ingrese el segundo color");
if (color2 != usuarioColor2) {
  alert("perdiste");
}

const usuarioColor3 = prompt("ingrese el tercer color");
if (color3 != usuarioColor3) {
  alert("perdiste");
}

const usuarioColor4 = prompt("ingrese el cuarto color");
if (color4 != usuarioColor4) {
  alert("perdiste");
}

const usuarioColor5 = prompt("ingrese el quinto color");
if (color5 != usuarioColor5) {
  alert("perdiste");
}

alert("felicitaciones ganaste");
