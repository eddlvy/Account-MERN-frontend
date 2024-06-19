import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import axios from "axios";
import './style/ingresoscomponent.css'



function IngresosComponent() {
  const [state, setState] = useState("")
  const { ingresos, setIngresos } = useContext(Context);
  const { token } = useContext(Context);
  const [mesState, setMesAc] = useState("");
  const [ingresosAc, setIngresosAc] = useState(0);
  const { mes, setMes } = useContext(Context);
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/ingresos/${mes}`).then(res => setIngresos(res.data.total)).catch(error => { console.log(error) })
  }, [ingresos, mes, setIngresos]);


  // cambiar mes handler
  function handleSelectMes(e) {
    e.preventDefault();
    const data = {
      mes: mesState
    }
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/home/mes', data, headers).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))
    setMes(mesState)
  };

  function handleIngresosSubmit(e) {

    e.preventDefault();
    const dataToPost = {
      mes: mes,
      total: ingresosAc
    }

    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/home/ingresos', dataToPost, headers).then(res => setState(res.data)).catch(error => setState(`Error Actualizando , ${error}`));
    setIngresos(ingresosAc)
  };

  return (
    <div className="main-container-ingresos">
      <div className="container-mes">
        <div className="select-mes">
          <form className="form-mes" onSubmit={handleSelectMes} method="post">
            <label className="label-mes">Para Iniciar Nuevo Mes:</label>
            <select className="mes-input" onChange={(e) => setMesAc(e.target.value)} >
              <option className="option" value="Selecciona">Selecciona Mes</option>
              <option className="option" value="Enero">Enero</option>
              <option className="option" value="Febrero">Febrero</option>
              <option className="option" value="Marzo">Marzo</option>
              <option className="option" value="Abril">Abril</option>
              <option className="option" value="Mayo">Mayo</option>
              <option className="option" value="Junio">Junio</option>
              <option className="option" value="Julio">Julio</option>
              <option className="option" value="Agosto">Agosto</option>
              <option className="option" value="Septiembre">Septiembre</option>
              <option className="option" value="Octubre">Octubre</option>
              <option className="option" value="Noviembre">Noviembre</option>
              <option className="option" value="Diciembre">Diciembre</option>
            </select>
            <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
            <p className="state">{state}</p>
          </form>
        </div >

      </div >

      <div className="container-ingresos">
        <h1>Mes Seleccionado: <span className="mes">{mes}</span></h1>
        <form className="form-ingresos" onSubmit={handleIngresosSubmit} method="post">
          <label className="label-ingresos">Escribir Ingresos Totales Mes  </label>
          <input className="input-ingresos" type="number" id="ingresos" onChange={(e) => setIngresosAc(e.target.value)} />
          <input className="submit-ingresos" type="submit" value="Click Enviar Ingresos" />
          <p className="state">{state}</p>
        </form>
        <h3>Ingresos Mes: {ingresos}</h3>
      </div>
    </div>)

}


export default IngresosComponent;