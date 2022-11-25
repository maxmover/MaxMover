// const Test = () => {
//   return (
//     <>
//       <h1>kjfnjn</h1>
//     </>
//   );
// };
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsReply } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
const options = [
  { name: "Reply", icon: <BsReply /> },
  { name: "Forward", icon: <AiOutlineShareAlt /> },
  { name: "Copy", icon: <MdContentCopy /> },
  { name: "Delete", icon: <RiDeleteBinLine /> },
];

const ITEM_HEIGHT = 30;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="chat_option">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.name}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            <div className="chat_option_name_div">
              {option.name}
              <span className="icon">{option.icon}</span>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
