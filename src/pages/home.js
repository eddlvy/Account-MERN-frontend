import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";
import IngresosComponent from "../components/ingresosComponent"
import GastosComponent from "../components/gastosComponent";
import axios from "axios";


function HomePage() {
  const { mes, setMes } = useContext(Context);
  const { setIngresos } = useContext(Context);
  const { plan, setPlan } = useContext(Context)


  // mes context
  useEffect(() => {
    fetch("https://account-app-2d28ea94e3bf.herokuapp.com/mes").then(res => res.json()).then((data) => {
      setMes(data[0].mes)
    }, (error) => {
      console.log(error)
    }
    )
  })

  // ingresos context

  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/ingresos/${mes}`).then(res => setIngresos(res.data.total)).catch(error => { console.log(error) })
  });


  // // Plan context
  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/plan`).then(res => setPlan(res.data[0])).catch(error => console.log(error), [plan, setPlan])
  });

  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <IngresosComponent></IngresosComponent>
      <GastosComponent></GastosComponent>



    </div>
  )
}


export default HomePage;