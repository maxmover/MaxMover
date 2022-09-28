import { ActionStrip } from "../../components/common/actionStrip/ActionStrip";
import { BsPlusLg } from "react-icons/bs";
import { OutlineBtn, OutlineLinkBtn } from "../../components/common/btn/Btn";
export const ServiceCategories = () => {
  return (
    <>
      <div className="custom_container">
        <h1>ServiceCategories</h1>
        <ActionStrip title="dfjfvbd" icon={<BsPlusLg />} />
        <OutlineBtn title="dfjfvbd" icon={<BsPlusLg />} />
        <OutlineLinkBtn title="dfjfvbd" icon={<BsPlusLg />} link="/" />
      </div>
    </>
  );
};
