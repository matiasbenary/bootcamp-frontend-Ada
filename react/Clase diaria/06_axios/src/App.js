import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function App() {
  /*
  voy a tener 3 estados 
  data para la info de la api
  error para los errores este puede ser boolean,texto,objeto
  isLoading para poner una animacion de carga
  */
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [idData, setIdData] = useState(1);
  const characterLimit = 591;
  // necesito una primera carga de la api
  // IMPORTANTE NO OLVIDAR LOS CORCHETES esto me va a producir un bucle

  useEffect(() => {
    // primero antes de hacer la peticion que nose cuando puede tardar inicializo el loading,es decir que se muestra la animacion de carga hasta que obtenga la respuesta de la api
    setIsLoading(true);
    setError("");

    axios
      // primero hacemos un get a la api
      .get(`https://rickandmortyapi.com/api/character/${idData}`)
      // cuando nos responda vamos a guardar la info en una varible local,data en nuestro caso
      // cuando termina,desactivamos el loading
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      //en caso de error voy a mostrar un mensaje
      .catch((e) => {
        setIsLoading(false);
        setError(e.response.data.error);
      });
  }, [idData]);
  // ahora uuseEffect esta en funcion de idData,esto quiere decir que se ejecuta cuando cambia idData
  const nextCharacter = () => {
    if (idData === characterLimit) {
      setIdData(1);
    } else {
      setIdData(idData + 1);
    }
  };
  const previousCharacter = () => {
    if (idData === 1) {
      setIdData(characterLimit);
    } else {
      setIdData(idData - 1);
    }
  };

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={previousCharacter}
        >
          Anterior
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={nextCharacter}
        >
          Siguiente
        </button>
      </div>

      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {!isLoading && !error && (
        <div className="container mt-5">
          <div className="card" style={{ width: "18rem" }}>
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
