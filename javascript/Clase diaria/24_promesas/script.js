const dividir = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (typeof numA != "number" || typeof numB != "number") {
      reject({ type: "invalidNumber", mensaje: "No es numero" });
    }

    if (numB == 0) {
      reject({ type: "zero", mensaje: "No se puede dividir por cero" });
    }

    resultado = numA / numB;

    resolve({
      resultado,
      numA,
      numB,
    });
  });
};

dividir(14, 0)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    if (error.type == "zero") {
      console.error(error.mensaje);
    } else {
      alert(error.mensaje);
    }
  });

const tiempoEspera = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

tiempoEspera(1000)
  .then(() => console.log("Hola 1000"))
  .then(() => tiempoEspera(2000))
  .then(() => console.log("Como estas?"))
  .then(() => tiempoEspera(2000))
  .then(() => console.log("Chau"));

/*

resolve 
return ()
*/
// const getApiInfo = (time) => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve({ info: "lorem" });
//     }

//     reject("NO esta definido");
//   });
// };

// const saludar = () => {
//   console.log("hola");
// };

// const time = (time) => {
//   return new Promise((resolveCallback) => {
//     setTimeout(resolveCallback, time);
//   });
// };

// W
// time(500)
//   .then(saludar)
//   .catch((err) => {
//     console.warn(err);
//   });

// dividir(500, 0)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// try {

// } catch (error) {

// }

// const asincronico = (numero) => {
//   return new Promise((resolve, reject) => {
//     if (numero < 45) {
//       resolve("Ok");
//     } else {
//       reject("Oh no");
//     }
//   });
// };

// asincronico(48)
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const dividir = (num1, num2) => {
//   return new Promise((resolveCallback, rejectCallback) => {
//     if (num1 / num2 == Infinity) {
//       rejectCallback("No se puede dividir");
//     }
//     resolveCallback(num1 / num2);
//   });
// };

// const mostrarResultado = (resultado) => {
//   console.log(resultado);
// };

// dividir(500, 10)
//   .then(mostrarResultado)
//   .catch((error) => {
//     console.error(error);
//   });

// const asincronico = (numero) => {
//   return new Promise((resolve, reject) => {
//     if (numero < 45) {
//       resolve("OK");
//     } else {
//       reject("OHHH NOO!");
//     }
//   });
// };

// asincronico(100)
//   .then((msj) => {
//     console.log(msj);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const dividir = (numA, numB) => {
//   return new Promise((resolve, reject) => {
//     if (numA / numB == Infinity) {
//       reject("NO se puede dividir");
//     }
//     resolve(numA / numB);
//   });
// };

// const mostrarResultado = (resultado) => {
//   console.log(resultado);
// };

// dividir(500, 50)
//   .then(mostrarResultado)
//   .catch((error) => {
//     console.error(error);
//   });
