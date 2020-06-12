// el spread operator me va a descomponer un objeto o array. se escribe asi `...`

const sumar = (a,b,c,d) =>{
  return a+b+c+d;
}

const sumandos = [4,85,6,56,150,48]
const suman2 = [56,48,150,23]
// console.log(sumar(...sumandos))
console.log(Math.max(...sumandos,...suman2))

// Concatenar

// const total = [...suman2,...sumandos];
// const totalAux = [suman2,sumandos];
// console.log(total,totalAux)

const persona = {
  nombre:"Matias",
  edad: 25
};

const persona2 = {
  edad: 30,
  apellido: "Benary"
};

const persona3={ ...persona ,...persona2}
// console.log(persona3)

// Para Clonar
const persona4 = {...persona}
const persona5 = persona

persona.lenguajes = ["HTML"]
persona5.trabajo = "ADA"
// console.log(persona === persona4,persona === persona5);

// console.log(persona4,persona5,persona)

// Para extender un objeto

const elfo = {
  ...persona,
  arma:"Arco",
  edad: 350
}

console.log(elfo);



