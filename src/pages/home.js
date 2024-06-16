import React from "react";
import NavComponent from "../components/navcomponent";
import IngresosComponent from "../components/ingresosComponent"
import GastosComponent from "../components/gastosComponent";


function HomePage() {
  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <IngresosComponent></IngresosComponent>
      <GastosComponent></GastosComponent>



    </div>
  )
}


export default HomePage;