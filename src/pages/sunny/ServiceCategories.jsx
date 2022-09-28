import { ActionStrip } from "../../components/common/actionStrip/ActionStrip";
import { BsPlusLg } from "react-icons/bs";
import {
  OutlineBtn,
  OutlineLinkBtn,
  BlueBtn,
  BlueLinkBtn,
} from "../../components/common/btn/Btn";
export const ServiceCategories = () => {
  return (
    <>
      <div className="custom_container">
        <h1>ServiceCategories</h1>
        <div className="row g-4">
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
        </div>
      </div>
    </>
  );
};
