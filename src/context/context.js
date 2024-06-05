import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [mes, setMes] = useState([]);
  const [token, setToken] = useState(null);




  return (
    <Context.Provider value={{ logged, setLogged, mes, setMes, token, setToken }}>{children}</Context.Provider>
  )
}
