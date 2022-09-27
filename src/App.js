import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Container from "./components/common/Container/Container";
import RightNavbar from "./components/common/RightNavbar/RightNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import UsermanageCustomer from "./pages/Usermanagement/UsermanageCustomer";
import UsermanageEmployee from "./pages/Usermanagement/UsermanageEmployee";
import UsermanageSubContactor from "./pages/Usermanagement/UsermanageSubContactor";
import UsermanageReception from "./pages/Usermanagement/UsermanageReception";
import UsermanageRefereers from "./pages/Usermanagement/UsermanageRefereers.jsx";
// import Team from "./components/";

import NavContext from "./components/common/Context/NavContext";
// sunny
import { ServiceCategories } from "./pages/sunny/ServiceCategories";
// sunny end
function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <>
      <div>fjbjfgbi</div>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<RightNavbar />}
            content={
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/usermanageCustomer"
                  element={<UsermanageCustomer />}
                />
                <Route
                  path="/usermanageEmployee"
                  element={<UsermanageEmployee />}
                />
                <Route
                  path="/usermanageSubContactor"
                  element={<UsermanageSubContactor />}
                />
                <Route
                  path="/UsermanageReception"
                  element={<UsermanageReception />}
                />
                <Route
                  path="/UsermanageRefereers"
                  element={<UsermanageRefereers />}
                />
                <Route
                  path="/service_categories"
                  element={<ServiceCategories />}
                />
                {/* <Route
                path="/servicecategories"
                element={<Servicecategories />}
              />
              <Route path="/vehiclemanage" element={<Vehiclemanage />} />
              <Route path="/tempnotes" element={<Tempnotes />} />
              <Route path="/smsmanage" element={<Smsmanage />} /> */}
                {/* <Route path="/messages" element={<main>Messages</main>} /> */}
                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
}

export default App;
