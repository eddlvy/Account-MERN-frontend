import React, { useContext } from "react";
import NavComponent from "../components/navcomponent";
import "./style/home.css";
import { Context } from "../context/context";



function HomePage() {
  const { mes } = useContext(Context)
  return (
    <div>
      <NavComponent></NavComponent>
      <p>{mes}</p>


    </div>
  )
}


export default HomePage;