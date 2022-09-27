import { Nav, Tab } from "react-bootstrap";
import React from "react";
import Usertable from "../../components/pages/usermanagement/usertable";
import Datacommonfilters from "../../components/pages/usermanagement/datatablecommon_filters.jsx";
// import styles from "../../styles/UsermanageCustomer.module.scss";

// import styles from "./Analytics.module.scss";
// import Line from "./Charts/Line";
// import StackedColumns from "./Charts/StackedColumns";
// import GroupedBars from "./Charts/GroupedBars";
// import { Link } from "react-router-dom";
// import { WiStars } from "react-icons/wi";
// import { FaArrowRight } from "react-icons/fa";

const UsermanageCustomer = () => {
  return (
    <>
      <div
        className="mainbody_container bg-white m-3 p-3"
        style={{ Padding: "3rem", Width: "100%" }}>
        <div className="container pagetitle my-2">
          <h1>User Management</h1>
        </div>

        {/* Tabs */}

        <div className="usermanagement_tabs my-md-3 my-1 py-md-3 py-1">
          <Tab.Container id="center-tabs-example" defaultActiveKey="customer">
            <div className="profile_tab_div2">
              <div className="row">
                <div className="col-12">
                  <Nav variant="pills" className="tabpillsscroll">
                    <Nav.Item>
                      <Nav.Link eventKey="customer">Customers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="employees">Employees</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="subcontractor">
                        Sub-Contactor
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="reception">Receptions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="refereers">Refereers</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>

            {/* Tab contents */}

            <Tab.Content>
              <Tab.Pane eventKey="customer">
                <Datacommonfilters />
                <Usertable />
              </Tab.Pane>
              <Tab.Pane eventKey="employees">
                <Datacommonfilters />
                <Usertable />
              </Tab.Pane>
              <Tab.Pane eventKey="subcontractor">
                <Datacommonfilters />
                <Usertable />
              </Tab.Pane>
              <Tab.Pane eventKey="reception">
                <Datacommonfilters />
                <Usertable />
              </Tab.Pane>
              <Tab.Pane eventKey="refereers">
                <Datacommonfilters />
                <Usertable />
                <div className="m_t"></div>
                {/* <PreviousExperiences /> */}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default UsermanageCustomer;
