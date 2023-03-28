import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React from "react";
import { connect } from "react-redux";
import { capitalize } from "./TemplateOne";
q

const Item = ({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

const TemplateFour = (props) => {
  return (
    <Container 
      maxWidth="md lg"
      style={{ border: "2px solid black", height: "auto", maxWidth: "700px" }}
    >
      <Grid item md={12} lg={12}>
        <div
          style={{
            textAlign: "center",
            border: "2px solid black",
            position: "absolute",
            margin: "46px 109px",
            padding: "21px 83px",
          }}
        >
          <h3
            style={{
              fontSize: "27px",
              marginBottom: "10px",
              marginTop: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.2rem",
              wordSpacing: "0.2rem",
            }}
          >
            {(props.first_name) + " " + (props.last_name)}
          </h3>
          <span style={{ fontSize: "20px", color: "#626161" ,textTransform: 'capitalize' }}>
           {props.exp !== 'f' ? currentDesignation(props.user_experience): null}
          </span>
        </div>
        <Grid container spacing={2}>
          <Grid
            item
            lg={5}
            md={5}
            style={{
              backgroundColor: "#f4f4f4",
              marginTop: "28px",
              color: "#212121",
              textAlign: "justify",
              paddingLeft: "47px",
            }}
          >
            <div style={{ paddingTop: "145px" }}>
              <h3
                style={{ letterSpacing: "0.2rem", textTransform: "uppercase" }}
              >
                details
              </h3>
              <Divider
                style={{
                  width: "178px",
                  borderWidth: "2px",
                  backgroundColor: "black",
                  marginTop: "-11px",
                  marginBottom: "21px",
                }}
              />
              <span>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Address
                </h4>
                <p>
                  {capitalize(props.address) + props.address != '' ? ', ' : null }
                 { props.pin_code != '' ? props.pin_code : null }
                </p>
                <p>
                  {capitalize(props.region) + ' , ' + (props.country)}
                </p>
              </span>
              <span>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Contact Number
                </h4>
                <p>
                {props.mobile_number}
                </p>
              </span>
              <span>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Email id
                </h4>
                <p>
                  {props.email}
                </p>
              </span>
            </div>
            <div style={{ paddingTop: "25px" }}>
              <h3
                style={{ letterSpacing: "0.2rem", textTransform: "uppercase" }}
              >
                skills
              </h3>
              <Divider
                style={{
                  width: "178px",
                  borderWidth: "2px",
                  backgroundColor: "black",
                  marginTop: "-11px",
                  marginBottom: "21px",
                }}
              />
              {props.chipData.map((data) => (
                <ul>
                  <li>{capitalize(data.key)}</li>
                </ul>
              ))}
            </div>
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            style={{ position: "relative", paddingTop: "185px" }}
          >
            <div>
              <h3
                style={{ letterSpacing: "0.2rem", textTransform: "uppercase" }}
              >
                profile
              </h3>
              <Divider
                style={{
                  width: "178px",
                  borderWidth: "2px",
                  backgroundColor: "black",
                  marginTop: "-11px",
                  marginBottom: "21px",
                }}
              />
              <p style={{ textAlign: "justify" }}>
                {capitalize(props.description)}
              </p>
            </div>
            <div>
              <h3
                style={{ letterSpacing: "0.2rem", textTransform: "uppercase" }}
              >
                work experience
              </h3>
              <Divider
                style={{
                  width: "297px",
                  borderWidth: "2px",
                  backgroundColor: "black",
                  marginTop: "-11px",
                  marginBottom: "21px",
                }}
              />
              {props.exp === 'f'? (
                <div>
                  <p> 
                 I have no work experience. I am coming here to get experience with your guidance and support. I have a ability to cope with different situations.
                 
                  </p>
                </div>
              ) : <div>
              {props.user_experience.map((exp,i) =>(
                <div>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  {exp.job_title}
                </h4>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  {(exp.org_name) + ' | ' + (exp.start_year)+ ' - ' + (exp.end_year)}
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
              <h3
                style={{ letterSpacing: "0.2rem", textTransform: "uppercase" }}
              >
                education
              </h3>
              <Divider
                style={{
                  width: "178px",
                  borderWidth: "2px",
                  backgroundColor: "black",
                  marginTop: "-11px",
                  marginBottom: "21px",
                }}
              />
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "16px",
                  letterSpacing: "0.2rem",
                }}
              >
                {(props.university_name) + ' | ' + (props.start_year) + ' - ' + (props.end_year)}
              </h4>
              <p>
              {props.degree}
              </p>
              <p>
              I had completed {capitalize(props.qualification)} with the {props.marks} % of marks.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
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

export default connect(mapstatetoProps, null)(TemplateFour);

