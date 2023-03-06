import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import CustomInput from '../../../components/CustomInput/CustomInput'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { textAlign } from '@mui/system';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TabNavigation from '../../../components/TabNavigation';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

export default function KeySkill() {

    const [keySkill, setKeySkill]= useState('')

    console.log(keySkill)

    const [chipData, setChipData] = React.useState([
       
      ]);
    
      const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      };

      const inputHandler = (e) => {
        setKeySkill({ ...keySkill, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
    
      }

      const addSkillHandler= (e)=>{
        const updated_skills= [...chipData]
        updated_skills.push({key:keySkill  ,label: keySkill })
       setChipData(updated_skills)  
       setKeySkill('')
      }

  return (
    <div>
         <Typography variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
       Key Skill
      </Typography>
      <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        boxShadow:'none'
      }}
      component="ul"
    >
      {chipData.map((data) => {

        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>

    <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
    <Grid item md={12} lg={12} style={{ marginTop: '55px' }}>
          <CustomInput label="Add Skill" name={'skill'} type='text' placeholder='Add your job related skills' value={keySkill} onchange={(e)=>setKeySkill(e.target.value)} />
        </Grid>
        <Grid item md={12} lg={12} style={{ marginTop: '25px' }}>
        <Button variant="outlined" style={{color:'#9f4545' ,borderColor:'#9f4545'}} onClick={addSkillHandler}>Add More Skills...</Button>
        </Grid>
    </Grid>

    </div>
  )
}
