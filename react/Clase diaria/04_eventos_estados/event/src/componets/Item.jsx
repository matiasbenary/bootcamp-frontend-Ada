import React from "react";

const Item = ({ item, action }) => {
  return (
    <li>
      {item} <button onClick={() => action(item)}>Borrar</button>
    </li>
  );
};

export default Item;
