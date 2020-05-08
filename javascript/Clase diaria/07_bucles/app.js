for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("La tercera es la vencida");
    continue;
  }
  console.log(`el numero actual es ${i}`);
  if (i === 7) {
    console.log("Se termina aca");
    break;
  }
}

let o = 0;

while (o < 10) {
  o++;
  if (o === 3) {
    console.log("La tercera es la vencida");
  }
  console.log(`el numero actual es ${o}`);
  if (o === 7) {
    console.log("Se termina aca");
    break;
  }
}

let e = 0;
do {
  e++;
  console.log(e);
} while (e < 100);
