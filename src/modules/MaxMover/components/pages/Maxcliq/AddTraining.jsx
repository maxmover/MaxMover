import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import { OutlineLinkBtn, BlueBtn } from "../../../../../common/btn/Btn";

import { SelectBox, InputBox } from "../../../../../common/InputField/Form";

export const AddTraining = () => {
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="Max CLiq" />
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <ActionStrip title="Add new training session" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Form = () => {
  const Designation = [
    {
      value: "Drivers",
      label: "Drivers",
    },
    {
      value: "Movers",
      label: "Movers",
    },
    {
      value: "Choose employee",
      label: "Choose employee",
    },
  ];
  const Status = [
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Gurugram",
      label: "Gurugram",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Employee Id" type="email" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <SelectBox data={Designation} label="Designation" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox
            InputLabelProps={{ shrink: true }}
            label="Start date"
            type="date"
            required
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox
            InputLabelProps={{ shrink: true }}
            label="end date"
            type="date"
            required
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox label="Timing" type="text" required />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <SelectBox data={Status} label="Status" required />
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
