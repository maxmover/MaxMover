import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { OutlineBtn, BlueBtn } from "../../../../../common/btn/Btn";
import { InputBox } from "../../../../../common/InputField/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export const Customer = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="User Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav />
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

const PageTopNav = () => {
  const PageTopNavListData = [
    {
      backgroundColor: "#3499ff",
      color: "white",
      name: "Customers",
      link: "/max/Customer",
    },
    {
      backgroundColor: "white",
      color: "black",
      name: "Employees",
      link: "/",
    },
  ];
  const PageTopNavListApp = (props) => {
    return (
      <NavLink to={props.link}>
        <div
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color,
          }}
          className=" page_top_nav_link"
        >
          {props.name}
        </div>
      </NavLink>
    );
  };
  return (
    <>
      <div className="page_top_nav_div_top">
        <div className="page_top_nav">
          {PageTopNavListData.map((val, i) => {
            return <PageTopNavListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const PageTopBtn = () => {
  return (
    <>
      <div className="row g-3">
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div>
                <OutlineBtn
                  icon={<AiOutlinePlusCircle />}
                  title="Add new customer"
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
              <div className="Customer_date_div">
                <label>Start date</label>
                <InputBox type="date" />
              </div>
            </div>
            <div className="col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="Customer_date_div">
                <label>Start date</label>
                <InputBox type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MyTabel = () => {
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
      CustomerID: "MMCR111",
      date: "22-02-22",
      CustomerType: "Normal",
      PhoneNumber: "Lauren",
      EmailId: "lauren@gmail.com",
      Phone: "7869889790",
    },
    {
      CustomerID: "1",
      date: "22-02-22",
      CustomerType: "Normal",
      PhoneNumber: "Lauren",
      EmailId: "lauren@gmail.com",
      Phone: "7869889790",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.CustomerID}</td>
        <td>{props.date}</td>
        <td>{props.CustomerType}</td>
        <td>{props.PhoneNumber}</td>
        <td>{props.EmailId}</td>
        <td>{props.Phone}</td>
        <td>
          <div className="tabel_td_inner">
            <FaRegEdit />
          </div>
        </td>
        <td>
          <div className="tabel_td_inner">
            <RiDeleteBin5Line />
          </div>
        </td>
        <td>
          <ApplicationBtn />
        </td>
      </tr>
    );
  };
  return (
    <>
      <div>
        <table
          id="Customer_table"
          className="table-striped table-hover text-center  table MyTabel_top_div"
        >
          <thead>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Date</th>
              <th scope="col">Customer Type</th>
              <th scope="col">Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
              <th scope="col">More Details</th>
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
const ApplicationBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Dropdown className="list_btn_dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="tabel_td_inner">
            <span>More Details</span>
            <AiOutlinePlusCircle />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/hire")}>hire</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
