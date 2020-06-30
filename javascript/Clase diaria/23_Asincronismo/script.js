console.log("antes");
setTimeout(() => console.log("primero"), 1000);
console.log("en el medio");
setTimeout(() => console.log("segundo"), 500);
console.log("en el medio");
setTimeout(() => console.log("tercero"), 700);
console.log("despues");
//  pedido -> nombre del cliente
setTimeout(function () {
  console.log("Pedir Pedido");
  setTimeout(function () {
    console.log("llevar a la mesa");
    setTimeout(function () {
      console.log("saludar al cliente");
      setTimeout(function () {
        console.log("dar la cuenta");
        // Podríamos continuar hasta el infinito...
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

setTimeout(function () {
  console.log("Pedir Pais");
  setTimeout(function () {
    console.log("pedir provincias");
  }, 2000);
}, 1000);
//  paises: Argentina
//  estados
