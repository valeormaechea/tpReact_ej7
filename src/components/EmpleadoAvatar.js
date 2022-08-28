import React from "react";
import "./EmpleadoAvatar.css";

const EmpleadoAvatar = (props) => {
  console.log(props.src);
  return <img src={props.src} alt="Avatar empleado" className="avatar" />;
};

export default EmpleadoAvatar;
