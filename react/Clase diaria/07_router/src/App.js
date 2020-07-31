import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Default from "./components/Default";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

function App() {
  return (
    // Router va envolver a todos el sistema de routar,esta va ser el componente que gestiones todo
    // Link va se un componente que me direcciones a una url,simil al tag a href
    /*        <Link to="/">Default </Link>
      <hr />
      <Link to="/home">Home Link </Link>
      <hr />
      <Link to="/home/casa">Casa Link </Link>
      <hr />
      <Link to="/dashboard">Dashboard Link </Link>
      <hr />
      */
    // Route va definir que componente se va renderizar,este esta dado por la url
    // se pueden redenrizar de dos formas,uno como children que es recomendado cuando tengo props que usar
    // y el otro es usando la propiedad component,me permite pasar la deficion de un componente
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Default} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
