import React from "react";
import { NavLink } from "react-router-dom";
import './style/navcomponent.css';

function NavComponent() {
  return (
    <div className="nav-container">
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/home">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/gastos">Gastos del Mes</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/plan">Plan</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/tarjetas">Resumen de Tarjetas</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/user/historia">Historia de Transacciones</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to="/">Salir</NavLink>
    </div>
  )
}

export default NavComponent;