import React from "react";
import Button from "./componets/Button";
import Lista from "./componets/Lista";
import Input from "./componets/Input";
import ListaDeTareas from "./componets/ListaDeTareas";

function App() {
  // const saludar = () => {
  //   alert(`hola`);
  // };
  // const saludarConNombre = (nombre) => {
  //   alert(`hola ${nombre}`);
  // };
  return (
    <div>
      {/* <button onClick={saludar}>Boton</button>
      <h1 onClick={() => saludarConNombre("matias")}>Test</h1> */}
      {/* <Button></Button> */}
      <Lista />
      <Input></Input>
      <ListaDeTareas />
    </div>
  );
}

export default App;
