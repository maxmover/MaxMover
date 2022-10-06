import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
// import { PageTopBtn } from "../components/pages/UserManagement/Customer";
// import { OutlineBtn, BlueBtn } from "../../../common/btn/Btn";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import { DatepickerMui, InputBox } from "../../../../../common/InputField/Form";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineModeEditOutline } from "react-icons/md";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useState } from "react";
// import React, { useEffect } from "react";
export const AddNewVehicle = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Vehicle Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <ActionStrip title="Add new service category" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <NewVehicleForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const NewVehicleForm = () => {
  const DropData = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];
  return (
    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
      <div className="col-md-6">
        <InputBox
          label="Vehicle Name"
          type="text"
          required
          helperText="Error"
        />
      </div>
      {/* <div className="col-md-6">
        <SelectBox
          data={DropData}
          label="Select parent category"
          helperText="Error"
          required
        />
      </div> */}
      <div className="col-md-6">
        <InputBox
          label="Vehicle Number"
          type="number"
          required
          helperText="Error"
        />
      </div>
      <div className="col-md-6">
        <InputBox
          label="Vehicle Capacity"
          type="number"
          required
          helperText="Error"
        />
      </div>
      <div className="col-md-6">
        <InputBox
          //   label="Vehicle Registration expire date"
          type="date"
          required
          helperText="Error"
        />
      </div>
      <div className="col-md-6">
        <DatepickerMui required helperText="Error" />
      </div>
    </div>
  );
};
