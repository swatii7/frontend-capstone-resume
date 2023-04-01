import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CustomCheckbox(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: "#212121",
              "&.Mui-checked": {
                color: "#9f4545",
              },
            }}
            checked={props.checked}
            onChange={props.onChange}
            name={props.name}
            id={props.id}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}
