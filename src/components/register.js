import React, { useState } from "react";
import axios from "axios";
import './style/register.css';


function RegisterComponent() {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [state, setState] = useState();

  function postToServer(e) {
    const dataToPost = {
      nombre: nombre,
      clave: clave
    }
    e.preventDefault();
    axios.post('http://localhost:5000/register', dataToPost).then(res => res.status === 201 ? setState("Usuario Creado") : setState("Usuario ya existe")).catch(error => { setState(`Error Creando Usuario, error ${error}`) })
  }

  return (
    <div className="div-register">
      <p className="text-register">Eres Nuevo Aqui? Registrate</p>
      <form className="form-register" onSubmit={postToServer} method="post">
        <label className="label-register">Escribe Nombre de Usuario</label>
        <input className="input-register" type="text" id="nombre-register" value={nombre} onChange={(e) => { setNombre(e.target.value) }} required></input>
        <label className="label-register">Escribe Clave de Entrada</label>
        <input className="input-register" type="password" id="clave-register" value={clave} onChange={(e) => { setClave(e.target.value) }} required></input>
        <input className="submit-register" type="submit" value="Click Enviar"></input>
      </form>
      <p className="text-register">{state}</p>
    </div>
  )
}


export default RegisterComponent;