import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import TabNavigation from "../../../components/TabNavigation";
import * as storeActions from "../../../store/action-creator";


const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const KeySkill = (props) =>{
  const [keySkill, setKeySkill] = useState("");


  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );setKeySkill
  };



  return (
    <div>
      <Typography
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "40px" }}
      >
        Key Skill
      </Typography>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          boxShadow: "none",
        }}
        component="ul"
      >
        {props.chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data.label}
                onDelete={()=> props.handleSkillDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>

      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item md={12} lg={12} style={{ marginTop: "55px" }}>
          <CustomInput
            label="Add Skill"
            name={"skill"}
            type="text"
            placeholder="Add your job related skills"
            value={keySkill}
            onchange={(e) => setKeySkill(e.target.value)}
          />
        </Grid>
        <Grid item md={12} lg={12} style={{ marginTop: "25px" }}>
          <Button
            variant="outlined"
            style={{ color: "#9f4545", borderColor: "#9f4545" }}
            onClick={()=> {
              props.addSkillHandler(keySkill)
              setKeySkill('')
            }}
          >
            Add More Skills...
          </Button>
        </Grid>
      </Grid>
      <TabNavigation showPreview tabBackIndex={2} />
    </div>
  );
}

const mapstatetoProps= (state) =>{
  return{
    keySkill: state.keySkill,
    chipData: state.chipData
  }

}

const mapdispatchtoProps= (dispatch) =>{
return{
  addSkillHandler: (e) =>{
    dispatch(storeActions.addSkillHandler(e))
  },
  handleSkillDelete: (data) =>{
    dispatch(storeActions.handleSkillDelete(data))
  }

}
}

export default connect(mapstatetoProps, mapdispatchtoProps)(KeySkill)