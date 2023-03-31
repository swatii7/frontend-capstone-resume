import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import { connect } from "react-redux";
import { capitalize } from "./TemplateOne";
import { currentDesignation } from "../../variables/common";

const Item = ({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

const TemplateThree = (props) => {

  return (
    <Container 
      maxWidth="md lg"
      style={{
        border: "2px solid black",
        height: "auto",
        maxWidth: "700px",
        paddingBottom: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={5}
            md={5}
            style={{
              backgroundColor: "#084d41",
              marginTop: "28px",
              color: "#fff",
              textAlign: "justify",
            }}
          >
            <div
              style={{
                paddingTop: "35px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "25px", letterSpacing: "0.2rem" }}>
                {(props.first_name) + " " + (props.last_name)}
              </h3>
              <span
                style={{
                  letterSpacing: "0.2rem",
                  fontSize: "20px",
                  color: "#d4cece",
                  textTransform:' capitalize'
                }}
              >
                {props.exp !== 'f' ? currentDesignation(props.user_experience): null}

              </span>
            </div>
            <div style={{ paddingTop: "50px" }}>
              <h2 style={{ fontSize: "22px", letterSpacing: "0.2rem" }}>
                Details
              </h2>
              <p>
              { props.address != '' ? capitalize(props.address) + ', ' : props.address }
                    { props.pin_code != '' ? props.pin_code : null }
              </p>
              <p>
              { props.region != ''? capitalize(props.region) + ',': null}
                  {props.country != ''? capitalize(props.country): null} 
              </p>
              <p>
                {props.mobile_number}
              </p>
              <p>
              {props.email}
                </p>
            </div>
            <div>
            <h2 style={{ fontSize: "22px", letterSpacing: "0.2rem", paddingTop: '66px' }}>
                Skills
              </h2>
              {props.chipData.map((data) =>(
                <ul>
                <li>
                  <Typography>
                    {capitalize(data.key)}
                  </Typography>
                </li>
                
              </ul>
              ))}
             
            </div>
          </Grid>
          <Grid item lg={7} md={7} style={{ marginTop: "28px" }}>
            <div>
              <h2>Profile</h2>
              <p style={{ textAlign: "justify" }}>
               {capitalize(props.description)}
              </p>
            </div>
            <div>
              <h2>Work Experience</h2>
              {props.exp === 'f'? (
                <div>
                  <p> 
                 I have no work experience. I am coming here to get experience with your guidance and support. I have a ability to cope with different situations.
                 
                  </p>
                </div>
              ) : <div>
              {props.user_experience.map((exp,i) =>(
                <div>
                <h4>
                  {capitalize(exp.job_title)}
                </h4>
                <h4>

              {exp.org_name != ""? capitalize(exp.org_name) + ' | ' :  exp.org_name}
              {exp.start_year != ''? exp.start_year + ' - ' : exp.start_year}
              {exp.end_year != '' ? exp.end_year : null}
                  {/* {capitalize(exp.org_name) + ' | ' + (exp.start_year)+ ' - ' + (exp.end_year)} */}
                </h4>
                {exp.key_points.map((points,i)=> (
                  <ul>
                  <li>
                    <Typography>
                      {capitalize(points)}
                    </Typography>
                  </li>
                 
                </ul>
                ))}
                  
                </div>
              ))}
                
              </div>
              }
            </div>
            <div>
              <h2>Education</h2>
              <h3>
              {props.university_name != ""? capitalize(props.university_name) + ' | ' :  props.university_name}
              {props.start_year != ''? props.start_year + ' - ' : props.start_year}
              {props.end_year != '' ? props.end_year : null}
               </h3>
              <p>
                {capitalize(props.degree)}
              </p>
              <p>
                I had completed {capitalize(props.qualification)} with the {props.marks} % of marks.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const mapstatetoProps = (state) => ({
  amount: state.amount,
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
    exp: state.exp,
  user_experience: state.user_experience,
  qualification: state.qualification,
  university_name: state.university_name,
  degree: state.degree,
  marks: state.marks,
  start_year: state.start_year,
  end_year: state.end_year,
  chipData:state.chipData,
});

const mapdispatchtoProps = () => {};

export default connect(mapstatetoProps, null)(TemplateThree);
