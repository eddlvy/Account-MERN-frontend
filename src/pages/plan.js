import React, { useContext } from "react";
import { Context } from "../context/context";
import NavComponent from "../components/navcomponent";


function PlanPage() {
  const { plan } = useContext(Context);
  return (
    <div>
      <NavComponent></NavComponent>
      {plan.renta}
    </div>
  )
}


export default PlanPage;