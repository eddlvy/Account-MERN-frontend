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
  const [concepto, setConcepto] = useState("")
  const [gasolinaSum, setGasolinaSum] = useState(0)
  const [comidaSum, setComidaSum] = useState(0)
  const [tarjetasSum, setTarjetasSum] = useState(0)
  const [saludSum, setSaludSum] = useState(0)
  const [otrosSum, setOtrosSum] = useState(0)
  const { total, setTotal } = useContext(Context)
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  // rerender handler effect
  useEffect(() => {
    setGasolinaSum(gastos.gasolina?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setComidaSum(gastos.comida?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setTarjetasSum(gastos.tarjetas?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setSaludSum(gastos.salud?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setOtrosSum(gastos.otros?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setTotal(gastos.renta + gasolinaSum + gastos.deuda + comidaSum + gastos.cuba + gastos.electricidad + gastos.agua + gastos.gas + gastos.arnona + gastos.hot + gastos.internet + gastos.bl + tarjetasSum + saludSum + otrosSum)
  }, [setTotal, gastos.renta, gasolinaSum, gastos.gasolina, gastos.deuda, comidaSum, gastos.comida, gastos.cuba, gastos.electricidad, gastos.agua, gastos.gas, gastos.arnona, gastos.hot, gastos.internet, gastos.bl, tarjetasSum, saludSum, otrosSum, gastos.tarjetas, gastos.salud, gastos.otros])

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
  function updateGastoComida(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `Comida-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${comida}`,
      comida: comida,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/comida`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoCuba(e) {
    e.preventDefault();
    const dataToPost = {
      cuba: cuba,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/cuba`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoElectricidad(e) {
    e.preventDefault();
    const dataToPost = {
      electricidad: electricidad,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/electricidad`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoAgua(e) {
    e.preventDefault();
    const dataToPost = {
      agua: agua,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/agua`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoGas(e) {
    e.preventDefault();
    const dataToPost = {
      gas: gas,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/gas`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoArnona(e) {
    e.preventDefault();
    const dataToPost = {
      arnona: arnona,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/arnona`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoHot(e) {
    e.preventDefault();
    const dataToPost = {
      hot: hot,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/hot`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoInternet(e) {
    e.preventDefault();
    const dataToPost = {
      internet: internet,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/internet`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoBl(e) {
    e.preventDefault();
    const dataToPost = {
      bl: bl,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/bl`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoTarjetas(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `Tarjetas-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${tarjetas}`,
      tarjetas: tarjetas,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/tarjetas`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoSalud(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `Salud-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${salud}`,
      salud: salud,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/salud`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }
  function updateGastoOtros(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `Otros-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${otros}`,
      otros: otros,
    }
    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/otros`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }


  // analizar estado del mes function
  function estadoMes() {
    let sum = ingresos - total;
    if (sum >= 0) {

      return <span className="superavit">Superavit {sum}</span>
    } else if (sum <= 0) {
      return <span className="deficit">Deficit {sum}</span>
    } else {
      return <span className="nan">0</span>
    }
  }
  return (
    <div className="container-gastos">
      {!total ? <h3>Gastos Mes:  0</h3> : <h3>Gastos Mes: {total}</h3>}
      <h3>Estado Mes:  {estadoMes()}</h3>
      <p>{state}</p>
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
      <div className="gasto">
        <p className="gasto-text">Comida</p>
        <form className="form-gasto" onSubmit={updateGastoComida} method="post">
          <label className="label-concepto">Fecha y Lugar  </label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setComida(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.comida ? <p className="real">0</p> : <p className="real">{comidaSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Cuba Envio Dinero</p>
        <form className="form-gasto" onSubmit={updateGastoCuba} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setCuba(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.cuba ? <p className="real">0</p> : <p className="real">{gastos.cuba}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Electricidad</p>
        <form className="form-gasto" onSubmit={updateGastoElectricidad} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setElec(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.electricidad ? <p className="real">0</p> : <p className="real">{gastos.electricidad}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Agua</p>
        <form className="form-gasto" onSubmit={updateGastoAgua} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setAgua(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.agua ? <p className="real">0</p> : <p className="real">{gastos.agua}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Gas</p>
        <form className="form-gasto" onSubmit={updateGastoGas} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.gas ? <p className="real">0</p> : <p className="real">{gastos.gas}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Arnona</p>
        <form className="form-gasto" onSubmit={updateGastoArnona} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setArnona(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.arnona ? <p className="real">0</p> : <p className="real">{gastos.arnona}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Hot</p>
        <form className="form-gasto" onSubmit={updateGastoHot} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setHot(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.hot ? <p className="real">0</p> : <p className="real">{gastos.hot}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Internet</p>
        <form className="form-gasto" onSubmit={updateGastoInternet} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setInternet(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.internet ? <p className="real">0</p> : <p className="real">{gastos.internet}</p>}
      </div>

      <div className="gasto">
        <p className="gasto-text">Bituaj Leumi</p>
        <form className="form-gasto" onSubmit={updateGastoBl} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setBl(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.bl ? <p className="real">0</p> : <p className="real">{gastos.bl}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Pago Tarjetas</p>
        <form className="form-gasto" onSubmit={updateGastoTarjetas} method="post">
          <label className="label-concepto">Fecha y Lugar  </label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setTarjetas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.comida ? <p className="real">0</p> : <p className="real">{tarjetasSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Medicinas y Salud</p>
        <form className="form-gasto" onSubmit={updateGastoSalud} method="post">
          <label className="label-concepto">Fecha y Lugar  </label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setSalud(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.salud ? <p className="real">0</p> : <p className="real">{saludSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Otros</p>
        <form className="form-gasto" onSubmit={updateGastoOtros} method="post">
          <label className="label-concepto">Fecha y Lugar  </label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setOtros(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">Plan</p>
        {!gastos.otros ? <p className="real">0</p> : <p className="real">{otrosSum}</p>}
      </div>








    </div>

  )

}


export default GastosComponent