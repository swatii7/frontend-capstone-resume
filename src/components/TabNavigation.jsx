import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import * as storeActions from "../store/action-creator";
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));

const TabNavigation = (props) => {

  const Alert = React.forwardRef(function Alert(
    props,
    ref,  
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  
    const [open, setOpen] = React.useState(false);
    // const [alertMessage, setAlertMessage]= useState()
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


  // const nextTabHandler= (tabIndex) =>{
  //   console.log(tabIndex)
  //   if(state.first_name === ""){
  //     setAlertMessage('First name is required')
  //   }
    

  // }

  return (

    <Stack
      spacing={2}
      direction="row"
      style={{ justifyContent: "end", marginTop: "43px" }}
    >
    {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {alertMessage}
        </Alert>
      </Snackbar> */}
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
    description : state.description
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
