import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import axios from "axios";
import NavComponent from "../components/navcomponent";
import "./style/home.css";




function HomePage() {
  const { mes, setMes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const { ingresos, setIngresos } = useContext(Context);
  const [gastos, setGastos] = useState([])
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/user/home/gastosget/${mes}`, headers)
      .then(res => setGastos(res.data)).catch(error => setState(error))
  })


  const renta = gastos.renta || 0;
  const deuda = gastos.deuda || 0;
  const cuba = gastos.cuba || 0;
  const electricidad = gastos.electricidad || 0;
  const agua = gastos.agua || 0;
  const gas = gastos.gas || 0;
  const arnona = gastos.arnona || 0;
  const hot = gastos.hot || 0;
  const internet = gastos.internet || 0;
  const bl = gastos.b || 0;
  const gasolinaSum = gastos.gasolina?.reduce((acc, val) => acc + val, 0) || 0;
  const comidaSum = gastos.comida?.reduce((acc, val) => acc + val, 0) || 0;
  const saludSum = gastos.salud?.reduce((acc, val) => acc + val, 0) || 0;
  const tarjetasSum = gastos.tarjetas?.reduce((acc, val) => acc + val, 0) || 0;
  const otrosSum = gastos.otros?.reduce((acc, val) => acc + val, 0) || 0;
  const total = renta + deuda + cuba + electricidad + agua + gas + arnona + hot + internet + bl + gasolinaSum + comidaSum + saludSum + tarjetasSum + otrosSum



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
    let sum = ingresos - total;
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
        <p className="text-gastos">Gastos   : {total}</p>
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