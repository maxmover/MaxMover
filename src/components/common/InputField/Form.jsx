import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const FormPropsTextFields = () => {
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
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          size="small"
        />
        {/* Toggle */}
        <div className="d-flex align-items-center">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            size="small"
            // endAdornment={
            //   <FormPropsTextFields
            //     endAdornment={
            //       <FormPropsTextFields position="end">
            //         <BsPlusLg />
            //       </FormPropsTextFields>
            //     }
            //   />
            // }
          />
          <Box component="span" sx={{ ml: -7 }}>
            <SwitchesSize />
          </Box>
        </div>
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </div>
    </Box>
  );
};

// Select DropDown

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const SelectTextFields = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          size="small"
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};

export const SelectLabels = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
