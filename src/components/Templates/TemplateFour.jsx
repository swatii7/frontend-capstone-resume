import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React from "react";

const Item = ({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

export default function TemplateFour() {
  return (
    <Container
      maxWidth="md lg"
      style={{ border: "2px solid black", height: "auto", width: "96vh" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <div
          style={{
            textAlign: "center",
            border: "2px solid black",
            position: "absolute",
            margin: "46px 273px",
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
            swati chaudhary
          </h3>
          <span style={{ fontSize: "20px", color: "#626161" }}>
            Web Developer
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
                <p>123, AnyWhere, AnyCity</p>
                <p>PinCode</p>
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
                <p>8346-123-456</p>
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
                <p>xyz@gmail.com</p>
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
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>Angular</p>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
              <div>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Company Name | year
                </h4>
                <ul>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Company Name | year
                </h4>
                <ul>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </li>
                </ul>
              </div>
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
                University Name | year{" "}
              </h4>
              <p>Degree</p>
              <p>Marks</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// #6c6c6c00
