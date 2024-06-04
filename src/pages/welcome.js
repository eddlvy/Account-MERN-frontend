import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import LoginComponent from "../components/login";
import RegisterComponent from "../components/register";
import './style/welcome.css';
import img from '../assets/pexels-nietjuh-796602.jpg';



function WelcomePage() {
  let date = new Date();

  const { setMes } = useContext(Context);


  useEffect(() => {
    fetch("http://localhost:5000").then(res => res.json()).then((data) => {
      setMes(data[0].mes)
    }, (error) => {
      console.log(error)
    }
    )
  })

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
        <div className="container-register">
          <RegisterComponent></RegisterComponent>
        </div>
      </div>
      <div className="container-footer">
        <p className="footer">copyright EduProductions @{date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default WelcomePage;