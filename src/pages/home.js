import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import axios from "axios";
import NavComponent from "../components/navcomponent";
import IngresosComponent from "../components/ingresosComponent"
import MesComponent from "../components/mesComponent";
import GastosComponent from "../components/gastosComponent";
import "./style/home.css";

function HomePage() {
  // const { mes } = useContext(Context);
  // const { token } = useContext(Context);
  // const [state, setState] = useState("");
  // const { ingresos } = useContext(Context);
  // const [gastos, setGastos] = useState([])
  // const [renta, setRenta] = useState(0)
  // const [concepto, setConcepto] = useState("")
  // const { total, setTotal } = useContext(Context)
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

  // const [gasolinaSum, setGasolinaSum] = useState(0)
  // const [tarjetasSum, setTarjetasSum] = useState(0)
  // const [otrosSum, setOtrosSum] = useState(0)
  // const [saludSum, setSaludSum] = useState(0)
  // const [comidaSum, setComidaSum] = useState(0)
  return (
    <div className="container-main">
      <NavComponent></NavComponent>
      <MesComponent></MesComponent>
      <IngresosComponent></IngresosComponent>
      <GastosComponent></GastosComponent>



    </div>
  )
}


export default HomePage;