import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import React from "react";

import { PageTopNav } from "../../../../../../common/PageTopNav";
import { ActionStrip } from "../../../../../../common/actionStrip/ActionStrip";
import { AiOutlinePlus } from "react-icons/ai";
import { SelectBox, InputBox } from "../../../../../../common/InputField/Form";
import { BlueBtn, OutlineLinkBtn } from "../../../../../../common/btn/Btn";
import { AiOutlinePlusCircle } from "react-icons/ai";
export const FollowupsAction = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Inquiry Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Inquiries" activeTabName="Followups" />
            </div>
            <div className="col-12">
              <ActionStrip icon={<AiOutlinePlus />} title="Take Action" />
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
              <div>
                <OutlineLinkBtn
                  icon={<AiOutlinePlusCircle />}
                  title="Add new customer"
                  link="/max/"
                />
              </div>
            </div>
            <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className=" PageTopBtn_date">
                <InputBox
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="End date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Form = () => {
  const NextAction = [
    {
      value: "Next Followup",
      label: "Next Followup",
      url: "/max/followups_next_followup",
    },
    {
      value: "Generate Quotation",
      label: "Generate Quotation",
      url: "/max/followups_generate_quotation",
    },
    {
      value: "Cancel",
      label: "Cancel",
      url: "/max/followups",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Client Response" />
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <SelectBox data={NextAction} label="Next Action" />
        </div>

        <div className="col-12">
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
