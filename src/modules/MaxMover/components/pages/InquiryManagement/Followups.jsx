import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { InputBox } from "../../../../../common/InputField/Form";

import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";
import { MdOutlineAttachEmail } from "react-icons/md";
export const Followups = () => {
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
              <PageTopBtn />
            </div>
            <div className="col-12  ">
              <div className="table_main_div">
                <MyTabel />
              </div>
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
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="  PageTopBtn_date ">
                <InputBox
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="Start date"
                />
              </div>
            </div>
            <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
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

const MyTabel = () => {
  const navigate = useNavigate();
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  useEffect(() => {
    if (!isTableLoaded) {
      setTimeout(() => {
        setIsTableLoaded(true);
        $("#Customer_table").DataTable({
          responsive: true,
          deferRender: true,
          scroller: true,
          // bLengthChange: false,
        });
      }, 1000);
    }
  });
  const ListData = [
    {
      SrNo: "1",
      ID: "MMCR111",
      Name: "Lauren Scott",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      FollowupDate: "22-02-22",
      Status: "Quotation Generated",
      ActionIcon: <MdOutlineModeEditOutline />,
      editLink: "/max/followups_action",
    },
    {
      SrNo: "2",
      ID: "MMCR111",
      Name: "Lauren Scott",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      FollowupDate: "22-02-22",
      Status: "Inquiry Generated",
      ActionIcon: <MdOutlineAttachEmail />,
      editLink: "/max/followups_action",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.SrNo}</td>
        <td>{props.ID}</td>
        <td>{props.Name}</td>
        <td>{props.EmailId}</td>
        <td>{props.PhoneNumber}</td>
        <td>{props.FollowupDate}</td>
        <td>{props.Status}</td>
        <td>
          <div
            onClick={() => navigate(props.editLink)}
            className="tabel_td_inner"
          >
            {props.ActionIcon}
          </div>
        </td>
        <td>
          <div className="tabel_td_inner">
            <AiOutlineDelete />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div>
        <table
          id="Customer_table"
          className="table-striped table-hover text-center mb-3  table MyTabel_top_div"
        >
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Inquiry ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone</th>
              <th scope="col">Followup Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {ListData.map((val, i) => {
              return <ListApp key={i} {...val} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
