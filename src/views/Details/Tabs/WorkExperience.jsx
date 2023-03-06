import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import CustomInput from '../../../components/CustomInput/CustomInput'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RadioGroups from '../../../components/RadioGroups/RadioGroups';
import { textAlign } from '@mui/system';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TabNavigation from '../../../components/TabNavigation';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Editor,EditorProvider , Toolbar, BtnBold,BtnItalic, } from 'react-simple-wysiwyg';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(() => ({

  dropdownWrapper: {
    "& select": {
      padding: "13px 7px",
      borderColor: "#ced4da",
      background: "#ffffff",
      color: "#919191",
      borderRadius: "4px",
      width:'80.3%',
    }
  },


}));


export default function PersonalInfo() {
  const classes = useStyles();

  const [workExperience, setWorkExperience] = useState({
    exp: '',
   user_experience: [
    {
    job_title: '',
    org_name: '',
    start_year: '',
    end_year: '',
    key_points: [],
    key_note: '',
   },

  ]


  })

  const expRadios = [{
    label: 'Fresher',
    value: 'f'

  },
  {
    label: 'Experienced',
    value: 'e'
  }]




  
  const onChange = (e,i) => {
    console.log(e.target.value)
      const updated_user_exp= [...workExperience.user_experience]
      updated_user_exp[i].key_note = e.target.value
     
     console.log(updated_user_exp)
      setWorkExperience({...workExperience, 'user_experience':updated_user_exp})  
    }
    

const inputHandler = (e,i) => {
console.log(e.target)
  const updated_user_exp= [...workExperience.user_experience]
  updated_user_exp[i][e.target.name]= e.target.value
  setWorkExperience({...workExperience, 'user_experience':updated_user_exp})

}


  const radioChangeHandler= (e)=>{
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  }

  const addExpHandler = () => {
    const new_exp= [...workExperience.user_experience]
    new_exp.push({job_title: '', org_name: '', start_year: '', end_year: '', key_note:'', key_points:[]})
     setWorkExperience({...workExperience, 'user_experience': new_exp})
    //  setValue('')

  }

  

  const addKeyHandler= (i)=> {
    
    const updated_user_exp= [...workExperience.user_experience]
    const updated_key_points= [...updated_user_exp[i].key_points];
if(updated_user_exp[i] && updated_user_exp[i].key_note !== "") {
  updated_key_points.push(updated_user_exp[i].key_note)
  updated_user_exp[i].key_points = updated_key_points;
  updated_user_exp[i].key_note = "";
setWorkExperience({...workExperience, 'user_experience': updated_user_exp});
}

  }

  const removeKeyHandler = (rowIndex,itemIndex)=> {
    let updated_user_exp= [...workExperience.user_experience] 
    const updated_key_points= [...updated_user_exp[rowIndex].key_points]
    const filtered_keyNotes= updated_key_points.filter((items,index)=> index !==  itemIndex)
    updated_user_exp[rowIndex].key_points = filtered_keyNotes
    setWorkExperience({...workExperience, 'user_experience': updated_user_exp});

  }

  


//   const countryChangeHandler = (val) => {
//     setWorkExperience({ ...workExperience, "country": val })
//   }key_points

  return (
    <div>
      <Typography variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
        Work Experience
      </Typography>





      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
       <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <RadioGroups options={expRadios} selectedValue={workExperience.exp} name={'exp'} onchange={radioChangeHandler} label="Are u experienced or fresher" />
        </Grid> 
        {workExperience.exp === 'e' && 
        <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }} style= {{alignItems: 'center'}}>
        
        {workExperience.user_experience.map((exp,i)=><>
          <Grid item md={6} lg={6} style={{ marginTop: '25px' }}>
          <CustomInput label="Job Title" name={'job_title'} type='text' placeholder='Designation' value={exp.job_title} onchange={(e)=>inputHandler(e,i)} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '25px' }}>
          <CustomInput label="Organization Name" name={'org_name'} type='text' placeholder='Organization' value={exp.org_name} onchange={(e)=>inputHandler(e,i)} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '25px' }}>
          <CustomInput label="Start Year" name={'start_year'} type='date' placeholder='Year' value={exp.start_year} onchange={(e)=>inputHandler(e,i)} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '25px' }}>
          <CustomInput label="End Year" name={'end_year'} type='date' placeholder='Year' value={exp.end_year} onchange={(e)=>inputHandler(e,i)} />
        </Grid>
      
       
       {exp.key_points.map((points,index) =><>
        <Grid item md={9} lg={9} style={{ marginTop: '25px' }}>
        <div dangerouslySetInnerHTML={{'__html':points}}>
        </div>
        </Grid>
        <Grid item md={2} lg={2} style={{ marginTop: '25px' }}>
      <RemoveCircleOutlineIcon onClick= {()=>removeKeyHandler(i,index)} />
      </Grid>
      </>
       )}
    
 
   
     

        <Grid item md={9} lg={9} style={{ marginTop: '25px' }}>
      <EditorProvider>
      <Editor name="key_note" value={exp.key_note} onChange={(e)=>onChange(e,i)}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
      </EditorProvider>
    
      </Grid>

      <Grid item md={2} lg={2} style={{ marginTop: '25px' }}>
      <IconButton aria-label="delete">
      <AddTaskIcon onClick={()=>addKeyHandler(i)} style={{fill: '#9f4545'}} />
      </IconButton>
      </Grid>
        </>
        )}
        <Grid item md={12} lg={12} style={{ marginTop: '25px' }}>
        <Button variant="outlined" style={{color:'#9f4545' ,borderColor:'#9f4545'}} onClick={addExpHandler}>Add Another Experience...</Button>
        </Grid>
        </Grid> 
        }
        
        
         
        
             <Grid container  alignItems="flex-end" style={{alignItems:'end'}}>

      <Grid item md={10} lg={10} style={{ marginTop: '15px' ,  textAlign:"end" }}>
          <TabNavigation />
        </Grid>
      </Grid>
      </Grid>
      



      {/* <CustomCheckbox checked={personalinfo.checked} onChange= {inputHandler} name= 'checked' id= 'firstCheck' label= 'I understand' /> */}



    </div>
  )
}
