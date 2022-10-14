import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

import { useNavigate } from "react-router-dom";
// Date Picker
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

// Select DropDown

//
export const SelectBox = (props) => {
  const navigate = useNavigate();

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      sx={{ width: 1 }}
      autoComplete="off"
      id="outlined-select-currency"
      select
      size="small"
      onChange={handleChange}
      helperText={props.helperText}
      label={props.label}
      value={currency}
    >
      {props.data.map((option) => (
        <MenuItem
          onClick={() => {
            if (option.url) navigate(option.url);
          }}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export const InputBox = (props) => {
  return <TextField sx={{ width: 1 }} size="small" {...props} />;
};
export const TextAreaBox = (props) => {
  return (
    <TextField
      sx={{ width: 1 }}
      size="small"
      id="outlined-textarea"
      multiline
      {...props}
    />
  );
};
export const InputBoxWithSwitch = (props) => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const SwitchesSize = () => {
    return (
      <div>
        <Switch {...label} defaultChecked size="small" />
      </div>
    );
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* Toggle */}
        <div className="input_box_with_switch_div">
          <TextField id="outlined-required" size="small" {...props} />
          <Box className="input_box_with_switch_div_Switch" component="span">
            <SwitchesSize />
          </Box>
        </div>
      </div>
    </Box>
  );
};
export const SideLabelInput = (props) => {
  return (
    <>
      <div className="Customer_date_div">
        <label>{props.label}</label>
        <InputBox type={props.type} />
      </div>
    </>
  );
};

export const DatepickerMui = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack>
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
