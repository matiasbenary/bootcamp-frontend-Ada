import React, { useState } from "react";

const Button = () => {
  // let count= 0
  // [mi variable, un set para la variable] = useState(valor incial)
  //    mi variable va ser solo lectura
  // set va a aser solo escritura solo va a cambiar el valor de mi variabble

  const [count, setCount] = useState(10);
  const sumar = () => {
    setCount(count + 1);
    //   count = 2
  };
  const suma = (num) => {
    setCount(count + num);
    //   count = 2
  };

  return (
    <div>
      <button onClick={sumar}>+1</button>
      <button onClick={() => suma(10)}>+10</button>
      <button onClick={() => suma(100)}>+100</button>
      {count}
      <button onClick={() => suma(-1)}>-1</button>
      <button onClick={() => suma(-10)}>-10</button>
      <button onClick={() => suma(-100)}>-100</button>
    </div>
  );

  //   const [count, setCount] = useState(100);
  //   const sumar = () => {
  //     setCount(count + 1);
  //     //   count = 2
  //   };
  //   const restar = () => {
  //     setCount(count - 1);
  //   };

  //   return (
  //     <div>
  //       <button onClick={sumar}>+1</button>
  //       <button onClick={restar}>-1</button>
  //       {count}
  //     </div>
  //   );
};

export default Button;
