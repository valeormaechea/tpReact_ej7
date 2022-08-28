import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";
import "./App.css";
import emp1 from "./img/1.jpg";
import emp2 from "./img/2.jpg";
import emp3 from "./img/3.jpg";
import emp4 from "./img/4.jpg";
import emp5 from "./img/5.jpg";
import emp6 from "./img/6.jpg";
import emp7 from "./img/7.jpg";
import emp8 from "./img/8.jpg";

const App = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      image: emp1,
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      image: emp3,
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      image: emp5,
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      image: emp2,
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      image: emp4,
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      image: emp6,
    },
    {
      id: 7,
      fullName: "Jason One",
      title: "Digital Strategist",
      department: "Marketing",
      image: emp7,
    },
    {
      id: 8,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      image: emp8,
    },
  ];

  return (
    <div className="container">
      <EmpleadoList empleados={empleados}></EmpleadoList>
    </div>
  );
};

export default App;
