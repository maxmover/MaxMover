import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import {
  OutlineLinkBtn,
  BlueBtn,
  DarkBlueLinkBtn,
} from "../../../../../common/btn/Btn";
import { FiTruck, FiClock } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { InputBox } from "../../../../../common/InputField/Form";
import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";
import Dropdown from "react-bootstrap/Dropdown";

export const Jobs = () => {
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
                  <DarkBlueLinkBtn
                    icon={<FiClock />}
                    link="/max/jobs_view_history"
                    title="View History"
                  />
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-9 col-sm-12 col-12">
                  <PageTopBtn />
                </div>
              </div>
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
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div>
                <OutlineLinkBtn
                  icon={<AiOutlinePlusCircle />}
                  title="Add new jobs"
                  link="/max/add_new_job"
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
        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
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
      SrNo: "1",
      ID: "MMCR111",
      Name: "Lauren",
      Phone: "1234567890",
      EndDate: "22-02-22",
      StartDate: "22-02-22",
      Status: "Job Created",
      editLink: "/max/edit_job",
    },
    {
      SrNo: "2",
      ID: "MMCR111",
      Name: "Lauren",
      Phone: "1234567890",
      EndDate: "22-02-22",
      StartDate: "22-02-22",
      Status: "Job Created",
      editLink: "/max/edit_job",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.SrNo}</td>
        <td>{props.ID}</td>
        <td>{props.Name}</td>
        <td>{props.Phone}</td>
        <td>{props.StartDate}</td>
        <td>{props.EndDate}</td>
        <td>{props.Status}</td>
        <td>
          <div className="tabel_td_inner">
            <AiOutlineDelete />
          </div>
        </td>
        <td>
          <div
            onClick={() => navigate(props.editLink)}
            className="tabel_td_inner"
          >
            <MdOutlineModeEditOutline />
          </div>
        </td>
        <td>
          <div
            className="tabel_td_inner"
            onClick={() => navigate("/max/tracking_delivery")}
          >
            <BiMap /> <FiTruck />
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

          <Dropdown.Menu className="dropdown-menu-end animate slideIn">
            <Dropdown.Item>
              <button onClick={() => navigate("/max/add_expense")}>
                add Expense
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => navigate("/max/job_details")}>
                job details
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
              <th>Sr. No.</th>
              <th scope="col">Job ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
              <th scope="col">Action</th>
              <th scope="col">Tracking</th>
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
