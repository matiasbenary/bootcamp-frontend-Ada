import React from "react";
import "./App.css";

const App = () => {
  const persona = {
    nombre: "Matias",
    edad: 25,
  };
  return (
    <div>
      <h1>Hola {persona.nombre}</h1>
      <h3>mi edad es {persona.edad}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ratione
        consequatur omnis dolore quam dolorum sit pariatur quod, quidem sint
        reprehenderit quisquam adipisci corrupti dignissimos magni nesciunt
        alias facere sunt.
      </p>
    </div>
  );
};

export default App;
