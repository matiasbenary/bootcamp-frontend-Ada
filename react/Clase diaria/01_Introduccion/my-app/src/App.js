import React from "react";
//import "./App.css";
import styles from "./App.module.scss";
const App = () => {
  const persona = {
    nombre: "Matias",
    edad: 25,
  };
  return (
    <div>
      <h1 className={styles.title}>Hola {persona.nombre}</h1>
      <h3 className={styles.subtitle}>mi edad es {persona.edad}</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ratione
        consequatur omnis dolore quam dolorum sit pariatur quod, quidem sint
        reprehenderit quisquam adipisci corrupti dignissimos magni nesciunt
        alias facere sunt.
      </p>
    </div>
  );
};

export default App;
