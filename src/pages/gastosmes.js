import React, { useContext, useEffect, useState } from "react";
import NavComponent from "../components/navcomponent";
import axios from "axios";
import { Context } from "../context/context";
import './style/mes.css';


function GastosPage() {
  const [gastos, setGastos] = useState([]);
  const { mes } = useContext(Context);
  const { token } = useContext(Context);


  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/user/gastos/${mes}`, headers).then(res => setGastos(res.data.concepto || {})).catch(error => console.log(error));

  })

  const conceptoArr = Object.values(gastos);

  return (
    <div>
      <NavComponent></NavComponent>
      <ul className="gastos-list">
        {conceptoArr.map((elem => <li className="list-item">{elem}</li>))}
      </ul>


    </div>
  )
}


export default GastosPage;