import React from "react";

import NavComponent from "../components/navcomponent";
import IngresosComponent from "../components/ingresosComponent"
import MesComponent from "../components/mesComponent";
import GastosComponent from "../components/gastosComponent";
import "./style/home.css";


function HomePage() {


  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <MesComponent></MesComponent>
      <IngresosComponent></IngresosComponent>
      <GastosComponent></GastosComponent>



    </div>
  )
}


export default HomePage;