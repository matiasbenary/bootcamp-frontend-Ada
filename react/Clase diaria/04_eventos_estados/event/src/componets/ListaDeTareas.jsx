import React, { useState } from "react";
import Item from "./Item";

const ListaDeTareas = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const changeText = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setList([...list, item]);
    setItem("");
  };

  const deleteItem = (item) => {
    setList(list.filter((data) => data !== item));
  };

  const alertItem = (item) => {
    alert(item);
  };
  // <Item key={indice} item={item} action={deleteItem}></Item>
  // <li onClick={() => deleteItem(item)}>{item}</li>
  //  componente padre a hijo informacion
  // componente hijo a padre van los eventos
  return (
    <div>
      <input type="text" onChange={changeText} value={item} />
      <button onClick={addItem}>Agregar Item</button>
      <ul>
        {list.map((item, indice) => (
          <Item key={indice} item={item} action={alertItem}></Item>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
