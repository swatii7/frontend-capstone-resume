import * as React from "react";
import { styled } from "@mui/material/styles";
import Button  from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)"
  }
}));

export default function TabNavigation() {
  return (
    <Stack spacing={2} direction="row" style={{justifyContent: "end", marginTop: "43px"}}>
      <Button variant="text" style={{ color: "rgb(159, 69, 69)" }}>
        Back
      </Button>
      <ColorButton variant="contained">Next</ColorButton>
    </Stack>
  );
}