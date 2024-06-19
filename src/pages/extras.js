import React, { useContext, useEffect, useState, useMemo } from "react";
import NavComponent from "../components/navcomponent";
import axios from "axios";
import { Context } from "../context/context";
import './style/extras.css';


function ExtrasPage() {
  const [state, setState] = useState("");
  const [valor, setValor] = useState(0)
  const [horasMes, setHorasMes] = useState([])
  const { mes } = useContext(Context);
  const { token } = useContext(Context);


  const headers = useMemo(() => ({
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }), [token]);

  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/user/extras/${mes}`, headers).then(res => setHorasMes(res.data[0] || {})).catch(error => setState("Error Actualizando"));

  }, [headers, mes, horasMes])

  const postToServer = function (e) {
    e.preventDefault()
    const data = {
      mes: mes,
      cantidad: valor,
      concepto: `Fecha:  ${new Date().toLocaleDateString()} ,  ${valor} shequels`
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/extras/${mes}`, data, headers).then(res => setState('Horas Extras Actualizadas')).catch(error => setState("Error Actualizando Horas Extras"))
  }

  const [, cantidadArr, conceptoArr] = Object.values(horasMes);
  const totalFunc = function () {
    if (cantidadArr) {
      let totalExtrasValor = cantidadArr.reduce((acc, elem) => acc + elem, 0) ?? 0;
      return totalExtrasValor
    } else {
      return 0
    }
  }

  return (
    <div>
      <NavComponent></NavComponent>

      <div className="horas-container">
        <div className="header"><h3>Añadir Horas Extras</h3>
          <h3>Mes: <span className="span">{mes}</span></h3></div>

        <form className="form-extras" onSubmit={postToServer} method="post">
          <label className="label-cantidad">Horas Extras del Dia ,Escribir Valor</label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setValor(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
        <p className="acumulado">Total Acumulado en Horas Extras: <span className="span">{totalFunc()} shequels</span></p>
      </div>
      <div className="list-container">
        <ul className="list-extras">
          {conceptoArr ? conceptoArr.map((elem) => <li className="extras-item">{elem}</li>) : <li className="extras-item">No hay Horas Extras registradas</li>}
        </ul>
      </div>

    </div>
  )
}


export default ExtrasPage;