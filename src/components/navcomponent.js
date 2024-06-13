import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import './style/navcomponent.css';
import { Context } from "../context/context";

function NavComponent() {
  const { setLogged } = useContext(Context)
  function handleSalir() {
    setLogged(false)
  }
  return (
    <div className="nav-container">
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/home">Inicio</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/gastos">Historial Gastos del Mes</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/plan">Cambiar Plan</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/historia">Historial de Transacciones</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/" onClick={handleSalir}>Salir</NavLink>

    </div>
  )
}

export default NavComponent;