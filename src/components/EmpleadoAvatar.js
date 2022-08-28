import React from "react";
import "./EmpleadoAvatar.css";

const EmpleadoAvatar = (props) => {
  console.log(props.src);
  return (
    <div className="divImg">
      <img src={props.src} alt="Avatar empleado" className="avatar" />
    </div>
  );
};

export default EmpleadoAvatar;
