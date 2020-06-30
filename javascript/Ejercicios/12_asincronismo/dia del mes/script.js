const getNombreMes = (mes) => {
  mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  if (meses[mes]) {
    return meses[mes];
  } else {
    throw {
      nombre: "MesUndefined",
      mensaje: "El mes ingresado no esta definido",
    };
  }
};

// Try voy a envolver mi codigo que puede tener error
//  Si ocurre un error voy a ejecutar lo que esta en catch
try {
  const mes = getNombreMes(16);
  console.log("Mi mes favorito es: ", mes);
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}
