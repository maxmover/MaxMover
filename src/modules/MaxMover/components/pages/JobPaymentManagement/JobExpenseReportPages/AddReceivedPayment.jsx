import { InnerPagesTopTitle } from "../../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../../common/actionStrip/ActionStrip";
import {
  SelectBox,
  InputBox,
  TextAreaBox,
} from "../../../../../../common/InputField/Form";
import { BlueBtn, OutlineLinkBtn } from "../../../../../../common/btn/Btn";

export const AddReceivedPayment = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Account Management" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <ActionStrip title="Add received payments for Employee & Sub-contractor" />
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
  const Selectemployee = [
    {
      value: "- Driver 1",
      label: "- Driver 1",
    },
    {
      value: "- Driver 2",
      label: "- Driver 2",
    },
    {
      value: "- Sub-contractor",
      label: "- Sub-contractor",
    },
    {
      value: "- Sub-contractor 2",
      label: "- Sub-contractor 2",
    },
  ];
  const SelectSubContractor = [
    {
      value: "- Sub-contractor Driver 1",
      label: "- Sub-contractor Driver 1",
    },
    {
      value: "- Sub-contractor 3",
      label: "- Sub-contractor 3",
    },
    {
      value: "- Sub-contractor",
      label: "- Sub-contractor",
    },
    {
      value: "- Sub-contractor 2",
      label: "- Sub-contractor 2",
    },
  ];
  const SelectType = [
    {
      value: "- Pay & Expense & Cash delivered by employee",
      label: "- Pay & Expense & Cash delivered by employee",
    },
    {
      value: "- Payment made to employee",
      label: "- Payment made to employee",
    },
  ];
  const SelectType2 = [
    {
      value: "- Pay & Expense & Cash delivered by Sub-contractor",
      label: "- Pay & Expense & Cash delivered by Sub-contractor",
    },
    {
      value: "- Payment made to Sub-contractor",
      label: "- Payment made to Sub-contractor",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="add_received_payment_form_title">
            <p>Add received payment for Employee</p>
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <SelectBox data={Selectemployee} label="Select employee *" />
            </div>
            <div className="col-12">
              <SelectBox data={SelectType} label="Select type *" />
            </div>
            <div className="col-12">
              <InputBox type="number" label="Enter amount" required />
            </div>
            <div className="col-12">
              <TextAreaBox multiline rows={"3"} label="Remark " required />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="add_received_payment_form_title">
            <p>Add received payment for Sub-contractor</p>
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <SelectBox
                data={SelectSubContractor}
                label="Select sub-contractor *"
              />
            </div>
            <div className="col-12">
              <SelectBox data={SelectType2} label="Select type *" />
            </div>
            <div className="col-12">
              <InputBox type="number" label="Enter amount" required />
            </div>
            <div className="col-12">
              <TextAreaBox multiline rows={"3"} label="Remark " required />
            </div>
          </div>
        </div>

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
