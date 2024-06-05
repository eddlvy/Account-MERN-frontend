import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";
import NavComponent from "../components/navcomponent";
import "./style/home.css";




function HomePage() {
  const { mes, setMes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const { ingresos, setIngresos } = useContext(Context);
  const [gastosTotal, setGastosTotal] = useState(0);
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  function handleSelectMes(e) {
    const data = {
      mes: mes
    }
    axios.post('http://localhost:5000/user/home/mes', data, headers).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))
    e.preventDefault();
  };

  function handleIngresosSubmit(e) {
    const dataToPost = {
      mes: mes,
      total: ingresos
    }

    axios.post('http://localhost:5000/user/home/ingresos', dataToPost, headers).then(res => setState(res.data)).catch(error => setState(`Error Posting , ${error}`));
    e.preventDefault();
  };

  function estadoMes() {
    let sum = ingresos - gastosTotal;
    if (sum >= 0) {

      return <span className="superavit">Superavit : {sum}</span>
    } else {
      return <span className="deficit">Deficit : {sum}</span>
    }
  }
  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <div className="container-mes">
        <div className="select-mes">

          <form className="form-mes" onSubmit={handleSelectMes} method="post">
            <label className="label-mes">Mes Actual , escribe nuevo mes para cambiar  </label>
            <input className="mes-input" type="text" id="mes" value={mes} onChange={(e) => setMes(e.target.value)} />
            <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
            <p className="error-text">{state}</p>
          </form>
        </div >
        <h2 className="mes-header">{mes}</h2>
        <p className="text-ingresos">Ingresos : {ingresos} </p>
        <p className="text-gastos">Gastos   : {gastosTotal}</p>
        <p className="estado-mes">{estadoMes()}</p>
        <form className="form-ingresos" onSubmit={handleIngresosSubmit} method="post">
          <label className="label-ingresos">Ingresos Totales Mes  </label>
          <input className="input-ingresos" type="number" id="ingresos" value={ingresos} onChange={(e) => setIngresos(e.target.value)} />
          <input className="submit-ingresos" type="submit" value="Click Enviar Ingresos" />
        </form>
      </div >




    </div>
  )
}


export default HomePage;