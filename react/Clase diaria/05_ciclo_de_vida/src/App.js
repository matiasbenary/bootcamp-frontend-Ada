import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./componets/Timer";

const Title = ({ title }) => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  /* Use se usa cuando hay efectos secundarios como :
   * timers
   * localStorage
   * events
   * uso de Api
   */
  // si uso return con arrow funticion ejecuta un funcion cuando el componente se desmonta
  useEffect(() => {
    return () => console.log("Unmounted");
  });

  // todos lo que este dentro de mi funcion de useEffect,se va ejercutar cuando el componente se monte
  useEffect(() => {
    console.log("Mounted");
  });
  // si agrego unos corchetes,se ejecuta una sola vez y es cuando el componente se monta
  useEffect(() => {
    console.log(`Valor de count ${count}`);
  }, []);
  //se ejecuta la primera vez y cada vez que count sufre una modificacion
  useEffect(() => {
    console.log(`Valor de count ${count}`);
  }, [count]);

  return (
    <div>
      <h1> {title} </h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Incremetar count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Incremetar otherCount
      </button>
    </div>
  );
};

/*
Ciclo vida de lo componentes:
- montaje ->agrega el componente al arbol de coponentes
- reders -> cuando el componente esta montado va a volver a rederizar cuando:
  cambie el estado(useState),actualice los props,cuando el padre se vuelva renderizar
- desmontaje -> cuando se quita el componente del arbol de componentes 

*/
function App() {
  const [state, setState] = useState(false);
  /*<button onClick={() => setState(!state)}>click</button>
      {state && <Title title="Soy un titulo"></Title>} */
  return (
    <div>
      <button onClick={() => setState(!state)}>click</button>
      {state && <Timer />}
    </div>
  );
}

export default App;
