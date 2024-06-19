import React, { useContext, useEffect, useState } from "react";
import NavComponent from "../components/navcomponent";
import axios from "axios";
import { Context } from "../context/context";
import './style/historia.css'


function HistoriaPage() {
  const [gastos, setGastos] = useState([]);
  const { token } = useContext(Context);


  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/user/historia`, headers).then(res => setGastos(res.data)).catch(error => console.log(error));

  })
  const dataArr = Object.values(gastos)
  const elemArr = Object.values(dataArr)
  return (
    <div>
      <NavComponent></NavComponent>
      <ul className="list-extras">
        {elemArr.map(elem => <li className="extras-item">Mes: {elem.mes} <br></br> Gastos del Mes <ul className="list-extras">{elem.concepto.map((elem) => <li className="extras-item">{elem}</li>)}</ul>  </li>)}
      </ul>
    </div>
  )
}


export default HistoriaPage;