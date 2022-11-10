import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { OutlineLinkBtn, BlueBtn } from "../../../../../common/btn/Btn";
import { InputBox } from "../../../../../common/InputField/Form";

import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";

export const Refereers = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="User Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Refereers" activeTabName="Refereers" />
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
                  title="Add new Refereers"
                  link="/max/add_new_refereers"
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
            <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-sm-12 col-12">
              <div className="  PageTopBtn_date ">
                <InputBox
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  label="Start date"
                />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-sm-12 col-12">
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
      ReceptionID: "MMCR111",
      date: "22-02-22",
      Name: "Lauren Scott",
      Username: "Lauren",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      Status: "Active",
      editLink: "/max/edit_refereers",
    },
    {
      ReceptionID: "1",
      date: "22-02-22",
      Name: "Lauren Scott",
      Username: "Lauren",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      Status: "Inactive",
      editLink: "/max/edit_refereers",
    },
    {
      ReceptionID: "MMCR112",
      date: "22-02-22",
      Name: "Lauren Scott",
      Username: "Lauren",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      Status: "Active",
      editLink: "/max/edit_refereers",
    },
    {
      ReceptionID: "2",
      date: "22-02-22",
      Name: "Lauren Scott",
      Username: "Lauren",
      EmailId: "lauren@gmail.com",
      PhoneNumber: "1234567890",
      Status: "Inactive",
      editLink: "/max/edit_refereers",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.ReceptionID}</td>
        <td>{props.date}</td>
        <td>{props.Name}</td>
        <td>{props.Username}</td>
        <td>{props.EmailId}</td>
        <td>{props.PhoneNumber}</td>
        <td>{props.Status}</td>
        <td>
          <div
            onClick={() => navigate(props.editLink)}
            className="tabel_td_inner"
          >
            <MdOutlineModeEditOutline />
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
              <th scope="col">Referrer ID</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone</th>
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
