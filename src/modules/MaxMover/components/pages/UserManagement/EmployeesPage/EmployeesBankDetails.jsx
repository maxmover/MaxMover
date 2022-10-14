import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../../common/actionStrip/ActionStrip";
import { SideLabelInput } from "../../../../../../common/InputField/Form";
import { BlueBtn, OutlineLinkBtn } from "../../../../../../common/btn/Btn";
export const EmployeesBankDetails = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="User Management" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <ActionStrip title="Bank Account Details" />
            </div>
            <div className="col-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Form = () => {
  const FormData = [
    {
      type: "text",
      label: "Account Number",
    },
    {
      type: "text",
      label: "Account Holder Name",
    },
    {
      type: "text",
      label: "Bank Name",
    },
    {
      type: "text",
      label: "Bank Location",
    },
  ];
  const FormApp = (props) => {
    return (
      <div className="col-12  bank_details_input_main_div">
        <div className="bank_details_input_div">
          <SideLabelInput type={props.type} label={props.label} />
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {FormData.map((val, i) => {
          return <FormApp key={i} {...val} />;
        })}
        <div className="col-12">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <BlueBtn title="Submit" />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <OutlineLinkBtn title="Back" link={-1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
