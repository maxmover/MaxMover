import { ActionStrip } from "../../components/common/actionStrip/ActionStrip";
import { BsPlusLg } from "react-icons/bs";
import {
  OutlineBtn,
  OutlineLinkBtn,
  BlueBtn,
  BlueLinkBtn,
} from "../../components/common/btn/Btn";
import { MyTabel } from "./MyTabel";
import {
  SelectBox,
  InputBox,
  TextAreaBox,
  InputBoxWithSwitch,
} from "../../components/common/InputField/Form";

export const ServiceCategories = () => {
  const currencies = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];
  return (
    <>
      <div className="custom_container">
        <h1>ServiceCategories</h1>

        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <ActionStrip title="dfjfgnbkjgnjbgjnvbd" icon={<BsPlusLg />} />
          </div>
          <div className="col-12">
            <OutlineBtn title="dfjfvbd" icon={<BsPlusLg />} />
          </div>
          <div className="col-12">
            <OutlineLinkBtn title="dfjfvbd" icon={<BsPlusLg />} link="/" />
          </div>
          <div className="col-12">
            <BlueBtn title="Excel" icon={<BsPlusLg />} />
          </div>
          <div className="col-12">
            <BlueLinkBtn title="Excel" icon={<BsPlusLg />} link="/" />
          </div>
          <div className="col-12">
            <MyTabel />
            <div className="col-12 my-5">
              <InputBoxWithSwitch
                helperText="helperText"
                label="InputBoxWithSwitch"
              />
              <SelectBox
                data={currencies}
                label="text*"
                helperText="helperText"
              />
              <InputBox
                type="text"
                label="input"
                helperText="helperText"
                required
              />
              <TextAreaBox label="TextAreaBox" helperText="helperText" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
