// ## Búsqueda laboral

// - Crear una función que dada una persona y una búsqueda de empleo, devuelva `true` si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

// ```javascript
// persona = {
//   experience: 4,
//   languages: ["JavaScript", "HTML","CSS"],
//   location: ["Buenos Aires"],
//   remuneration: 35000
// }

// busqueda = {
//   experience: 1,
//   languages: ["JavaScript", "HTML"],
//   location: ["Buenos Aires"],
//   remuneration: 40000
// }//return true
// ```

// La persona es adecuada si:

// - tiene igual o más años de experiencia que la búsqueda
// - los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)
// - su locación está incluida dentro de las locaciones posibles de la búsqueda
// - su remuneración (pretendida) es igual o menor a la de la búsqueda

// - (Pista) deberia empezar a comprobar si las condiciones mas sencillas se cumplen,como la expiencia o la remuneracion
// - (Pista) deberia recorrer los array de busqueda y preguntar si estan existen en la persona
// - (Pista) deberia retornar false a la primera que falla.

const busquedaLaboral = (persona, busqueda) => {
  return (
    comprobarExperiencia(persona.experience, busqueda.experience) &&
    comprobarRemuneration(persona.remuneration, busqueda.remuneration) &&
    comprobarSiEstaContenido(persona.languages, busqueda.languages) &&
    comprobarSiEstaContenido(persona.location, busqueda.location)
  );
};

const comprobarExperiencia = (personaExperiencia, busquedaExperiencia) => {
  return personaExperiencia >= busquedaExperiencia;
};

const comprobarRemuneration = (personaRemuneracion, busquedaRemuneracion) => {
  return personaRemuneracion <= busquedaRemuneracion;
};

const comprobarSiEstaContenido = (array1, array2) => {
  let estaContinido = true;
  array2.forEach((element) => {
    if (!array1.includes(element)) {
      estaContinido = false;
    }
  });
  return estaContinido;
};
