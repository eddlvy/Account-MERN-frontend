import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";



function IngresosComponent() {
  const { ingresos, setIngresos } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const { mes } = useContext(Context);
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
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
    <div className="container-ingresos">
      <form className="form-ingresos" onSubmit={handleIngresosSubmit} method="post">
        <label className="label-ingresos">Ingresos Totales Mes  </label>
        <input className="input-ingresos" type="number" id="ingresos" value={ingresos} onChange={(e) => setIngresos(e.target.value)} />
        <input className="submit-ingresos" type="submit" value="Click Enviar Ingresos" />
      </form>
      <p>{state}</p>
      <h3>Ingresos Mes: {ingresos}</h3>
    </div>)

}


export default IngresosComponent;