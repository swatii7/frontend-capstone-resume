import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const TemplateTwo = () => {
  return (
    <Container id= 'temTwo' style={{padding:"0px"}}>
    <Box
      sx={{ width: "100vh", height: "auto", border: "2px solid #e4e0e0" }}
    >
      {/* <Container> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            style={{
              backgroundColor: "#9b536f",
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
                <p className="head-section"
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    textAlign: "center",
                    position: "relative",
                    top: "50px",
                  }}
                >
                  SC
                </p>
              </div>
            </Grid>
            <Grid item md={6} lg={6}>
              <div style={{ fontSize: "22px", color: "#fff" }}>
                <h3 style={{ margin: "0px 15px", fontSize: "44px" }}>
                  Swati Chaudhary
                </h3>
                <span style={{ margin: "10px 15px", fontSize: "25px" }}>
                  Web Developer
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
                  Address: 123, AnyWhere, Any city
                </p>
                <p className="head-section" style={{ paddingTop: "24px" }}>
                  contact Number: 1234-567-789
                </p>
                <p className="head-section" style={{ paddingTop: "24px" }}>Email: any@gmail.com</p>
              </div>
            </Grid>
           
          </Grid>
        

        <Grid container spacing={2} style= {{
        }}>
        <Grid item md={12} lg={12}>
              <div
                style={{
                  color: "#61a9da",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                 <p
              style={{
                letterSpacing: "0.1rem",
                wordSpacing: "0.1rem", 
                backgroundColor: "#9b536f",
  marginLeft: "0px",
  marginTop: "0px",
  padding: '8px 40px',
  color: '#fff',
  textAlign: "justify"
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
              </div>
            </Grid>
    </Grid>
    </Box>

        <div style={{padding: '0px 16px'}}>
        <div>
          <h2 style={{color: "#9b536f", letterSpacing: "0.1rem", wordSpacing: "0.1rem", marginBottom: '0px'}}>Professional Experience</h2>
          <Divider
          style={{
            borderWidth: "3px",
            backgroundColor: "#9b536f",
            opacity: "0.9",
          }}
        />
        </div>
        <Grid container spacing={2}
        style= {{padding: '0px 26px'}}>
      
      <Grid item md={3} lg= {3}>
      <div style={{marginTop: '22px'}}>
      <span style={{fontSize: "20px", fontWeight: 600 }}>Year</span>
      </div>
      
      </Grid>
      <Grid item md={9} lg= {9}>
        <div>
          <h3 style={{marginBottom: '6px', fontSize:'22px'}}>Designation</h3>
          <span style={{fontSize: "20px", fontWeight: 600 }}>company Name</span>
          <ul>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
         
            
          </ul>
        </div>
      </Grid>
      <Grid item md={3} lg= {3}>
      <div style={{marginTop: '22px'}}>
      <span style={{fontSize: "20px", fontWeight: 600 }}>Year</span>
      </div>
      
      </Grid>
      <Grid item md={9} lg= {9}>
        <div>
          <h3 style={{marginBottom: '6px', fontSize:'22px'}}>Designation</h3>
          <span style={{fontSize: "20px", fontWeight: 600 }}>company Name</span>
          <ul>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
         
            
          </ul>
        </div>
      </Grid>
    </Grid>
        </div>
        

<div style={{padding: '0px 16px'}}>
<div>
          <h2 style={{color: "#9b536f", letterSpacing: "0.1rem", wordSpacing: "0.1rem",marginBottom: '0px'}}>Education</h2>
          <Divider
          style={{
            borderWidth: "3px",
            backgroundColor: "#9b536f",
            opacity: "0.9",
          }}
        />
        </div>
        <Grid container spacing={2}>
      
      <Grid item md={5} lg= {5}>
      <div style={{marginTop: '22px'}}>
      <span style={{fontSize: "18px", fontWeight: 600 }}>Year</span>
      </div>
       
      </Grid>
      <Grid item md={7} lg= {7}>
        <div>
          <h3 style={{marginBottom: '6px', fontSize:'22px'}}>Highest Degree</h3>
          <span style={{fontSize: "18px", fontWeight: 400 }}>University Name</span>
          <ul>
          <li><Typography>I had completed (highest qualification ) with the (marks)</Typography></li>
          </ul>
          
        </div>
       

          

      </Grid>
    </Grid>
        </div>
        <div style={{padding: '0px 16px'}}>
        <Grid container spacing={2}>
      
      <Grid item md={12} lg= {12}>
        <div>
          <h2 style={{color: "#9b536f", letterSpacing: "0.1rem", wordSpacing: "0.1rem", marginBottom: '0px'}}>Key SKills</h2>
          <Divider
          style={{
            borderWidth: "3px",
            backgroundColor: "#9b536f",
            opacity: "0.9",
          }}
        />
          <ul>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          <li><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography></li>
          </ul>
        </div>
      </Grid>
    </Grid>
        </div>
      {/* </Container> */}
    </Box>
    <div>

    </div>
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
    description : state.description
});

const mapdispatchtoProps = () => {};

export default connect(mapstatetoProps, null)(TemplateTwo);
