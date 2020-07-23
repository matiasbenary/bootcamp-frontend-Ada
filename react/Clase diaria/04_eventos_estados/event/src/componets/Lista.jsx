import React, { useState } from "react";
// rafce
const Lista = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const addElement = () => {
    setCount(count + 1);
    setList([...list, count]);
  };
  return (
    <div>
      <button onClick={addElement}>Agregar Numero</button>
      <ul>
        {list.map((item) => {
          return item % 2 ? null : <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Lista;
