import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { ActionStrip } from "../../../../../common/actionStrip/ActionStrip";
import { SelectBox } from "../../../../../common/InputField/Form";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlineLinkBtn, BlueBtn } from "../../../../../common/btn/Btn";

export const SendSms = () => {
  const SelectTemplates = [
    {
      value: "Sunny Charkhwal",
      label: "Sunny Charkhwal",
    },
    {
      value: "kamal Dixit",
      label: "kamal Dixit",
    },
  ];
  const SelectCustomerType = [
    {
      value: "Sunny Charkhwal",
      label: "Sunny Charkhwal",
    },
    {
      value: "kamal Dixit",
      label: "kamal Dixit",
    },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="inner_custom_container">
          <div className="user_managemen_top_title">
            <InnerPagesTopTitle name="SMS Management" />
          </div>
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <ActionStrip title="send SMS" />
            </div>
            <div className="col-12">
              <SelectBox
                data={SelectTemplates}
                label="Select Templates"
                required
              />
            </div>
            <div className="col-12">
              <SelectBox
                data={SelectCustomerType}
                label="Select Customer Types"
                required
              />
            </div>
            <div className="col-12">
              <MultipleSelectNative />
            </div>
            <div className="col-12">
              <Btn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MultipleSelectNative = () => {
  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  return (
    <>
      <div>
        <FormControl className="native_sel">
          <InputLabel shrink htmlFor="select-multiple-native">
            Select Customer
          </InputLabel>
          <Select
            multiple
            native
            value={personName}
            // @ts-ignore Typings are not considering `native`
            onChange={handleChangeMultiple}
            label="Select Customer"
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};
export const Btn = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
              <BlueBtn title="Send" />
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
