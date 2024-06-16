import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";
import axios from "axios";
import './style/plan.css';

function PlanPage() {
  const [state, setState] = useState("")
  const { token } = useContext(Context);
  const { plan, setPlan } = useContext(Context);
  const [renta, setRenta] = useState(0)
  const [deuda, setDeuda] = useState(0)
  const [cuba, setCuba] = useState(0)
  const [electricidad, setElec] = useState(0)
  const [agua, setAgua] = useState(0)
  const [gas, setGas] = useState(0)
  const [arnona, setArnona] = useState(0)
  const [hot, setHot] = useState(0)
  const [internet, setInternet] = useState(0)
  const [bl, setBl] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [comida, setComida] = useState(0)
  const [tarjetas, setTarjetas] = useState(0)
  const [salud, setSalud] = useState(0)
  const [otros, setOtros] = useState(0)
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
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/renta', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ renta: renta, ...plan })
  }
  function updateDeuda(e) {
    const data = {
      deuda: deuda
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/deuda', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ deuda: deuda, ...plan })
  }
  function updateCuba(e) {
    const data = {
      cuba: cuba
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/cuba', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ cuba: cuba, ...plan })
  }
  function updateElectricidad(e) {
    const data = {
      electricidad: electricidad
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/electricidad', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ electricidad: electricidad, ...plan })
  }
  function updateAgua(e) {
    const data = {
      agua: agua
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/agua', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ agua: agua, ...plan })
  }
  function updateGas(e) {
    const data = {
      gas: gas
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/gas', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ gas: gas, ...plan })
  }
  function updateArnona(e) {
    const data = {
      arnona: arnona
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/arnona', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ arnona: arnona, ...plan })
  }
  function updateHot(e) {
    const data = {
      hot: hot
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/hot', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ hot: hot, ...plan })
  }
  function updateInternet(e) {
    const data = {
      internet: internet
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/internet', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ internet: internet, ...plan })
  }
  function updateBl(e) {
    const data = {
      bl: bl
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/bl', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ bl: bl, ...plan })
  }
  function updateGasolina(e) {
    const data = {
      gasolina: gasolina
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/gasolina', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ gasolina: gasolina, ...plan })
  }
  function updateComida(e) {
    const data = {
      comida: comida
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/comida', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ comida: comida, ...plan })
  }
  function updateTarjetas(e) {
    const data = {
      tarjetas: tarjetas
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/tarjetas', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ tarjetas: tarjetas, ...plan })
  }
  function updateSalud(e) {
    const data = {
      salud: salud
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/salud', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ salud: salud, ...plan })
  }
  function updateOtros(e) {
    const data = {
      otros: otros
    }
    e.preventDefault();
    axios.post('https://account-app-2d28ea94e3bf.herokuapp.com/user/plan/otros', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${console.log}`))
    setPlan({ otros: otros, ...plan })
  }


  return (
    <div>
      <NavComponent></NavComponent>
      <div className="container-gasto flex">
        <p className="gasto-text">Renta </p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad"> Plan {plan.renta}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Gasolina</p>
        <form className="form-plan" onSubmit={updateGasolina} method="post">
          <label className="label-cantidad"> Plan {plan.gasolina}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGasolina(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Deuda Hapoalim</p>
        <form className="form-plan" onSubmit={updateDeuda} method="post">
          <label className="label-cantidad"> Plan {plan.deuda}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setDeuda(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Comida</p>
        <form className="form-plan" onSubmit={updateComida} method="post">
          <label className="label-cantidad">  Plan {plan.comida}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setComida(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Envio Cuba</p>
        <form className="form-plan" onSubmit={updateCuba} method="post">
          <label className="label-cantidad">  Plan {plan.cuba}   </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setCuba(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Electricidad</p>
        <form className="form-plan" onSubmit={updateElectricidad} method="post">
          <label className="label-cantidad">  Plan {plan.electricidad}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setElec(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Agua</p>
        <form className="form-plan" onSubmit={updateAgua} method="post">
          <label className="label-cantidad"> Plan {plan.agua}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setAgua(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Gas</p>
        <form className="form-plan" onSubmit={updateGas} method="post">
          <label className="label-cantidad">  Plan {plan.gas}   </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Arnona</p>
        <form className="form-plan" onSubmit={updateArnona} method="post">
          <label className="label-cantidad"> Plan {plan.arnona}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setArnona(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Hot</p>
        <form className="form-plan" onSubmit={updateHot} method="post">
          <label className="label-cantidad"> Plan {plan.hot}   </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setHot(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Internet</p>
        <form className="form-plan" onSubmit={updateInternet} method="post">
          <label className="label-cantidad"> Plan {plan.internet}   </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setInternet(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Bituaj Leumi</p>
        <form className="form-plan" onSubmit={updateBl} method="post">
          <label className="label-cantidad"> Plan {plan.bl}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setBl(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Medicinas y Salud</p>
        <form className="form-plan" onSubmit={updateSalud} method="post">
          <label className="label-cantidad"> Plan {plan.salud}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setSalud(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Tarjetas</p>
        <form className="form-plan" onSubmit={updateTarjetas} method="post">
          <label className="label-cantidad"> Plan {plan.tarjetas}  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setTarjetas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>
      <div className="container-gasto flex">
        <p className="gasto-text">Otros</p>
        <form className="form-plan" onSubmit={updateOtros} method="post">
          <label className="label-cantidad"> Plan {plan.otros}   </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setOtros(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="state">{state}</p>
      </div>

    </div>
  )
}


export default PlanPage;