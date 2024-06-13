import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";



function IngresosComponent() {
  const { ingresos, setIngresos } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const [mesState, setMes] = useState("");
  const { mes } = useContext(Context);
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  // cambiar mes handler
  function handleSelectMes(e) {
    e.preventDefault();
    const data = {
      mes: mesState
    }
    axios.post('http://localhost:5000/user/home/mes', data, headers).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))

  };

  function handleIngresosSubmit(e) {
    const dataToPost = {
      mes: mes,
      total: ingresos
    }

    axios.post('http://localhost:5000/user/home/ingresos', dataToPost, headers).then(res => setState(res.data)).catch(error => setState(`Error Posting , ${error}`));
    e.preventDefault();
  };

  return (
    <div className="main-container-ingresos">
      <div className="container-mes">
        <div className="select-mes">
          <form className="form-mes" onSubmit={handleSelectMes} method="post">
            <label className="label-mes">Iniciar Nuevo Mes, Escribe mes  </label>
            <input className="mes-input" type="text" id="mes" onChange={(e) => setMes(e.target.value)} />
            <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
          </form>
        </div >
        <h1>Mes Seleccionado: {mes}</h1>
      </div >

      <div className="container-ingresos">
        <form className="form-ingresos" onSubmit={handleIngresosSubmit} method="post">
          <label className="label-ingresos">Ingresos Totales Mes  </label>
          <input className="input-ingresos" type="number" id="ingresos" value={ingresos} onChange={(e) => setIngresos(e.target.value)} />
          <input className="submit-ingresos" type="submit" value="Click Enviar Ingresos" />
        </form>
        <h3>Ingresos Mes: {ingresos}</h3>
      </div>
    </div>)

}


export default IngresosComponent;