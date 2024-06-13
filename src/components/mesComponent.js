// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../context/context";
// import axios from "axios";



// function MesComponent() {
//   const { mes, setMes } = useContext(Context);
//   const { token } = useContext(Context);
//   const [state, setState] = useState("");
//   const headers = {
//     headers: {
//       "Authorization": `Bearer ${token}`
//     }
//   };


//   // cambiar mes handler
//   function handleSelectMes(e) {
//     e.preventDefault();
//     const data = {
//       mes: mes
//     }
//     axios.post('http://localhost:5000/user/home/mes', data, headers).then(res => setState("Mes Cambiado")).catch(error => setState(`Error Posting , ${error}`))

//   };

//   return (
//     <div className="container-mes">
//       <div className="select-mes">
//         <form className="form-mes" onSubmit={handleSelectMes} method="post">
//           <label className="label-mes">Iniciar Nuevo Mes, Escribe mes  </label>
//           <input className="mes-input" type="text" id="mes" onChange={(e) => setMes(e.target.value)} />
//           <input className="mes-submit" type="submit" value="Click para iniciar Mes" />
//           <p className="error-text">{state}</p>
//         </form>
//       </div >
//       <h1>Mes Seleccionado: {mes}</h1>
//     </div >
//   )
// }


// export default MesComponent;