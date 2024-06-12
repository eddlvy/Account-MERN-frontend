import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";
import axios from "axios";


function PlanPage() {
  const { token } = useContext(Context);
  const { plan, setPlan } = useContext(Context);
  const [state, setState] = useState("")
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
    axios.post('http://localhost:5000/user/plan/renta', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ renta: renta })
  }
  function updateDeuda(e) {
    const data = {
      deuda: deuda
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/deuda', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ deuda: deuda })
  }
  function updateCuba(e) {
    const data = {
      cuba: cuba
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/cuba', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ cuba: cuba })
  }
  function updateElectricidad(e) {
    const data = {
      electricidad: electricidad
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/electricidad', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ electricidad: electricidad })
  }
  function updateAgua(e) {
    const data = {
      agua: agua
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/agua', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ agua: agua })
  }
  function updateGas(e) {
    const data = {
      gas: gas
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/gas', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ gas: gas })
  }
  function updateArnona(e) {
    const data = {
      arnona: arnona
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/arnona', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ arnona: arnona })
  }
  function updateHot(e) {
    const data = {
      hot: hot
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/hot', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ hot: hot })
  }
  function updateInternet(e) {
    const data = {
      internet: internet
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/internet', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ internet: internet })
  }
  function updateBl(e) {
    const data = {
      bl: bl
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/bl', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ bl: bl })
  }
  function updateGasolina(e) {
    const data = {
      gasolina: gasolina
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/gasolina', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ gasolina: gasolina })
  }
  function updateComida(e) {
    const data = {
      comida: comida
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/comida', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ comida: comida })
  }
  function updateTarjetas(e) {
    const data = {
      tarjetas: tarjetas
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/tarjetas', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ tarjetas: tarjetas })
  }
  function updateSalud(e) {
    const data = {
      salud: salud
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/salud', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ salud: salud })
  }
  function updateOtros(e) {
    const data = {
      otros: otros
    }
    e.preventDefault();
    axios.post('http://localhost:5000/user/plan/otros', data, headers).then(res => setState(res.data)).catch(error => setState(`Error , ${error}`))
    setPlan({ otros: otros })
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
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
      <div className="container-gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-plan" onSubmit={updateRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p>{state}</p>
      </div>
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