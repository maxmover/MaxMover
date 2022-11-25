import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { AiOutlineDelete, AiOutlinePrinter } from "react-icons/ai";
import { useState } from "react";
import React, { useEffect } from "react";
import {
  BlueBtn,
  DarkBlueBtn,
  OutlineBtn,
} from "../../../../../common/btn/Btn";
import { InputBox } from "../../../../../common/InputField/Form";

import { useNavigate } from "react-router-dom";
import { PageTopNav } from "../../../../../common/PageTopNav";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
export const JobExpenseReport = () => {
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
                  activeTabName="Job Expense Report"
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
      TotalSalary: "500",
      TotalExpenses: "00",
      TotalPayment: "500",
      PaymentMode: "Cash",
      NetPayable: "00",
    },
    {
      ID: "2",
      date: "22-02-22",
      TotalSalary: "500",
      TotalExpenses: "00",
      TotalPayment: "500",
      PaymentMode: "Bank Transfer",
      NetPayable: "00",
    },
    {
      ID: "3",
      date: "22-02-22",
      TotalSalary: "500",
      TotalExpenses: "00",
      TotalPayment: "500",
      PaymentMode: "Invoice",
      NetPayable: "00",
    },
  ];
  const ListApp = (props) => {
    return (
      <tr>
        <td>{props.ID}</td>
        <td>{props.date}</td>
        <td>{props.TotalSalary}</td>
        <td>{props.TotalExpenses}</td>
        <td>{props.TotalPayment}</td>
        <td>{props.PaymentMode}</td>
        <td>{props.NetPayable}</td>
        <td>
          <TabelMoreDetailsBtn />
        </td>
        <td>
          <div className="tabel_td_inner">
            <AiOutlineDelete />
          </div>
        </td>
      </tr>
    );
  };
  const TabelMoreDetailsBtn = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Dropdown className="list_btn_dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <div className="tabel_td_inner">
              <span>Job Details</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-end animate slideIn">
            <Dropdown.Item>
              <button onClick={() => setModalShow(true)}>job Details</button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => navigate("/max/add_received_payment")}>
                Add received payment
              </button>
              <JobDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
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
              <th scope="col">Job ID</th>
              <th scope="col">Date</th>
              <th scope="col">Total Salary</th>
              <th scope="col">Total Expenses</th>
              <th scope="col">Total Payment</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Net payable</th>
              <th scope="col">More Details+</th>
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
const JobDetailsModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="Job_Details_Modal_header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            View Job Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-1">
            <div className="col-12">
              <div className="row mb-3">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12">
                  <DarkBlueBtn title="Send Job Completion to Customer" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Service Title :</li>
                          <li className="details">Furniture Removal</li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">For :</li>
                          <li className="details">Driver 1</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Job Id :</li>
                          <li className="details">JI200123</li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Job Title :</li>
                          <li className="details">
                            4.5 Tonne truck with 2 men
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div bg-white">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Customer Detail :</li>
                          <li className="details">
                            Lauren Deva <br />
                            lauren@gmail.com <br />
                            7789658933
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Customer Id :</li>
                          <li className="details">MMCR111</li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Customer Type :</li>
                          <li className="details">Regular</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Job Actual Date :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">
                            20-02-2022 <br />
                            11:20:48
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Job End Date :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">
                            20-02-2022 <br />
                            11:20:48
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className=" bg-white Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Pickup Suburb :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 bg-white">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Dropoff Suburb :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">abc</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Is Packing :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyx</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Is Piano :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className=" bg-white Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Bedrooms ;</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 bg-white">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Stairs :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">abc</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Price :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">78</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Any Heavy Items :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Remark :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">78</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Preference Date :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">20-02-2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className=" bg-white Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Per Hour Charge :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 bg-white">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Per Hour Charge :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 ">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Total Hour CHarge :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 ">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className=" bg-white Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Job Duration :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 bg-white">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Location from :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">abc</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Location to :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">78</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Driver :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className=" bg-white Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Driver Mail :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2 bg-white">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Driver Phone :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">abc</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="Job_Details_title_divder"></div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row g-1">
                      <div className="col-6 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Vehicle Reg number :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">78</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 Job_Details_title_ul_color_3">
                    <div className="row g-1 ">
                      <div className="col-6  Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Driver Extra Hour :</li>
                        </ul>
                      </div>
                      <div className="col-6 Job_Details_title_ul_color_2">
                        <ul className="Job_Details_title_ul">
                          <li className="details">xyz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row">
                  <div className="col-12">
                    <div className="row g-1">
                      <div className="col-12 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Helper</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row g-2">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                    <div className="row g-1">
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title">Name</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">1. Driver</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">2. Mover</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                    <div className="row g-1">
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title">Mobile No.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">15569886432</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">5569886432</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                    <div className="row g-1">
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title">Email Id</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">rulen@gmail.com</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">rulen@gmail.com</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                    <div className="row g-1">
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title">Extra Hour</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">3</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-1">
                          <div className="col-12 Job_Details_title_ul_color_1">
                            <ul className="Job_Details_title_ul">
                              <li className="title title2">4</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row">
                  <div className="col-12">
                    <div className="row g-1">
                      <div className="col-12 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Extra Surcharge Items</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="  Job_Details_title_main_div Job_Details_title_main_div2">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="col-12 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Title</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="col-12 Job_Details_title_ul_color_1">
                        <ul className="Job_Details_title_ul">
                          <li className="title">Amount</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Total Hour Charge</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">180</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Total Charge</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">180</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">GST %</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Discount</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Booking Amount</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Surcharge Total</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div className="Job_Details_totle_text">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="inner_title">Final Total Charge</div>
                  </div>
                  <div className="col-6">
                    <div className="row g-1">
                      <div className="inner_title">180</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-6">
              <DarkBlueBtn icon={<AiOutlinePrinter />} title="Print" />
            </div>
            <div className="col-6">
              <OutlineBtn onClick={props.onHide} title="Close" />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
