import React, { useContext, useEffect, useState } from "react";
import NavComponent from "../components/navcomponent";
import axios from "axios";
import { Context } from "../context/context";


function HistoriaPage() {
  const [gastos, setGastos] = useState({
    concepto: []
  });
  const [setState] = useState("")
  const { token } = useContext(Context);


  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/user/historia`, headers).then(res => setGastos(res.data)).catch(error => setState(error));

  })
  const dataArr = Object.values(gastos)
  const elemArr = Object.values(dataArr)
  return (
    <div>
      <NavComponent></NavComponent>
      <ul className="list">
        {elemArr.map(elem => <li className="list-item">Mes: {elem.mes} , Gastos del Mes:  {elem.concepto} </li>)}
      </ul>
    </div>
  )
}


export default HistoriaPage;