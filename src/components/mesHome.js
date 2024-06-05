import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import axios from "axios";


function MesComponent() {
  const { mes, setMes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");

  function handleSelectMes(e) {

    const data = {
      mes: mes
    }



    axios.post('http://localhost:5000/user/home/mes', data, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))
    e.preventDefault();
  };


  return (
    <div className="container-mes">
      <div className="select-mes">

        <form className="form-mes" onSubmit={handleSelectMes} method="post">
          <label className="label-mes">Mes Actual , escribe si quieres iniciar nuevo mes</label>
          <input className="mes-input" type="text" id="mes" value={mes} onChange={(e) => setMes(e.target.value)} />
          <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
        </form>

        <p>{mes}</p>
        <p>{state}</p>
        <p>{token}</p>

      </div >
    </div >
  )
}


export default MesComponent;