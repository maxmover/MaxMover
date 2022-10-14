import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import {
  OutlineLinkBtn,
  BlueBtn,
  FileInput,
} from "../../../../../common/btn/Btn";

import { TextAreaBox, InputBox } from "../../../../../common/InputField/Form";
import { useNavigate } from "react-router-dom";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineModeEditOutline } from "react-icons/md";
// import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
// import { useState } from "react";
// import React, { useEffect } from "react";

export const AddnewSms = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="SMS Management" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <ActionStrip title="Add new SMS" />
              </div>
            </div>

            <div className="col-12">
              <div className="row g-3">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="row g-3 justify-content-between">
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                      <InputBox label="Mail Title" type="text" required />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="row justify-content-end g-3">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                          <div>
                            <BlueBtn title="Excel" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                          <div>
                            <BlueBtn title="Print" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <AddnotesForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AddnotesForm = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="position-relative">
            <TextAreaBox
              label="Note"
              type="message"
              required
              multiline
              rows={6}
            />
            <div className="uploadOptions">
              <div className="imageUpload">
                <FileInput />
              </div>
            </div>
          </div>
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
