import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { DarkBlueLinkBtn } from "../../../../../../common/btn/Btn";
import { FiTruck, FiArrowLeft } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { SideLabelInput } from "../../../../../../common/InputField/Form";
import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../../common/PageTopNav";
export const JobsViewHistory = () => {
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
                    icon={<FiArrowLeft />}
                    link={-1}
                    title="back"
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
      JobDetails: "/",
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
          <div className="tabel_td_inner" onClick={() => navigate("/")}>
            <BiMap /> <FiTruck />
          </div>
        </td>
        <td>
          <div
            className="tabel_td_inner"
            onClick={() => navigate(props.JobDetails)}
          >
            job Details
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
