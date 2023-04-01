import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

export default function RadioGroups(props) {
  const radioOptions = props.options.map((x, id) => (
    <FormControlLabel
      key={id}
      style={{ color: "rgb(0 0 0 / 60%)" }}
      value={x.value}
      control={
        <Radio
          sx={{
            color: "rgb(0 0 0 / 60%)",
            "&.Mui-checked": {
              color: "#9f4545",
            },
          }}
        />
      }
      label={x.label}
    />
  ));
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        style={{ color: "rgb(0 0 0 / 60%)" }}
      >
        {props.label}
      </FormLabel>
      <RadioGroup
        value={props.selectedValue}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={props.name}
        onChange={props.onchange}
        disableripple="true"
      >
        {radioOptions}
      </RadioGroup>
    </FormControl>
  );
}
