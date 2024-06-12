import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";
import axios from "axios";


function PlanPage() {
  const { token } = useContext(Context);
  const [renta, setRenta] = useState(0)
  const [state, setState] = useState("")
  // const [deuda, setDeuda] = useState(0)
  // const [cuba, setCuba] = useState(0)
  // const [electricidad, setElec] = useState(0)
  // const [agua, setAgua] = useState(0)
  // const [gas, setGas] = useState(0)
  // const [arnona, setArnona] = useState(0)
  // const [hot, setHot] = useState(0)
  // const [internet, setInternet] = useState(0)
  // const [bl, setBl] = useState(0)
  // const [gasolina, setGasolina] = useState(0)
  // const [comida, setComida] = useState(0)
  // const [tarjetas, setTarjetas] = useState(0)
  // const [salud, setSalud] = useState(0)
  // const [otros, setOtros] = useState(0)
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };


  function updateRenta(e) {
    const data = {
      renta: renta
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/renta', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
  }


  return (
    <div>
      <NavComponent></NavComponent>

      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
    </div>
  )
}


export default PlanPage;