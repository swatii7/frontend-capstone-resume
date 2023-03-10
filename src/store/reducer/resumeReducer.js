const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    checked: false,
    gender: '',
    marital_status: '',
    address: '',
    country: 'India',
    region: 'Himachal Pradesh',
    pin_code: '',
    description : '',
    activeTab: 0,
    exp: '',
    user_experience: [
     {
     job_title: '',
     org_name: '',
     start_year: '',
     end_year: '',
     key_points: [],
     key_note: '',
    }
],
qualification: '',
    university_name: '',
    degree:'',
    marks:'',
    start_year: '',
    end_year: ''
}


const reducer = (state = initialState, action) => {
   //  console.log(action)
    if(action.type === 'INPUT_CHANGE'){  
         const e  = action.payload;
        // console.log(x.target)
         return {...state,[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value}
    }
    else if(action.type === 'REGION_CHANGE'){
        return {...state, "region": action.payload}
    }
    else if(action.type === 'COUNTRY_CHANGE'){
        return {...state, "country": action.payload}
    }
    else if(action.type === 'TAB_CHANGE'){
        return {...state, "activeTab": action.payload}
    }
    else if(action.type === 'TAB_BACK_INDEX'){
        console.log(action.payload)
        return {...state, "activeTab": action.payload}
    }
    else if(action.type === 'WORK_EXP_CHANGE'){
        console.log(action.payload)
            return{...state, 
         user_experience: state.user_experience.map((user_exp,i) =>{
            if(i === action.payload.index){
                return{...user_exp,[action.payload.event.target.name]: action.payload.event.target.value}
            }
            return {...user_exp}
            }
            )}
    }

    else if(action.type === 'ADD_MORE_EXPERIENCE'){
    return{...state,'user_experience': [...state.user_experience, {job_title: '', org_name: '', start_year: '', end_year: '', key_note:'', key_points:[]}]}
    }


    else if(action.type === 'ADD_KEY'){
        const updated_user_exp= [...state.user_experience]
         const updated_key_points= [...updated_user_exp[action.payload].key_points];
         if(updated_user_exp[action.payload] && updated_user_exp[action.payload].key_note !== "") {
              updated_key_points.push(updated_user_exp[action.payload].key_note)
              updated_user_exp[action.payload].key_points = updated_key_points;
              updated_user_exp[action.payload].key_note = ""
             }
             return{...state, 'user_experience': updated_user_exp}
    }
    else if(action.type === 'REMOVE_KEY'){
        const updated_user_exp= [...state.user_experience]
        console.log(updated_user_exp[action.payload])
        // const updated_key_points= [...updated_user_exp[action.payload].key_points];
        // console.log(updated_key_points)

    }
    
    else {
        return state;
    }


}


export default reducer
