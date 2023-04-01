import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React from "react";
import { connect } from "react-redux";
import { currentDesignation } from "../../variables/common";
import { capitalize, getFirstChar } from "./TemplateOne";

const TemplateTwo = (props) => {
  return (
    <Container style={{ margin: "83px auto" }}>
      <Box
        sx={{ width: "1000px", height: "auto", border: "2px solid #e4e0e0" }}
      >
        {/* <Container> */}
        <Box
          sx={{ flexGrow: 1 }}
          style={{ backgroundColor: "rgb(155, 83, 111)", color: "#fff" }}
        >
          <Grid
            container
            style={{
              height: "16vh",
              letterSpacing: "0.1rem",
              alignItems: "center",
            }}
          >
            <Grid item md={2} lg={2}>
              <div
                style={{
                  backgroundColor: "#fff",
                  height: "100px",
                  width: "101px",
                  borderRadius: "50%",
                  color: "#9b536f",
                  margin: "0px auto",
                  padding: "10px",
                }}
              >
                <p
                  className="head-section"
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    textAlign: "center",
                    position: "relative",
                    top: "50px",
                  }}
                >
                  {props.first_name === ""
                    ? "N/"
                    : getFirstChar(props.first_name)}
                  {props.last_name === "" ? "A" : getFirstChar(props.last_name)}
                </p>
              </div>
            </Grid>
            <Grid item md={6} lg={6}>
              <div style={{ fontSize: "22px" }}>
                <h3 style={{ margin: "0px 15px", fontSize: "44px" }}>
                  {capitalize(props.first_name) +
                    " " +
                    capitalize(props.last_name)}
                </h3>
                <span
                  style={{
                    margin: "10px 15px",
                    fontSize: "25px",
                    textTransform: "capitalize",
                  }}
                >
                  {props.exp !== "f"
                    ? currentDesignation(props.user_experience)
                    : null}
                </span>
              </div>
            </Grid>
            <Grid item md={4} lg={4}>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                <p className="head-section" style={{ paddingTop: "11px" }}>
                  {props.address != ""
                    ? capitalize(props.address) + ", "
                    : props.address}
                  {props.pin_code != "" ? props.pin_code : null}
                </p>
                <p className="head-section" style={{ paddingTop: "21px" }}>
                  {props.region != "" ? capitalize(props.region) + "," : null}
                  {props.country != "" ? capitalize(props.country) : null}
                </p>
                <p className="head-section" style={{ paddingTop: "24px" }}>
                  {props.mobile_number}
                </p>
                <p className="head-section" style={{ paddingTop: "24px" }}>
                  {props.email}
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item md={12} lg={12}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {props.exp === "e" && (
                  <p
                    style={{
                      letterSpacing: "0.1rem",
                      wordSpacing: "0.1rem",
                      marginLeft: "0px",
                      marginTop: "0px",
                      padding: "8px 40px",
                      textAlign: "justify",
                    }}
                  >
                    {capitalize(props.description)}
                  </p>
                )}
              </div>
            </Grid>
          </Grid>
        </Box>

        <div>
          <h2
            style={{
              color: "#9b536f",
              letterSpacing: "0.1rem",
              wordSpacing: "0.1rem",
              marginBottom: "0px",
            }}
          >
            Professional Experience
          </h2>
          <Divider
            style={{
              borderWidth: "3px",
              backgroundColor: "#9b536f",
              opacity: "0.9",
            }}
          />
          {props.exp === "f" ? (
            <div>
              <p
                style={{
                  letterSpacing: "0.1rem",
                  wordSpacing: "0.1rem",
                  paddingLeft: "25px",
                }}
              >
                I have no work experience. I am coming here to get experience
                with your guidance and support. I have a ability to cope with
                different situations.
              </p>
            </div>
          ) : (
            props.user_experience.map((exp, i) => (
              <Grid container spacing={2} style={{ padding: "0px 26px" }}>
                <Grid item md={5} lg={5}>
                  <div style={{ marginTop: "22px" }}>
                    <span style={{ fontSize: "20px", fontWeight: 600 }}>
                      {exp.start_year != ""
                        ? exp.start_year + "-"
                        : exp.start_year}
                      {exp.end_year != "" ? exp.end_year : null}
                    </span>
                  </div>
                </Grid>
                <Grid item md={7} lg={7}>
                  <div>
                    <h3 style={{ marginBottom: "6px", fontSize: "22px" }}>
                      {capitalize(exp.job_title)}
                    </h3>
                    <span style={{ fontSize: "20px", fontWeight: 600 }}>
                      {capitalize(exp.org_name)}
                    </span>

                    {exp.key_points.map((points, index) => (
                      <ul>
                        <li>
                          <Typography>{capitalize(points)}</Typography>
                        </li>
                      </ul>
                    ))}
                  </div>
                </Grid>
              </Grid>
            ))
          )}
        </div>

        <div style={{ padding: "0px 16px" }}>
          <div>
            <h2
              style={{
                color: "#9b536f",
                letterSpacing: "0.1rem",
                wordSpacing: "0.1rem",
                marginBottom: "0px",
              }}
            >
              Education
            </h2>
            <Divider
              style={{
                borderWidth: "3px",
                backgroundColor: "#9b536f",
                opacity: "0.9",
              }}
            />
          </div>
          <Grid container spacing={2}>
            <Grid item md={5} lg={5}>
              <div style={{ marginTop: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: 600 }}>
                  {props.start_year != ""
                    ? props.start_year + "-"
                    : props.start_year}
                  {props.end_year != "" ? props.end_year : null}
                </span>
              </div>
            </Grid>
            <Grid item md={7} lg={7}>
              <div>
                <h3 style={{ marginBottom: "6px", fontSize: "22px" }}>
                  {capitalize(props.degree)}
                </h3>
                <span style={{ fontSize: "18px", fontWeight: 400 }}>
                  {capitalize(props.university_name)}
                </span>
                <ul>
                  <li>
                    <Typography>
                      I have completed {capitalize(props.qualification)} with
                      the {props.marks} % of marks
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: "0px 16px" }}>
          <Grid container spacing={2}>
            <Grid item md={12} lg={12}>
              <div>
                <h2
                  style={{
                    color: "#9b536f",
                    letterSpacing: "0.1rem",
                    wordSpacing: "0.1rem",
                    marginBottom: "0px",
                  }}
                >
                  Key SKills
                </h2>
                <Divider
                  style={{
                    borderWidth: "3px",
                    backgroundColor: "#9b536f",
                    opacity: "0.9",
                  }}
                />

                {props.chipData.map((data) => (
                  <ul>
                    <li>
                      <Typography>{capitalize(data.key)}</Typography>
                    </li>
                  </ul>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
        {/* </Container> */}
      </Box>
      <div></div>
    </Container>
  );
};
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
  chipData: state.chipData,
});


export default connect(mapstatetoProps, null)(TemplateTwo);
