import React from "react";
import "./App.css";

const App = () => (
  <div className="column">
    <section className="post">
      <header className="post-info">
        <img
          className="user-avatar"
          src="https://www.stylist.co.uk/images/app/uploads/2018/10/09155947/ada-lovelace-day-2018-quotes-facts-biography-crop-1539097197-1366x1366.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
          alt="Ada Lovelace Avatar"
        />
        <div className="container">
          <h3 className="username">Ada Lovelace</h3>
          <p className="post-date">
            Publicado el <time>01-01-2020</time>
          </p>
        </div>
      </header>
      <section className="post-content">
        <img
          className="post-img"
          src="http://it-world.xyz/wp-content/uploads/2019/03/og-learning-path-react.jpg"
          alt="Logo de React con imagen de paisaje de fondo"
        />
        <div className="post-text-container">
          <h1 className="post-title">Cómo hacer un componente en React</h1>
          <p className="post-text">
            Sit in a box for hours hide head under blanket so no one can see.
            Sleep everywhere, but not in my bed always hungry this human feeds
            me, i should be a god paw at your fat belly sit in a box for hours.
            Sleep on keyboard. Bury the poop bury it deep. What the heck just
            happened, something feels fishy lounge in doorway. Stare out the
            window catch mouse and gave it as a present, yet eat and than sleep
            on your face unwrap toilet paper claws in your leg or loved it,
            hated it, loved it, hated it poop in a handbag look delicious and
            drink the soapy mopping up water then puke giant foamy fur-balls...
          </p>
          <a href="/" className="read-more">
            Ver más
          </a>
        </div>
      </section>
    </section>
  </div>
);

export default App;
