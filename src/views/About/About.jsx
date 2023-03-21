import { Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
  return (
    <div>
<Typography variant="h3"
  style={{letterSpacing: "0.1rem",
  paddingLeft: "37px",
  color: '#9f4545'}}>Resume Builder
</Typography>
 <Grid container spacing={2}>
        <Grid item lg= {6} md= {6} style={{textAlign: "justify",
  letterSpacing: "0.1rem",
  padding: "41px"}}>
          <div>
            <p style={{color: 'rgba(118,122,126,1)'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div style={{marginTop: '67px'}}>
            <Typography variant='h5' style={{color: '#9f4545'}}>
              Share with your freinds
              </Typography>
              <div  style={{paddingTop: '20px'}}>
<FacebookIcon style={{height: "39px",
  width: "39px",
  color: "rgba(118,122,129,1),",
  paddingRight: "11px"}} />
  <LinkedInIcon style={{height: "39px",
  width: "39px",
  color: "rgba(118,122,129,1)",
  paddingRight: "11px"}} />
  <WhatsAppIcon style={{height: "39px",
  width: "39px",
  color: "rgba(118,122,129,1)",
  paddingRight: "11px"}}/>
  <TwitterIcon style={{height: "39px",
  width: "39px",
  color: "rgba(118,122,129,1)",
  paddingRight: "11px"}} />
  <EmailIcon style={{height: "39px",
  width: "39px",
  color: "rgba(118,122,129,1)",
  paddingRight: "11px"}}/>
              </div>
           
          </div>
        </Grid>
        <Grid item lg= {6} md= {6}>
          sdcbjs
        </Grid>
       
      </Grid>
    </div>
  )
}
