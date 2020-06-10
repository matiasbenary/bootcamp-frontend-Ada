const array = [65, 659, 87, 52, 32, 14];

const agraparPariedad = (listaDeNumero) => {
  // const pariedad = {
  //   par: [],
  //   impar: [],
  // };

  // for (const numero of listaDeNumero) {
  //   numero % 2 === 0 ? pariedad.par.push(numero) : pariedad.impar.push(numero);
  // }

  const par = listaDeNumero.filter((numero) => numero % 2 === 0);

  const impar = listaDeNumero.filter((numero) => {
    return numero % 2 === 1;
  });

  return {
    par,
    impar,
  };
};

console.log(agraparPariedad(array));
