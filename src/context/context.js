import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [mes, setMes] = useState([]);




  return (
    <Context.Provider value={{ logged, setLogged, mes, setMes }}>{children}</Context.Provider>
  )
}
