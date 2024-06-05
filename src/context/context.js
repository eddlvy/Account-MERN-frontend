import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [mes, setMes] = useState([]);
  const [token, setToken] = useState(null);
  const [ingresos, setIngresos] = useState(0);




  return (
    <Context.Provider value={{ logged, setLogged, mes, setMes, token, setToken, ingresos, setIngresos }}>{children}</Context.Provider>
  )
}
