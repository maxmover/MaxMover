import { InnerPagesTopTitle } from "../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
// import { PageTopBtn } from "../components/pages/UserManagement/Customer";
import { OutlineBtn, BlueBtn } from "../../../common/btn/Btn";
// import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
export const Vehiclemanagement = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Vehicle Management" />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-xl-6">
                <div className="row g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-sm-12">
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
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div>
                      <BlueBtn title="Print" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6"></div>
            </div>
          </div>
          <div className=" mt-5">
            <MyTabel />
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
          <div className="tabel_td_inner">
            <span>More Details</span>
            <AiOutlinePlusCircle />
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
          className="table-striped table-hover text-center  table MyTabel_top_div">
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
