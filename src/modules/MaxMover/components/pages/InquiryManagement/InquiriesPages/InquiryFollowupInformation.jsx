import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { InputBox } from "../../../../../../common/InputField/Form";
import { PageTopNav } from "../../../../../../common/PageTopNav";
import { PageTabs } from "../../../../../../common/PageTabs";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OutlineLinkBtn } from "../../../../../../common/btn/Btn";
export const InquiryFollowupInformation = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Inquiry Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <PageTopNav data="Inquiries" activeTabName="Inquiries" />
            </div>
            <div className="col-12">
              <PageTabs
                data="Inquiries"
                activeTabName="Inquiry Followup Information"
              />
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
      currentAction: "Take second followup from client",
      clientsResponse: "Nec tellus in nulla bibendum.",
      PhoneNumber: "1234567890",
      Status: "Inquiry Generated",
      editLink: "/max/take_action",
    },
    {
      SrNo: "2",
      ID: "MMCR111",
      currentAction: "Take second followup from client",
      clientsResponse: "Nec tellus in nulla bibendum.",
      PhoneNumber: "1234567890",
      Status: "Inquiry Generated",
      editLink: "/max/take_action",
    },
    {
      SrNo: "3",
      ID: "MMCR111",
      currentAction: "Take second followup from client",
      clientsResponse: "Nec tellus in nulla bibendum.",
      PhoneNumber: "1234567890",
      Status: "Inquiry Generated",
      editLink: "/max/take_action",
    },
    {
      SrNo: "4",
      ID: "MMCR111",
      currentAction: "Take second followup from client",
      clientsResponse: "Nec tellus in nulla bibendum.",
      PhoneNumber: "1234567890",
      Status: "Inquiry Generated",
      editLink: "/max/take_action",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.SrNo}</td>
        <td>{props.ID}</td>
        <td>{props.currentAction}</td>
        <td>{props.clientsResponse}</td>
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
              <th scope="col">Sr. No.</th>
              <th scope="col">Inquiry ID</th>
              <th scope="col">Current Action</th>
              <th scope="col">Clients Response</th>
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
