const exceptionUsuario = (mensaje) => {
  return {
    mensaje,
    nombre: "ExceptionUsuario",
  };
};

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
  if (meses[mes] != null) {
    return meses[mes];
  } else {
    miExcepcionUsuario = exceptionUsuario("NumeroMesNoValido");
    throw miExcepcionUsuario;
  }
};

try {
  // sentencias para try
  nombreMes = getNombreMes(13);
} catch (excepcion) {
  nombreMes = "desconocido";
  console.log(excepcion); // pasa el objeto exception al manejador de errores
}

console.log("nombre", nombreMes);
