import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";

const Item = ({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

export default function TemplateThree() {
  const [value, setValue] = React.useState(5);

  return (
    <Container
      maxWidth="md lg"
      style={{
        border: "2px solid black",
        height: "auto",
        width: "110vh",
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
                Swati Chaudhary
              </h3>
              <span
                style={{
                  letterSpacing: "0.2rem",
                  fontSize: "20px",
                  color: "#d4cece",
                }}
              >
                Web Developer
              </span>
            </div>
            <div style={{ paddingTop: "50px" }}>
              <h2 style={{ fontSize: "22px", letterSpacing: "0.2rem" }}>
                Details
              </h2>
              <p>Address</p>
              <p>Contact Number</p>
              <p>Email id</p>
            </div>
            <div>
              <h2>Skills</h2>
              <ul>
                <li>
                  <Typography>React</Typography>
                </li>
                <li>
                  <Typography>HTML</Typography>
                </li>
                <li>
                  <Typography>CSS</Typography>
                </li>
                <li>
                  <Typography>Angular</Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={7} md={7} style={{ marginTop: "28px" }}>
            <div>
              <h2>Profile</h2>
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
              <h2>Work Experience</h2>
              <div>
                <h3>Company Name | year</h3>
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
                <h3>Company Name | year</h3>
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
              <h2>Education</h2>
              <h3>University Name | year </h3>
              <p>Degree</p>
              <p>Marks</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
