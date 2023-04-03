import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { connect } from "react-redux";
import * as storeActions from "../store/action-creator";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));

const TabNavigation = (props) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



  return (
    <Stack
      spacing={2}
      direction="row"
      style={{ justifyContent: "end", marginTop: "43px" }}
    >

      {props.disableBack ? null : (
        <Button
          variant="text"
          onClick={() => {
            props.tabBackHandler(props.tabBackIndex);
          }}
          style={{ color: "rgb(159, 69, 69)" }}
        >
          Back
        </Button>
      )}
      {props.showPreview ? (
        <ColorButton
          type={"submit"}
          variant="contained"
          onClick={() => {
            props.tabChangeHandler(props.tabIndex);
          }}
        >
          Preview
        </ColorButton>
      ) : (
        <ColorButton
          type={"submit"}
          variant="contained"
          onClick={() => {
            props.tabChangeHandler(props.tabIndex);
          }}
        >
          Next
        </ColorButton>
      )}
    </Stack>
  );
};

const mapstatetoProps = (state) => {
  return {
    activeTab: state.activeTab,
    first_name: state.first_name,
    last_name: state.last_name,
    email: state.email,
    mobile_number: state.mobile_number,
    checked: state.checked,
    gender: state.gender,
    marital_status: state.marital_status,
    address: state.address,
    country: state.country,
    region: state.region,
    pin_code: state.pin_code,
    description: state.description,
  };
};

const mapdispatchtoProps = (dispatch) => {
  return {
    tabChangeHandler: (value) => {
      dispatch(storeActions.tabChangeHandler(value));
    },
    tabBackHandler: (value) => {
      dispatch(storeActions.tabBackIndex(value));
    },
  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(TabNavigation);
