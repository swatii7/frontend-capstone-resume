import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckbox(props) {
  return (
   
      
   
     
      <FormGroup>
      <FormControlLabel control={ <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: '#212121',
          '&.Mui-checked': {
            color: '#9f4545',
          },
        }}
        checked={props.checked}
      onChange={props.onChange}
      name= {props.name} 
      id= {props.id}
      
      /> } label={props.label} />
    </FormGroup>
   
  );
}
