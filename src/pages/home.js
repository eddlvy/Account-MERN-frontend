import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import axios from "axios";
import NavComponent from "../components/navcomponent";
import IngresosComponent from "../components/ingresosComponent"
import MesComponent from "../components/mesComponent";
import "./style/home.css";

function HomePage() {
  const { mes } = useContext(Context);
  const { token } = useContext(Context);
  const [state, setState] = useState("");
  const [gastos, setGastos] = useState([])

  const [renta, setRenta] = useState(0)
  const [concepto, setConcepto] = useState("")
  // const [fields, setFields] = useContext([])
  // const { deuda, setDeuda } = useContext(Context)
  // const { cuba, setCuba } = useContext(Context)
  // const { electricidad, setElec } = useContext(Context)
  // const { agua, setAgua } = useContext(Context)
  // const { gas, setGas } = useContext(Context)
  // const { arnona, setArnona } = useContext(Context)
  // const { hot, setHot } = useContext(Context)
  // const { internet, setInternet } = useContext(Context)
  // const { bl, setBl } = useContext(Context)

  // const { gasolina, setGasolina } = useContext(Context)
  // const { comida, setComida } = useContext(Context)
  // const { salud, setSalud } = useContext(Context)
  // const { tarjetas, setTarjetas } = useContext(Context)
  // const { otros, setOtros } = useContext(Context)
  // const [total, setTotal] = useState(0)
  // const [gasolinaSum, setGasolinaSum] = useState(0)
  // const [tarjetasSum, setTarjetasSum] = useState(0)
  // const [otrosSum, setOtrosSum] = useState(0)
  // const [saludSum, setSaludSum] = useState(0)
  // const [comidaSum, setComidaSum] = useState(0)


  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };



  // gastos del mes get DB
  useEffect(() => {
    axios.get(`http://localhost:5000/user/home/gastosget/${mes}`, headers)
      .then(res => setGastos(res.data)).catch(error => setState("No hay Datos del mes en curso"))
  }, []);





  // gasto update handler

  function updateGastoRenta(e) {
    e.preventDefault();
    const dataToPost = {
      concepto: concepto,
      renta: renta,
    }

    axios.post(`http://localhost:5000/user/home/gastosupdate/${mes}/renta`, dataToPost, headers).then(res => setState("Gastos Actualizados")).catch(error => setState(`Error , ${error}`))
  }

  // gasto plan get handler

  // gasto estado function

  // analizar estado del mes function
  // function estadoMes() {

  //   let sum = ingresos - total;
  //   if (sum >= 0) {

  //     return <span className="superavit">Superavit : {sum}</span>
  //   } else {
  //     return <span className="deficit">Deficit : {sum}</span>
  //   }
  // }

  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <MesComponent></MesComponent>
      <IngresosComponent></IngresosComponent>


      <div className="container-gastos">
        <div className="gasto">
          <p className="gasto-text">Renta</p>
          <form className="form-gasto" onSubmit={updateGastoRenta} method="post">
            <label className="label-concepto">Fecha y Lugar  </label>
            <input className="input-concepto" type="text" id="fecha" onChange={(e) => setConcepto(e.target.value)} />
            <label className="label-cantidad">  Cantidad  </label>
            <input className="input-cantidad" type="number" id="cantidad" onChange={(e) => setRenta(e.target.value)} required />

            <input className="gasto-submit" type="submit" value="Guardar" />
          </form>
        </div>
        <p>{gastos.renta}</p>
        <p>{state}</p>


      </div>
    </div>
  )
}


export default HomePage;