/*
Async lo voy a colocar antes de los parentesis para decir que mi funcion es asincronica
Y cada promersa ahora le voy a poner await,esto me va a retornar el resolve

*/
const dividirAsyncAwait = async (numA, numB) => {
  const promise = new Promise((resolve, reject) => {
    result = numA / numB;

    if (numB === 0) {
      reject({ mensaje: "Es Cero", tipo: "DivisionPorCero" });
    }

    resolve({
      result,
      numA,
      numB,
    });
  });

  const resultado = await promise;

  return resultado;
};

const mostraResultado = async (numA, numB) => {
  try {
    console.log(await dividirAsyncAwait(numA, numB));
  } catch (error) {
    alert(error.mensaje);
  }
};

mostraResultado(14, 0);

// const dividir = async (numA, numB) => {
//   let promesa = new Promise((resolve) => {
//     resultado = numA / numB;
//     resolve({ resultado, numA, numB });
//   });

//   // promesa.then((value) => {
//   //   console.log(value);
//   // });
//   let prueba = await promesa;
//   console.log(prueba);
// };
// dividir(14, 2);
