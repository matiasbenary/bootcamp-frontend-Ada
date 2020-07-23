import React from "react";
import Button from "./componets/Button";
import Lista from "./componets/Lista";

function App() {
  const saludar = () => {
    alert(`hola`);
  };
  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };
  return (
    <div>
      {/* <button onClick={saludar}>Boton</button>
      <h1 onClick={() => saludarConNombre("matias")}>Test</h1> */}
      {/* <Button></Button> */}
      <Lista />
    </div>
  );
}

export default App;
