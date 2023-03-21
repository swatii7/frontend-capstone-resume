export const inputChangeHandler = (event) => {
   // console.log(event)
     return(dispatch) => {
         dispatch ({
             type: 'INPUT_CHANGE',
             payload: event
         })
     }
 
 }

 export const countryChangeHandler = (val) => {
    return(dispatch) => {
        dispatch ({
        type: 'COUNTRY_CHANGE',
        payload: val,
        })
    }
}
 
 export const regionChangeHandler = (val) => {
     return(dispatch) => {
         dispatch ({
         type: 'REGION_CHANGE',
         payload: val,
         })
     }
 }

 export const tabChangeHandler= (value) =>{
    return(dispatch) => {
        dispatch ({
            type: 'TAB_CHANGE',
            payload: value
        })
    }
        
 }

 export const tabBackIndex= (value) =>{
    return(dispatch) =>{
        dispatch({
            type: 'TAB_BACK_INDEX',
            payload: value
        })

    }
 }

 export const workExpChangeHandler= (e,i) =>{
    return (dispatch) =>{
        dispatch({
            type: 'WORK_EXP_CHANGE',
            payload: {event: e,
            index: i}
        })
    }
 }

 export const addKeyHandler= (index) => {

    console.log(index)
    return (dispatch) =>{
        dispatch({
            type: 'ADD_KEY',
            payload: index
        })
    }
 }

export const addAnotherExpHandler= (value) =>{
    return (dispatch) => {
        dispatch({
            type: 'ADD_MORE_EXPERIENCE',
            payload: value
        }
            
        )
    }
}

export const removeKeyHandler= (i,keyPointIndex) =>{
    return (dispatch) =>{
        dispatch ({
            type: 'REMOVE_KEY',
       
                rowIndex: i,
            itemIndex: keyPointIndex          
        })
    }
}

export const addSkillHandler= (keySkill) =>{
    return (dispatch) =>{
        dispatch ({
        type: 'ADD_SKILL',
       payload: keySkill        
        })
    }
}

export const handleSkillDelete= (data) =>{
    return (dispatch) =>{
        dispatch ({
        type: 'DEL_SKILL',
       payload: data        
        })
    }
}

export const selectedTemHandler= (index) =>{
    return (dispatch) =>{
        dispatch ({
            type : 'SELECTED_TEMPLATE',
            payload: index
        })
    }
}