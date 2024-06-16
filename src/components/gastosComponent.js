import React, { useState, useContext, useEffect, useMemo } from "react";
import { Context } from "../context/context";
import axios from "axios";
import './style/gastoscomponent.css';



function GastosComponent() {
  const { mes } = useContext(Context);
  const { token } = useContext(Context);
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
  const { plan, setPlan } = useContext(Context)
  const headers = useMemo(() => ({
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }), [token]);


  // Plan context
  useEffect(() => {
    axios.get('https://account-app-2d28ea94e3bf.herokuapp.com/plan').then(res => setPlan(res.data[0])).catch(error => console.log(error), [plan, setPlan])
  });
  // rerender handler effect
  useEffect(() => {

    setGasolinaSum(gastos.gasolina?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setComidaSum(gastos.comida?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setTarjetasSum(gastos.tarjetas?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setSaludSum(gastos.salud?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setOtrosSum(gastos.otros?.reduce((acc, curr) => acc + curr, 0) ?? 0)
    setTotal(gastos.renta + gasolinaSum + gastos.deuda + comidaSum + gastos.cuba + gastos.electricidad + gastos.agua + gastos.gas + gastos.arnona + gastos.hot + gastos.internet + gastos.bl + tarjetasSum + saludSum + otrosSum)
  }, [setTotal, gastos.renta, gasolinaSum, gastos.gasolina, gastos.deuda, comidaSum, gastos.comida, gastos.cuba, gastos.electricidad, gastos.agua, gastos.gas, gastos.arnona, gastos.hot, gastos.internet, gastos.bl, tarjetasSum, saludSum, otrosSum, gastos.tarjetas, gastos.salud, gastos.otros, plan, setPlan])



  // gastos del mes get DB
  useEffect(() => {
    axios.get(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosget/${mes}`, headers)
      .then(res => setGastos(res.data)).catch(error => console.log("No hay Datos del mes en curso"))
  }, [headers, mes]);

  // gasto update handlers

  function updateGastoRenta(e) {
    e.preventDefault();
    const dataToPost = {
      renta: renta,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/renta`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoGasolina(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `  Gasolina-- Fecha: ${new Date().toLocaleDateString()},  ${concepto},  Cantidad Shequels: ${gasolina}     `,
      gasolina: gasolina,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/gasolina`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoDeuda(e) {
    e.preventDefault();
    const dataToPost = {
      deuda: deuda,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/deuda`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoComida(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `  Comida-- Fecha: ${new Date().toLocaleDateString()},  ${concepto},  Cantidad Shequels: ${comida}     `,
      comida: comida,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/comida`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoCuba(e) {
    e.preventDefault();
    const dataToPost = {
      cuba: cuba,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/cuba`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoElectricidad(e) {
    e.preventDefault();
    const dataToPost = {
      electricidad: electricidad,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/electricidad`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoAgua(e) {
    e.preventDefault();
    const dataToPost = {
      agua: agua,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/agua`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoGas(e) {
    e.preventDefault();
    const dataToPost = {
      gas: gas,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/gas`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoArnona(e) {
    e.preventDefault();
    const dataToPost = {
      arnona: arnona,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/arnona`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoHot(e) {
    e.preventDefault();
    const dataToPost = {
      hot: hot,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/hot`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoInternet(e) {
    e.preventDefault();
    const dataToPost = {
      internet: internet,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/internet`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoBl(e) {
    e.preventDefault();
    const dataToPost = {
      bl: bl,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/bl`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoTarjetas(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `  Tarjetas-- Fecha: ${new Date().toLocaleDateString()},   ${concepto}, Cantidad Shequels:   ${tarjetas}    `,
      tarjetas: tarjetas,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/tarjetas`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoSalud(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `  Salud-- Fecha:  ${new Date().toLocaleDateString()},  ${concepto},  Cantidad Shequels: ${salud}    `,
      salud: salud,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/salud`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }
  function updateGastoOtros(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: `   Otros-- Fecha: ${new Date().toLocaleDateString()}, ${concepto}, Cantidad Shequels: ${otros}    `,
      otros: otros,
    }
    axios.post(`https://account-app-2d28ea94e3bf.herokuapp.com/user/home/gastosupdate/${mes}/otros`, dataToPost, headers).then(res => console.log("Gastos Actualizados")).catch(error => console.log(`Error , ${error}`))
  }


  // analizar estado del mes function
  function estadoMes() {
    let sum = ingresos - total;
    if (sum >= 0) {

      return <span className="superavit" style={{ "backgroundColor": "#20c997" }}>Superavit {sum}</span>
    } else if (sum <= 0) {
      return <span className="deficit" style={{ "backgroundColor": "#ff6b6b" }}>Deficit {sum}</span>
    } else {
      return <span className="nan" style={{ "backgroundColor": "#20c997" }}> Superavit {ingresos}</ span>
    }
  }

  return (
    <div className="container-gastos">
      <div className="gastos-resumen">{!total ? <h3>Gastos Mes:  0</h3> : <h3>Gastos Mes: {total}</h3>}
        <h3>Estado Mes:  {estadoMes()}</h3></div>

      <div className="gasto">
        <p className="gasto-text">Renta</p>
        <form className="form-gasto" onSubmit={updateGastoRenta} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.renta}</p>
        {!gastos.renta ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.renta}</p>}
        {plan.renta >= gastos.renta || !gastos.renta ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.renta - gastos.renta} </p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.renta - gastos.renta}</p>}


      </div>
      <div className="gasto">
        <p className="gasto-text">Gasolina</p>
        <form className="form-gasto" onSubmit={updateGastoGasolina} method="post">
          <label className="label-concepto">Lugar</label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGasolina(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.gasolina}</p>
        {!gastos.gasolina ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gasolinaSum}</p>}
        {plan.gasolina >= gasolinaSum ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.gasolina - gasolinaSum}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.gasolina - gasolinaSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Deuda Hapoalim</p>
        <form className="form-gasto" onSubmit={updateGastoDeuda} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setDeuda(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.deuda}</p>
        {!gastos.deuda ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.deuda}</p>}
        {plan.deuda >= gastos.deuda || !gastos.deuda ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.deuda - gastos.deuda}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.deuda - gastos.deuda}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Comida</p>
        <form className="form-gasto" onSubmit={updateGastoComida} method="post">
          <label className="label-concepto">Lugar</label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setComida(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.comida}</p>
        {!gastos.comida ? <p className="real">REAL: 0</p> : <p className="real">REAL: {comidaSum}</p>}
        {plan.comida >= comidaSum ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.comida - comidaSum}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.comida - comidaSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Cuba Envio Dinero</p>
        <form className="form-gasto" onSubmit={updateGastoCuba} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setCuba(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.cuba}</p>
        {!gastos.cuba ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.cuba}</p>}
        {plan.cuba >= gastos.cuba || !gastos.cuba ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.cuba - gastos.cuba}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.cuba - gastos.cuba}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Electricidad</p>
        <form className="form-gasto" onSubmit={updateGastoElectricidad} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setElec(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.electricidad}</p>
        {!gastos.electricidad ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.electricidad}</p>}
        {plan.electricidad >= gastos.electricidad || !gastos.electricidad ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.electricidad - gastos.electricidad}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.electricidad - gastos.electricidad}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Agua</p>
        <form className="form-gasto" onSubmit={updateGastoAgua} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setAgua(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.agua}</p>
        {!gastos.agua ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.agua}</p>}
        {plan.agua >= gastos.agua || !gastos.agua ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.agua - gastos.agua}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.agua - gastos.agua}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Gas</p>
        <form className="form-gasto" onSubmit={updateGastoGas} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setGas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.gas}</p>
        {!gastos.gas ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.gas}</p>}
        {plan.gas >= gastos.gas || !gastos.gas ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.gas - gastos.gas}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.gas - gastos.gas}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Arnona</p>
        <form className="form-gasto" onSubmit={updateGastoArnona} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setArnona(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.arnona}</p>
        {!gastos.arnona ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.arnona}</p>}
        {plan.arnona >= gastos.arnona || !gastos.arnona ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.arnona - gastos.arnona}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.arnona - gastos.arnona}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Hot</p>
        <form className="form-gasto" onSubmit={updateGastoHot} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setHot(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.hot}</p>
        {!gastos.hot ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.hot}</p>}
        {plan.hot >= gastos.hot || !gastos.hot ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.hot - gastos.hot}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.hot - gastos.hot}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Internet</p>
        <form className="form-gasto" onSubmit={updateGastoInternet} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setInternet(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.internet}</p>
        {!gastos.internet ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.internet}</p>}
        {plan.internet >= gastos.internet || !gastos.internet ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.internet - gastos.internet}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.internet - gastos.internet}</p>}
      </div>

      <div className="gasto">
        <p className="gasto-text">Bituaj Leumi</p>
        <form className="form-gasto" onSubmit={updateGastoBl} method="post">
          <label className="label-cantidad">  Cantidad  </label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setBl(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.bl}</p>
        {!gastos.bl ? <p className="real">REAL: 0</p> : <p className="real">REAL: {gastos.bl}</p>}
        {plan.bl >= gastos.bl || !gastos.bl ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.bl - gastos.bl}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.bl - gastos.bl}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Tarjetas</p>
        <form className="form-gasto" onSubmit={updateGastoTarjetas} method="post">
          <label className="label-concepto">Tarjeta</label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">Cantidad</label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setTarjetas(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.tarjetas}</p>
        {!gastos.comida ? <p className="real">REAL: 0</p> : <p className="real">REAL: {tarjetasSum}</p>}
        {plan.tarjetas >= tarjetasSum ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.tarjetas - tarjetasSum}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.tarjetas - tarjetasSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Salud</p>
        <form className="form-gasto" onSubmit={updateGastoSalud} method="post">
          <label className="label-concepto">Lugar</label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">Cantidad</label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setSalud(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.salud}</p>
        {!gastos.salud ? <p className="real">REAL: 0</p> : <p className="real">REAL: {saludSum}</p>}
        {plan.salud >= saludSum ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.salud - saludSum}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.salud - saludSum}</p>}
      </div>
      <div className="gasto">
        <p className="gasto-text">Otros</p>
        <form className="form-gasto" onSubmit={updateGastoOtros} method="post">
          <label className="label-concepto">Lugar</label>
          <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
          <label className="label-cantidad">Cantidad</label>
          <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setOtros(e.target.value)} required />
          <input className="gasto-submit" type="submit" value="Guardar" />
        </form>
        <p className="plan">PLAN: {plan.otros}</p>
        {!gastos.otros ? <p className="real">REAL: 0</p> : <p className="real">REAL: {otrosSum}</p>}
        {plan.otros >= otrosSum ? <p className="resultado" style={{ "backgroundColor": "#20c997" }}>{plan.otros - otrosSum}</p> : <p className="resultado" style={{ "backgroundColor": "#fa5252" }}>{plan.otros - otrosSum}</p>}
      </div>








    </div>

  )

}


export default GastosComponent