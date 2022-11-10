import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import { BlueBtn } from "../../../../../common/btn/Btn";
import { InputBox } from "../../../../../common/InputField/Form";

import { PageTopNav } from "../../../../../common/PageTopNav";
export const JobPaymentSubContractor = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Job Payment Management" />
          </div>

          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <div className="Job_Payment_Management_top_nav">
                <PageTopNav
                  data="JobPaymentManagement"
                  activeTabName="Sub-contractor"
                />
              </div>
            </div>
            <div className="col-12 ">
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
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div>
                <BlueBtn title="Excel" />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
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
      ID: "1",
      date: "22-02-22",
      SubContractorID: "EM0023",
      Name: "Lauren",
      Discription: "Extra Hour charge for jo",
      CashReceived: "00",
      PayAndExpenseMade: "50",
    },
    {
      ID: "2",
      date: "22-02-22",
      SubContractorID: "EM0023",
      Name: "Lauren",
      Discription: "Extra Hour charge for jo",
      CashReceived: "00",
      PayAndExpenseMade: "50",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.ID}</td>
        <td>{props.date}</td>
        <td>{props.SubContractorID}</td>
        <td>{props.Name}</td>
        <td>{props.Discription}</td>
        <td>{props.CashReceived}</td>
        <td>{props.PayAndExpenseMade}</td>
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
              <th scope="col">Job ID</th>
              <th scope="col">Date</th>
              <th scope="col">Sub-contractor ID</th>
              <th scope="col">Name</th>
              <th scope="col">Discription</th>
              <th scope="col">Cash Received</th>
              <th scope="col">Pay & Expense made</th>
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
