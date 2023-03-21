const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  mobile_number: "",
  checked: false,
  gender: "",
  marital_status: "",
  address: "",
  country: "",
  region: "",
  pin_code: "",
  description: "",
  activeTab: 0,
  exp: "",
  user_experience: [
    {
      job_title: "",
      org_name: "",
      start_year: "",
      end_year: "",
      key_points: [],
      key_note: "",
    },
  ],
  qualification: "",
  university_name: "",
  degree: "",
  marks: "",
  start_year: "",
  end_year: "",
  chipData: [],
  activeSlide: 0

};

const reducer = (state = initialState, action) => {
 /*update state for personal info tab*/
  if (action.type === "INPUT_CHANGE") {
    const e = action.payload;
    // console.log(x.target)
    return {
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
  } else if (action.type === "REGION_CHANGE") {
    return { ...state, region: action.payload };
  } else if (action.type === "COUNTRY_CHANGE") {
    return { ...state, country: action.payload };

/*update state for Next and Back button*/

  } else if (action.type === "TAB_CHANGE") {
    return { ...state, activeTab: action.payload };
  } else if (action.type === "TAB_BACK_INDEX") {
    return { ...state, activeTab: action.payload };

    /*update state for work experience tab*/
  } else if (action.type === "WORK_EXP_CHANGE") {
    return {
      ...state,
      user_experience: state.user_experience.map((user_exp, i) => {
        if (i === action.payload.index) {
          return {
            ...user_exp,
            [action.payload.event.target.name]:
              action.payload.event.target.value,
          };
        }
        return { ...user_exp };
      }),
    };
  } else if (action.type === "ADD_MORE_EXPERIENCE") {
    return {
      ...state,
      user_experience: [
        ...state.user_experience,
        {
          job_title: "",
          org_name: "",
          start_year: "",
          end_year: "",
          key_note: "",
          key_points: [],
        },
      ],
    };
  } else if (action.type === "ADD_KEY") {
    const updated_user_exp = [...state.user_experience];
    const updated_key_points = [...updated_user_exp[action.payload].key_points];
    if (
      updated_user_exp[action.payload] &&
      updated_user_exp[action.payload].key_note !== ""
    ) {
      updated_key_points.push(updated_user_exp[action.payload].key_note);
      updated_user_exp[action.payload].key_points = updated_key_points;
      updated_user_exp[action.payload].key_note = "";
    }
    return { ...state, user_experience: updated_user_exp };
  } else if (action.type === "REMOVE_KEY") {
    const updated_user_exp = [...state.user_experience];
    const updated_key_points = [
      ...updated_user_exp[action.rowIndex].key_points,
    ];
    const filtered_keyNotes = updated_key_points.filter(
      (items, index) => index !== action.itemIndex
    );
    updated_user_exp[action.rowIndex].key_points = filtered_keyNotes;
    return { ...state, user_experience: updated_user_exp };
  }
  else if(action.type === 'ADD_SKILL'){
    const updated_skills = [...state.chipData];
 updated_skills.push({ key: action.payload, label: action.payload });
 return{ ...state,chipData: updated_skills}
  }
  else if(action.type === 'DEL_SKILL'){
    const keySkill = [...state.chipData];
    const updatedkeyskills = keySkill.filter(
      (chip) => chip.key !== action.payload.key
    );

    return{ ...state,chipData:updatedkeyskills}

}

/* for selected templates */
else if(action.type === 'SELECTED_TEMPLATE'){
  
  return{ ...state, activeSlide: action.payload}
}
   
  
  
  else {
    return state;
  }
};

export default reducer;
