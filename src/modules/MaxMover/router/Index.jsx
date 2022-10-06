import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavContext from "../../../modules/MaxMover/components/Context/NavContext";
import RightNavbar from "../components/RightNavbar/RightNavbar";
import { Dashboard } from "./pages/Dashboard";
import Container from "../../MaxMover/components/Container/Container";
import { Customer } from "../components/pages/UserManagement/Customer";
<<<<<<< Updated upstream
import { AddNewVehicle } from "../components/pages/Vehiclemanagement/AddNewVehicle";
import { Vehiclemanagement } from "./pages/Vehiclemanagement";
=======
import { Vehiclemanagement } from "../pages/Vehiclemanagement";
>>>>>>> Stashed changes
export const MaxMoverRouts = () => {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };
  return (
    <>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<RightNavbar />}
            content={
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customer" element={<Customer />} />
<<<<<<< Updated upstream
                <Route path="/addnewvehicle" element={<AddNewVehicle />} />
=======
>>>>>>> Stashed changes
                <Route
                  path="/vehiclemanagement"
                  element={<Vehiclemanagement />}
                />

                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};
