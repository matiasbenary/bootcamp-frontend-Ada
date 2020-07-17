import React from "react";
import { BsTrash2 } from "react-icons/bs";
// import "./style.css";
import style from "./style.module.scss";
const Card = ({ title, footer, children, color }) => {
  return (
    <div className={style.card}>
      <div className={style["card--title"]} style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className={style["card--body"]}>{children}</div>
      <div className={style.footer}>{footer}</div>
      <button className="btn btn-danger">
        <BsTrash2 />
        Hola
      </button>
    </div>
  );
};

export default Card;
