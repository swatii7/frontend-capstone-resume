import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React from "react";
import { connect } from "react-redux";
import { currentDesignation } from "../../variables/common";

/* function is used to get first character  */
export const getFirstChar = (value) => {
  return value && typeof value === "string" && value !== ""
    ? value.charAt(0).toUpperCase()
    : value;
};

/* function is used to for capitlization */
export const capitalize = (value) => {
  return value && typeof value === "string" && value !== ""
    ? value.charAt(0).toUpperCase() + value.slice(1)
    : value;
};

const TemplateOne = (props) => {
  return (
    <Container>
      <Grid
        item
        md={12}
        lg={12}
        sx={{ width: "1000px", height: "auto", border: "2px solid #e4e0e0" }}
      >
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                backgroundColor: "#fff",
                height: "16vh",
                letterSpacing: "0.1rem",
                alignItems: "center",
              }}
            >
              <Grid item md={2} lg={2}>
                <div
                  style={{
                    backgroundColor: "rgb(97, 169, 218)",
                    border: "2px solid rgb(97, 169, 218)",
                    height: "100px",
                    width: "101px",
                    borderRadius: "50%",
                    color: "rgb(255, 255, 255)",
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
                      ? "N"
                      : getFirstChar(props.first_name)}
                    {props.last_name === ""
                      ? "/A"
                      : getFirstChar(props.last_name)}
                  </p>
                </div>
              </Grid>
              <Grid item md={6} lg={6}>
                <div style={{ fontSize: "22px", color: "#61a9da" }}>
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
                    {/* condition impose if user have no experience then below name of user nothing show but if experienced then current positin displayed */}
                    {props.exp !== "f"
                      ? currentDesignation(props.user_experience)
                      : null}
                  </span>
                </div>
              </Grid>
              <Grid item md={4} lg={4}>
                <div
                  style={{
                    color: "#61a9da",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                ><p>
                  <span className="head-section" style={{ paddingTop: "11px" }}>
                    {props.address != ""
                      ? capitalize(props.address) + ", "
                      : props.address}
                    {props.pin_code != "" ? props.pin_code : null}
                  </span><br />
                  <span className="head-section" style={{ paddingTop: "21px" }}>
                    {props.region != "" ? capitalize(props.region) + "," : null}
                    {props.country != "" ? capitalize(props.country) : null}
                  </span><br />
                  <span className="head-section" style={{ paddingTop: "24px" }}>
                    {props.mobile_number}{" "}
                  </span><br />
                  <span className="head-section" style={{ paddingTop: "24px" }}>
                    {props.email}
                  </span><br />
                  <span className="head-section" style={{ paddingTop: "24px" }}>
                    {capitalize(props.gender)}
                  </span><br />
                  <span className="head-section" style={{ paddingTop: "24px" }}>
                    {capitalize(props.marital_status)}
                  </span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Divider
            style={{
              borderWidth: "5px",
              backgroundColor: "rgb(97,169,218,0.85)",
              opacity: "0.9",
            }}
          />
          <div>
            <p
              style={{
                color: "rgb(62 138 190)",
                letterSpacing: "0.1rem",
                wordSpacing: "0.1rem",
              }}
            >
              {capitalize(props.description)}
            </p>
            <Divider
              style={{
                borderWidth: "5px",
                backgroundColor: "rgb(97,169,218,0.85)",
                opacity: "0.9",
              }}
            />
          </div>

          <Grid container spacing={2}>
            <Grid item md={5} lg={5}>
              <div>
                <h2
                  style={{
                    color: "rgb(62 138 190)",
                    letterSpacing: "0.1rem",
                    wordSpacing: "0.1rem",
                  }}
                >
                  Professional Experience
                </h2>
              </div>
            </Grid>
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
              <Grid item md={7} lg={7}>
                {/* map function to add another work experience */}
                {props.user_experience.map((exp, i) => (
                  <div>
                    <h3 style={{ marginBottom: "6px", fontSize: "22px" }}>
                      {capitalize(exp.job_title)}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: 600 }}>
                        {capitalize(exp.org_name)}
                      </span>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: 600,
                          paddingLeft: "204px",
                        }}
                      >
                        {exp.start_year != ""
                          ? exp.start_year + "-"
                          : exp.start_year}
                        {exp.end_year != "" ? exp.end_year : null}
                      </span>
                    </div>

                    {/* map function for adding key points in work experience tab */}
                    {exp.key_points.map((points, i) => (
                      <ul>
                        <li>
                          <Typography>{capitalize(points)}</Typography>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </Grid>
            )}
          </Grid>

          <Divider
            style={{
              borderWidth: "5px",
              backgroundColor: "rgb(97,169,218,0.85)",
              opacity: "0.9",
            }}
          />

          <div style={{ marginTop: "15px" }}>
            <Grid container spacing={2}>
              <Grid item md={5} lg={5}>
                <div>
                  <h2
                    style={{
                      color: "rgb(62 138 190)",
                      letterSpacing: "0.1rem",
                      wordSpacing: "0.1rem",
                    }}
                  >
                    Education
                  </h2>
                </div>
              </Grid>
              <Grid item md={7} lg={7}>
                <div>
                  <h3 style={{ marginBottom: "6px", fontSize: "22px" }}>
                    {capitalize(props.qualification)}
                  </h3>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ fontSize: "20px", fontWeight: 600 }}>
                      {capitalize(props.university_name)}
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: 600 }}>
                      {props.start_year != ""
                        ? props.start_year + "-"
                        : props.start_year}
                      {props.end_year != "" ? props.end_year : null}
                    </span>
                  </div>
                  <ul>
                    <li>
                      <Typography>
                        I had completed {capitalize(props.degree)} with the{" "}
                        {props.marks} % of marks.
                      </Typography>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider
            style={{
              borderWidth: "5px",
              backgroundColor: "rgb(97,169,218,0.85)",
              opacity: "0.9",
            }}
          />
          <div style={{ marginTop: "15px" }}>
            <Grid container spacing={2}>
              <Grid item md={12} lg={12}>
                <div>
                  <h2
                    style={{
                      color: "rgb(62 138 190)",
                      letterSpacing: "0.1rem",
                      wordSpacing: "0.1rem",
                    }}
                  >
                    Key SKills
                  </h2>
                  {/*  map function for add  key skills */}

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
        </Container>
      </Grid>
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

export default connect(mapstatetoProps, null)(TemplateOne);
