import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import React from "react";
import {
  OutlineLinkBtn,
  BlueBtn,
  DarkBlueBtn,
} from "../../../../../../common/btn/Btn";

import { PageTopNav } from "../../../../../../common/PageTopNav";
import { ActionStrip } from "../../../../../../common/actionStrip/ActionStrip";

export const JobDetails = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Inquiry Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-10 col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
                  <PageTopNav data="Inquiries" activeTabName="Jobs" />
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
                  <DarkBlueBtn title="Delete Job" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <ActionStrip title="Job Details" />
            </div>
            <div className="col-12">
              <DetailsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const DetailsList = () => {
  const ListLeftData = [
    {
      title: "Job Id",
      titleData: "MMCR111",
    },
    {
      title: "Customer Details",
      titleData: "Lauren Deva@gmail.com",
    },
    {
      title: "Contact Number",
      titleData: "7778979555",
    },
    {
      title: "Pickup Address",
      titleData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      title: "Minimun Hour",
      titleData: "4 hours",
    },
    {
      title: "Per Hour Charge",
      titleData: "15$ per hour",
    },
  ];
  const ListRightData = [
    {
      title: "Job Start Date",
      titleData: "22-02-2022",
    },
    {
      title: "Job end Date",
      titleData: "22-03-2022",
    },
    {
      title: "Extra Surcharge Items",
      titleData: "Piano",
    },
    {
      title: "Drop off Address",
      titleData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Extra Hour",
      titleData: "2 hours",
    },
    {
      title: "Total Hour Charge",
      titleData: "180$",
    },
  ];
  const ListBottomData = [
    {
      title: "Total Hour",
      titleData: "8 hours",
    },
    {
      title: "Total Charge",
      titleData: "200 $",
    },
    {
      title: "GST%",
      titleData: "15 $",
    },
    {
      title: "Deduct Booking Amount",
      titleData: "50 $",
    },
    {
      title: "Surcharge Charge",
      titleData: "50 $",
    },
  ];
  const ListLeftApp = (props) => {
    return (
      <div className="row">
        <div className="col-4">
          <p className="job_details_text">{props.title} -</p>
        </div>
        <div className="col-8">
          <p className="job_details_text">
            <span>{props.titleData}</span>
          </p>
        </div>
      </div>
    );
  };
  const ListRightApp = (props) => {
    return (
      <div className="row">
        <div className="col-4">
          <p className="job_details_text">{props.title} -</p>
        </div>
        <div className="col-8">
          <p className="job_details_text">
            <span>{props.titleData}</span>
          </p>
        </div>
      </div>
    );
  };
  const ListBottomApp = (props) => {
    return (
      <div className="row">
        <div className="col-4">
          <p className="job_details_text">{props.title}</p>
        </div>
        <div className="col-8">
          <p className="job_details_text">
            <span>-{props.titleData}</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="row">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
          {ListLeftData.map((val, i) => {
            return <ListLeftApp key={i} {...val} />;
          })}
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
          {ListRightData.map((val, i) => {
            return <ListRightApp key={i} {...val} />;
          })}
        </div>
        <div className="col-12">
          <div>
            <hr className=" w-100" />
          </div>
        </div>
        <div className="col-12">
          {ListBottomData.map((val, i) => {
            return <ListBottomApp key={i} {...val} />;
          })}
        </div>
        <div className="col-12">
          <div>
            <hr className=" w-100" />
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              <p className="job_details_text mb-0">Net Payable Amount</p>
            </div>
            <div className="col-8">
              <p className="job_details_text mb-0">
                <span>-220 $ </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div>
            <hr className=" w-100" />
          </div>
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
