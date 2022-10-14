import "../App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { MaxMoverRouts } from "../modules/MaxMover/router/Index";
import Login from "../auth/Login";
function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="max/*" element={<MaxMoverRouts />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<main>NOT FOUND</main>} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
