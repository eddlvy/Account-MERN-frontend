import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import axios from "axios";



function GastosComponent() {
  const { mes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const { ingresos } = useContext(Context);
  const [gastos, setGastos] = useState([])

  const [renta, setRenta] = useState(0)
  const [deuda, setDeuda] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [concepto, setConcepto] = useState("")
  const [gasolinaSum, setGasolinaSum] = useState(0)
  const { total, setTotal } = useContext(Context)
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  // rerender handler effect
  useEffect(() => {
    setGasolinaSum(gastos.gasolina?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setTotal(gastos.renta + gasolinaSum + gastos.deuda)
  }, [setTotal, gastos.renta, gasolinaSum, gastos.gasolina, gastos.deuda])

  // gastos del mes get DB
  useEffect(() => {
    axios.get(`http://localhost:5000/user/home/gastosget/${mes}`, headers)
      .then(res => setGastos(res.data)).catch(error => setState("No hay Datos del mes en curso"))
  }, [{ ...gastos }]);

  // gasto update handlers

  function updateGastoRenta(e) {
    e.preventDefault();
    const dataToPost = {
      renta: renta,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/renta`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoGasolina(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `Gasolina-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${gasolina}`,
      gasolina: gasolina,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/gasolina`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoDeuda(e) {
    e.preventDefault();
    const dataToPost = {
      deuda: deuda,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/deuda`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }

  // analizar estado del mes function
  function estadoMes() {
    let sum = ingresos - total;
    if (sum >= 0) {

      return <span className="superavit">Superavit : {sum}</span>
    } else if (sum <= 0) {
      return <span className="deficit">Deficit : {sum}</span>
    } else {
      return <span className="nan">0</span>
    }
  }
  return (
    <div className="container-gastos">
      <h3>Estado del Mes, {estadoMes()}</h3>
      <div className="gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-gasto" onSubmit={updateGastoRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.renta ? <p className="real">0</p> : <p className="real">{gastos.renta}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Gasolina</p>
        <form className="form-gasto" onSubmit={updateGastoGasolina} method="post">
          <label className="label-concepto">Fecha y Lugar  </label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGasolina(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.gasolina ? <p className="real">0</p> : <p className="real">{gasolinaSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Deuda Hapoalim</p>
        <form className="form-gasto" onSubmit={updateGastoDeuda} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setDeuda(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.deuda ? <p className="real">0</p> : <p className="real">{gastos.deuda}</p>}
      </div>



      <p>{state}</p>


    </div>

  )

}


export default GastosComponent