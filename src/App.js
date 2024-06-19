import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import PrivateRoute from "./components/authRoutes";
import HomePage from "./pages/home";
import PlanPage from "./pages/plan";
import HistoriaPage from "./pages/historia";
import ExtrasPage from "./pages/extras";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/user/home" element={<HomePage />}></Route>
          <Route path="/user/extras" element={<ExtrasPage />}></Route>
          <Route path="/user/plan" element={<PlanPage />}></Route>
          <Route path="/user/historia" element={<HistoriaPage />}></Route>
        </Route>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
