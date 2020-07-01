setTimeout(function () {
  console.log("Pedir Pais");
  setTimeout(function () {
    console.log("pedir provincias");
  }, 2000);
}, 1000);

const miFuncionAsincrona = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero < 40) {
      resolve("Ok");
    } else {
      reject("Te Pasaste de temperatura");
    }
  });
};

miFuncionAsincrona(5)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.warn(err);
  });

const tiempoEspera = (time) => {
  return new Promise((resolveCallback) => {
    setTimeout(resolveCallback, time);
  });
};

// tiempoEspera(1000)
//   .then(() => {
//   console.log("Hola");
// });
