import React, { useContext } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";


function PlanPage() {
  const { plan } = useContext(Context);
  return (
    <div>
      <NavComponent></NavComponent>

      <p>{plan.renta}</p>
    </div>
  )
}


export default PlanPage;