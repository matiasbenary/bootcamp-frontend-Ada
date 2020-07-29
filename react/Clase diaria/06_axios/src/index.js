import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
/*
npx create-react-app 06_axios

yarn add axios bootstrap react-loader-spinner

despues agregamos los estilos css de cada paquete

https://www.npmjs.com/package/react-loader-spinner

https://github.com/axios/axios

https://react-bootstrap.github.io/getting-started/introduction

*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
