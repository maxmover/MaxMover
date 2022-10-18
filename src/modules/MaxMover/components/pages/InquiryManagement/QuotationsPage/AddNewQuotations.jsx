import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import React from "react";
import { SideLabelInput } from "../../../../../../common/InputField/Form";
import { PageTopNav } from "../../../../../../common/PageTopNav";
import { ActionStrip } from "../../../../../../common/actionStrip/ActionStrip";
import { AiOutlinePlus } from "react-icons/ai";
import {
  SelectBox,
  InputBox,
  InputBoxWithSwitch,
} from "../../../../../../common/InputField/Form";
import { BlueBtn, OutlineLinkBtn } from "../../../../../../common/btn/Btn";

export const AddNewQuotations = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Inquiry Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Inquiries" activeTabName="Quotations" />
            </div>
            <div className="col-12">
              <ActionStrip
                icon={<AiOutlinePlus />}
                title="Add New  Quotation"
              />
            </div>
            <div className="col-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PageTopBtn = () => {
  return (
    <>
      <div className="row g-3">
        <div className="col-12">
          <div className="row g-3">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className=" d-flex justify-content-end">
                <SideLabelInput label="start date" type="date" />
              </div>
            </div>
            <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className=" d-flex justify-content-end">
                <SideLabelInput label="end date" type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Form = () => {
  const SelectServices = [
    {
      value: "Facebook",
      label: "Facebook",
    },
    {
      value: "Google",
      label: "Google",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <SelectBox data={SelectServices} label="Select Services" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Pickup address" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBoxWithSwitch
            type="text"
            label="Required packing or unpacking ?"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="First Name" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Drop Off Addess" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBoxWithSwitch type="text" label="Require Piano, other " />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Last Name" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Add Extra Address" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBoxWithSwitch type="text" label="Stairs" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="email" label="Email Id" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox
            InputLabelProps={{ shrink: true }}
            type="date"
            label="Pickup Date"
            required
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBoxWithSwitch type="text" label="Any Bulky Items" />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="number" label="Contact Number" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox
            InputLabelProps={{ shrink: true }}
            type="time"
            label="Pick Up Time"
            required
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Country" required />
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Other Contact Number" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="No. of Bedrooms" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="State" required />
        </div>

        <div className="col-12">
          <div className="quotation_man_title_bottom">
            <InnerPagesTopTitle name="Quotation Information" />
          </div>
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Services" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Approximate hours" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Per hour charge" required />
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Minimum hour" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Minimum total charge" required />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Extra items" />
        </div>
        <div className="col-12">
          <div className="row g-4 ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <BlueBtn title="Send Quotation to Customer" />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
              <BlueBtn title="Preview" />
            </div>
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className="row g-4 justify-content-center">
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
