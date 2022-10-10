import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavContext from "../../../modules/MaxMover/components/Context/NavContext";
import RightNavbar from "../components/RightNavbar/RightNavbar";
import { Dashboard } from "../pages/Dashboard";
import Container from "../../MaxMover/components/Container/Container";
import { Customer } from "../components/pages/UserManagement/Customer";

import { AddNewVehicle } from "../components/pages/VehicleManagement/AddNewVehicle";
import { AddNewCategory } from "../components/pages/Servicecategory/AddNewCategory";
import { EditCategory } from "../components/pages/Servicecategory/EditCategory";
import { Vehiclemanagement } from "../pages/Vehiclemanagement";
import { Servicecategory } from "../pages/Servicecategory";

import { BankDetails } from "../components/pages/UserManagement/customerPage/BankDetails";
import { AddCustomer } from "../components/pages/UserManagement/customerPage/AddCustomer";
import { EditCustomer } from "../components/pages/UserManagement/customerPage/EditCustomer";
import { Employees } from "../components/pages/UserManagement/Employees";
import { Receptions } from "../components/pages/UserManagement/Receptions";
import { Refereers } from "../components/pages/UserManagement/Refereers";
import { SubContractors } from "../components/pages/UserManagement/SubContractors";
import { EditVehicle } from "../components/pages/VehicleManagement/EditVehicle";

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

                <Route path="/addnewvehicle" element={<AddNewVehicle />} />
                <Route path="/bank_details" element={<BankDetails />} />
                <Route path="/add_customer" element={<AddCustomer />} />
                <Route path="/edit_customer" element={<EditCustomer />} />
                <Route path="/add_new_category" element={<AddNewCategory />} />
                <Route path="/edit_category" element={<EditCategory />} />

                <Route path="/employees" element={<Employees />} />
                <Route path="/receptions" element={<Receptions />} />
                <Route path="/refereers" element={<Refereers />} />
                <Route path="/sub_contractors" element={<SubContractors />} />
                <Route path="/edit_vehicle" element={<EditVehicle />} />
                <Route path="/service_category" element={<Servicecategory />} />

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
