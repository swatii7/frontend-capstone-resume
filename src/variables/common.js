/*this function is used to get last item from array which is the current designation of the user */ 

export const currentDesignation = (designations)=>{
    console.log(designations.length-1);//last item index
    if(designations.length !== -1){ // last
     return  designations[designations.length-1].job_title;
    }
  
}