// 4. `obtenerPromedioDeEstudiante`, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const estudiante = {
  edad: 17,
  familiar: "Salamandra",
  casa: "Hufflepuff",
  nombreCompleto: {
    nombre: "Ellis",
    apellido: "Reeves",
  },
  hechizoPreferido: "Expecto Patronum",
  materias: [
    {
      nombre: "Astronomía",
      promedio: 1,
    },
    {
      nombre: "Encantamientos",
      promedio: 6,
    },
    {
      nombre: "Defensa Contra las Artes Oscuras",
      promedio: 2,
    },
    {
      nombre: "Vuelo",
      promedio: 0,
    },
    {
      nombre: "Herbología",
      promedio: 2,
    },
    {
      nombre: "Historia de la Magia",
      promedio: 2,
    },
    {
      nombre: "Pociones",
      promedio: 8,
    },
    {
      nombre: "Transformaciones",
      promedio: 1,
    },
  ],
  amigues: [
    {
      nombre: "Richard Bean",
      edad: 21,
      casa: "Gryffindor",
      hechizoPreferido: "Expelliarmus",
      familiar: "Lechuza",
    },
    {
      nombre: "Sosa Martinez",
      edad: 19,
      casa: "Gryffindor",
      hechizoPreferido: "Petrificus Totalus",
      familiar: "Salamandra",
    },
    {
      nombre: "Kirk Joyner",
      edad: 15,
      casa: "Hufflepuff",
      hechizoPreferido: "Petrificus Totalus",
      familiar: "Rata",
    },
    {
      nombre: "Rodriquez Carey",
      edad: 13,
      casa: "Slytherin",
      hechizoPreferido: "Accio",
      familiar: "Salamandra",
    },
    {
      nombre: "Leslie Humphrey",
      edad: 19,
      casa: "Ravenclaw",
      hechizoPreferido: "Lumos",
      familiar: "Lechuza",
    },
    {
      nombre: "Ollie Merrill",
      edad: 12,
      casa: "Ravenclaw",
      hechizoPreferido: "Wingardium Leviosa",
      familiar: "Gato",
    },
    {
      nombre: "Vicky Boyd",
      edad: 16,
      casa: "Hufflepuff",
      hechizoPreferido: "Lumos",
      familiar: "Rata",
    },
    {
      nombre: "Edwards Mann",
      edad: 13,
      casa: "Hufflepuff",
      hechizoPreferido: "Expecto Patronum",
      familiar: "Sapo",
    },
  ],
};
const obtenerPromedioDeEstudiante = (estudiante) => {
  const sumaNotas = estudiante.materias.reduce((suma, materia) => {
    return suma + materia.promedio;
  }, 0);

  return sumaNotas / estudiante.materias.length;
};

// 5. `estudiantesConPromedioMayorA`, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)

const estudiantesConPromedioMayorA = (estudiantes, promedio) =>
  estudiantes.filter(
    (estudiante) => obtenerPromedioDeEstudiante(estudiante) > promedio
  );
