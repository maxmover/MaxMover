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
import { SideLabelInput } from "../../../../../common/InputField/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";

export const Employees = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="User Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Employees" activeTabName="Employees" />
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
                  title="Add new employees"
                  link="/max/add_employees"
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
      CustomerID: "MMCR111",
      date: "22-02-22",
      Name: "Lauren",
      PhoneNumber: "1234567890",
      EmailId: "lauren@gmail.com",
      Status: "Active",
      editLink: "/max/edit_employees",
    },
    {
      CustomerID: "1",
      date: "22-02-22",
      Name: "Lauren",
      PhoneNumber: "1234567890",
      EmailId: "lauren@gmail.com",
      Status: "Inactive",
      editLink: "/max/edit_employees",
    },
    {
      CustomerID: "MMCR113",
      date: "22-02-22",
      Name: "Lauren",
      PhoneNumber: "1234567890",
      EmailId: "lauren@gmail.com",
      Status: "Active",
      editLink: "/max/edit_employees",
    },
    {
      CustomerID: "2",
      date: "22-02-22",
      Name: "Lauren",
      PhoneNumber: "1234567890",
      EmailId: "lauren@gmail.com",
      Status: "Inactive",
      editLink: "/max/edit_employees",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.CustomerID}</td>
        <td>{props.date}</td>
        <td>{props.Name}</td>
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
        <td>
          <TabelMoreDetailsBtn />
        </td>
      </tr>
    );
  };
  const TabelMoreDetailsBtn = () => {
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
              <button onClick={() => navigate("/max/employees_bank_details")}>
                Bank Details
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => navigate("/max/working_rate")}>
                Working rate
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
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
              <th scope="col">Sub-contactor ID</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
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
