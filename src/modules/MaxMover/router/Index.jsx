import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavContext from "../components/Context/NavContext";
import RightNavbar from "../../common/RightNavbar/RightNavbar";
import Dashboard from "../components/Dashboard/Dashboard";
import Container from "../components/Container/Container";
import { Customer } from "../components/pages/UserManagement/Customer";
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

                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};
