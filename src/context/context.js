import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [mes, setMes] = useState([]);
  const [token, setToken] = useState(null);
  const [ingresos, setIngresos] = useState(0);
  const [total, setTotal] = useState(0)
  // const [renta, setRenta] = useState(0)
  // const [deuda, setDeuda] = useState(0)
  // const [cuba, setCuba] = useState(0)
  // const [electricidad, setElec] = useState(0)
  // const [agua, setAgua] = useState(0)
  // const [gas, setGas] = useState(0)
  // const [arnona, setArnona] = useState(0)
  // const [hot, setHot] = useState(0)
  // const [internet, setInternet] = useState(0)
  // const [bl, setBl] = useState(0)
  // const [concepto, setConcepto] = useState("")
  // const [gasolina, setGasolina] = useState([])
  // const [comida, setComida] = useState([])
  // const [salud, setSalud] = useState([])
  // const [tarjetas, setTarjetas] = useState([])
  // const [otros, setOtros] = useState([])






  return (
    <Context.Provider value={{ logged, setLogged, mes, setMes, token, setToken, ingresos, setIngresos, total, setTotal }}>{children}</Context.Provider>
  )
}
