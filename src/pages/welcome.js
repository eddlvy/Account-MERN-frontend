import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";
import LoginComponent from "../components/login";
import './style/welcome.css';
import img from '../assets/pexels-nietjuh-796602.jpg';



function WelcomePage() {
  let date = new Date();
  const { mes, setMes } = useContext(Context);
  const { ingresos, setIngresos } = useContext(Context);
  const { plan, setPlan } = useContext(Context);
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
  }, [ingresos, mes, setIngresos]);


  // // Plan context
  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/plan`).then(res => setPlan(res.data[0])).catch(error => console.log(error), [plan, setPlan])
  }, [plan, setPlan]);
  return (

    <div className="main-container">
      <div className="header">
        <h1 className="main-title">Bienvenido al Programa</h1>
        <p className="date">{JSON.stringify(date.toLocaleDateString()).replace('"', '')}</p>
      </div>
      <div className="container-actions">
        <img className="img" src={img} alt="calculator" />
        <div className="container-login">
          <LoginComponent></LoginComponent>
        </div>

      </div>
      <div className="container-footer">
        <p className="footer">copyright EduProductions @{date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default WelcomePage;