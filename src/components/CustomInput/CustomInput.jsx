import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "80% !important",
    "@media(max-width: 600px)": {
      width: "100% !important",
    },

    "& .MuiInputLabel-root": {
      fontSize: "22px",
    },
    "& .MuiInputLabel-root.MuiInputLabel-formControl.Mui-focused": {
      color: "#00000099 !important",
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    color: "#00000099",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      border: "1px solid #ced4da",
      color: "#00000099",
    },
  },

  label: {
    color: "#00000099",
  },
}));

export default function CustomInput(props) {
  const classes = useStyles();

  return (
    <>
      {props.label == "" ? (
        <BootstrapInput
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onchange}
          multiline={props.multiline}
          minRows={props.minRows}
          maxRows={props.maxRows}
        />
      ) : (
        <FormControl variant="standard" className={classes.root}>
          {props.label !== "" && (
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.label}
            >
              {props.label}
            </InputLabel>
          )}
          <BootstrapInput
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onchange}
            multiline={props.multiline}
            minRows={props.minRows}
            maxRows={props.maxRows}
          />
        </FormControl>
      )}
    </>
  );
}
