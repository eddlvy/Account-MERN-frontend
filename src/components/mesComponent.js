import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";



function MesComponent() {
  const { mes, setMes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  // cambiar mes handler
  function handleSelectMes(e) {
    const data = {
      mes: mes
    }
    axios.post('http://localhost:5000/user/home/mes', data, headers).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))
    e.preventDefault();
  };

  return (
    <div className="container-mes">
      <div className="select-mes">
        <form className="form-mes" onSubmit={handleSelectMes} method="post">
          <label className="label-mes">Mes Actual , escribe nuevo mes para cambiar  </label>
          <input className="mes-input" type="text" id="mes" value={mes} onChange={(e) => setMes(e.target.value)} />
          <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
          <p className="error-text">{state}</p>
        </form>
      </div >
      <h1>{mes}</h1>
    </div >
  )
}


export default MesComponent;