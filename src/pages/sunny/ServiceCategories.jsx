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
        <ActionStrip title="dfjfvbd" icon={<BsPlusLg />} />
        <OutlineBtn title="dfjfvbd" icon={<BsPlusLg />} />
        <OutlineLinkBtn title="dfjfvbd" icon={<BsPlusLg />} link="/" />
        <BlueBtn title="Excel" icon={<BsPlusLg />} />
        <BlueLinkBtn title="Excel" icon={<BsPlusLg />} link="/" />
      </div>
    </>
  );
};
