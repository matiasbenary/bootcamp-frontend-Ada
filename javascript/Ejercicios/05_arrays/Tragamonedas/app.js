/*
**Tragamonedas**

- Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

```javascript
// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado
```

1- ingresa un string
2- string a array
3- comparar los primeros 5 elementos
  Si son iguales mostrar mensaje de felicitaciones
  si son diferentes mostrar mensaje de has perdido

*/

// const simbolosString = "💫 💫 💫 💫 💫";
const simbolosString = prompt("ingrese los simbolos");
const simbolos = simbolosString.split(" ");

// if(simbolos[0] == simbolos[1] 
//   && simbolos[1] == simbolos[2]
//   && simbolos[2] == simbolos[3]
//   && simbolos[3] == simbolos[4]){
//   console.log("Has Ganado");
// }else{
//   console.log("Has Perdido");
// }


let isGanador=true;

for(let i = 1; i <5;i++){
  if(simbolos[0] !== simbolos[i]){
    isGanador = false;
    break;
  }
}
alert(isGanador?"Has Ganado":"Has Perdido");

