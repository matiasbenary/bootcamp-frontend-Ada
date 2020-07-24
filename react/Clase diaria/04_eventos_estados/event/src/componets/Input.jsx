import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  };

  const deleteText = () => {
    setText("");
  };

  const send = () => {
    alert(text);
  };
  return (
    <div>
      <input type="text" onChange={changeText} value={text} />
      <p>{text}</p>
      <button onClick={deleteText}>Eliminar</button>
      <button onClick={send}>Enviar</button>
    </div>
  );
};

export default Input;
