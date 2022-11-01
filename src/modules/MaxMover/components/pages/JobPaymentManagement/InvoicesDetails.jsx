import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { BlueBtn, DarkBlueLinkBtn } from "../../../../../common/btn/Btn";
import { SelectBox } from "../../../../../common/InputField/Form";
import { FiArrowLeft } from "react-icons/fi";
export const InvoicesDetails = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <div className="row">
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8">
                  <div className="user_managemen_top_title">
                    <InnerPagesTopTitle name="Inquiry Management" />
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                  <DarkBlueLinkBtn
                    icon={<FiArrowLeft />}
                    link={-1}
                    title="back"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <PageTopBtn />
            </div>
            <div className="col-12">
              <Tabel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PageTopBtn = () => {
  const PaymentPending = [
    {
      value: "Payment Hold",
      label: "Payment Hold",
    },
    {
      value: "Payment Received",
      label: "Payment Received",
    },
  ];
  return (
    <>
      <div className="row g-3">
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <SelectBox data={PaymentPending} label="Payment Pending" />
            </div>
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
      </div>
    </>
  );
};
const Tabel = () => {
  const ProductTabelListApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.ID}</td>
          <td className="invoices_details_tabel_td_text_td_top">
            <div className="invoices_details_tabel_td_text">
              <h3>{props.ItemTitle}</h3>
              <p>{props.ItemText}</p>
            </div>
          </td>
          <td>{props.Hours}</td>
          <td>{props.HourRates}</td>
          <td>{props.TotalCharges}</td>
        </tr>
      </>
    );
  };
  const ProductTabelListData = [
    {
      ID: "1",
      ItemTitle: "House removals",
      ItemText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vitae qtium commodo et consectetur ac. Interdum diam, volutpat elementum fermentum, egestas. Risus, ut porta adipiscing turpis. ",
      Hours: "4",
      HourRates: "120 $",
      TotalCharges: "480 $",
    },
    {
      ID: "2",
      ItemTitle: "Piano removal",
      ItemText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vitae qtium commodo et consectetur ac. Interdum diam, volutpat elementum fermentum, egestas. Risus, ut porta adipiscing turpis. ",
      Hours: "4",
      HourRates: "120 $",
      TotalCharges: "480 $",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12 invoices_details_tabel_div_col">
          <div className="invoices_details_tabel_div">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vitae
              quam neque pretium commodo et consectetur ac. Interdum diam,
              volutpat elementum fermentum, egestas. Risus, ut porta adipiscing
              turpis.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="invoices_details_tabel_date">
            <hr className="hr_top" />
            <p>Invoice Date :- 20-02-2022 11:12:34</p>
            <hr className=" w-100" />
          </div>
        </div>
        <div className="col-12">
          <div className="invoices_details_tabel_title_main_div">
            <h3>Bill to :</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="col-12">
          <table className="table nvoices_details_tabel_MyTabel_top_div text-capitalize">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Item</th>
                <th scope="col">Hours</th>
                <th scope="col">Hour Rates</th>
                <th scope="col">Total Charges</th>
              </tr>
            </thead>
            <tbody>
              {ProductTabelListData.map((val, i) => {
                return <ProductTabelListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="col-12">
          <ul className="invoices_details_ul">
            <li>
              <p>
                Sub-total : <span>680 $</span>
              </p>
            </li>
            <li>
              <p>
                Discount(10%) : <span>68 $</span>
              </p>
            </li>
            <li>
              <p>
                GST : <span>12 $</span>
              </p>
            </li>
          </ul>
          <ul className="invoices_details_ul">
            <li>
              <p>
                Total : <span>680 $</span>
              </p>
            </li>
            <li>
              <p>
                Advance booking Amount : <span>68 $</span>
              </p>
            </li>
          </ul>
          <ul className="invoices_details_ul">
            <li>
              <p>
                Net Payable Amount : <span>680 $</span>
              </p>
            </li>
            <li className=" mt-3">
              <p>Payment received by cash and due amount is zero.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
