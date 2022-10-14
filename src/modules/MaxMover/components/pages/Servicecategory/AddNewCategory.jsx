import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
// import { PageTopBtn } from "../components/pages/UserManagement/Customer";
import { BlueBtn, OutlineLinkBtn } from "../../../../../common/btn/Btn";

// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import {
  TextAreaBox,
  InputBox,
  SelectBox,
} from "../../../../../common/InputField/Form";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineModeEditOutline } from "react-icons/md";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useState } from "react";
// import React, { useEffect } from "react";
export const AddNewCategory = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Service Categories" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <ActionStrip title="Add new service category" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <NewServiceForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const NewServiceForm = () => {
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
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Category Name" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Slug URL Name" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Title" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Keyword" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Category Image" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <SelectBox data={DropData} label="Select parent category" required />
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <TextAreaBox
            label="Category discription"
            type="message"
            required
            multiline
            rows={3.8}
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <TextAreaBox
            label="Meta Tag Discription"
            type="message"
            required
            multiline
            rows={3.8}
          />
        </div>

        <div className="col-12">
          <div className="row g-4 justify-content-start">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <BlueBtn title="Submit" />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <OutlineLinkBtn title="Back" link={-1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
