import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { OutlineLinkBtn, BlueBtn } from "../../../../../common/btn/Btn";
import { SideLabelInput } from "../../../../../common/InputField/Form";
import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";
import { MdOutlineAttachEmail } from "react-icons/md";

export const Quotations = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="User Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Inquiries" activeTabName="Quotations" />
            </div>
            <div className="col-12">
              <PageTopBtn />
            </div>
            <div className="col-12">
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
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div>
                <OutlineLinkBtn
                  icon={<AiOutlinePlusCircle />}
                  title="Add new quotation"
                  link="/max/add_new_quotations"
                />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
              <div>
                <BlueBtn title="Excel" />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
              <div>
                <BlueBtn title="Print" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-5 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className=" d-flex justify-content-end">
                <SideLabelInput label="start date" type="date" />
              </div>
            </div>
            <div className="col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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
      Status: "Inquiry Generated",
      ActionIcon: <MdOutlineAttachEmail />,
      editLink: "/max/edit_quotations",
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
      editLink: "/max/edit_quotations",
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