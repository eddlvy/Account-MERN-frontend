import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import PrivateRoute from "./components/authRoutes";
import HomePage from "./pages/home";
import GastosPage from "./pages/gastosmes";
import PlanPage from "./pages/plan";
import ResumenTarjetasPage from "./pages/resumentarjetas";
import HistoriaPage from "./pages/historia";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/user/home" element={<HomePage />}></Route>
          <Route path="/user/gastos" element={<GastosPage />}></Route>
          <Route path="/user/plan" element={<PlanPage />}></Route>
          <Route path="/user/tarjetas" element={<ResumenTarjetasPage />}></Route>
          <Route path="/user/historia" element={<HistoriaPage />}></Route>
        </Route>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
