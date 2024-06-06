import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import LoginComponent from "../components/login";
import './style/welcome.css';
import axios from "axios";
import img from '../assets/pexels-nietjuh-796602.jpg';



function WelcomePage() {
  let date = new Date();

  const { mes, setMes } = useContext(Context);
  const { setIngresos } = useContext(Context);


  useEffect(() => {
    fetch("http://localhost:5000/mes").then(res => res.json()).then((data) => {
      setMes(data[0].mes)
    }, (error) => {
      console.log(error)
    }
    )
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/ingresos/${mes}`).then(res => setIngresos(res.data.total)).catch(error => { setIngresos(error) })
  });


  return (

    <div className="main-container">
      <div className="header">
        <h1 className="main-title">Bienvenido al Programa</h1>
        <p className="date">{JSON.stringify(date.toLocaleDateString()).slice(1, 11)}</p>
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