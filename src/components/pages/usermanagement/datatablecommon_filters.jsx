import React from "react";
import Button from "react-bootstrap/Button";
import { IoMdAddCircleOutline } from "react-icons/io";
import Datepickercal from "./calender_input";

const Datacommonfilters = () => {
  return (
    <div className="container mx-0 px-0">
      <div className="row justify-content-between align-items-start">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-12 my-3 ">
          <div className="d-flex flex-md-row flex-column justify-content-between align-items-md-center">
            <div>
              <Button variant="outline-primary" className="btnoutline">
                <IoMdAddCircleOutline /> Add new customer
              </Button>
            </div>
            <div className="d-flex justify-content-md-around justify-content-start align-items-center my-md-0 my-2 ">
              <Button className="actionbtns me-2" size="lg" variant="primary">
                Excel
              </Button>
              <Button className="actionbtns ms-2" size="lg" variant="primary">
                Print
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 my-3 ">
          <div className="row justify-content-around align-items-start">
            <div className="col-md-6">
              <div className="startDate datePickinput">
                <div className="col-lg-4 col-md-4 col-3">Start Date</div>
                <div className="col-8">
                  <Datepickercal />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="endDate datePickinput">
                <div className="col-lg-4 col-md-4 col-3">End Date</div>
                <div className="col-8">
                  <Datepickercal />
                </div>
              </div>
              {/* <div className="searchTable datePickinput">
                            <div className="col-lg-4 col-md-4 col-3">
                              Search
                            </div>
                            <div className="col-8">
                              <input placeholder="Search Here" />
                            </div>
                          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datacommonfilters;
