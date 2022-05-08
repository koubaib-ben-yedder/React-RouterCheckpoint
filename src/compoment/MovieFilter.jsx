import React from 'react'

import CustomForm from './ui/form/CustomForm'
function MovieFilter(props) {

  
  const parentSend=({description,title,posteUrl,rating,code})=>{

    // console.log(description,title,posteUrl,rating)
 
    props.parentSend({description,title,posteUrl,rating,code})
 
 
   }
   
  return (
    <div>
      <CustomForm  parentSend={parentSend} code={"MovieFilter"} />
      
    </div>
  )
}

export default MovieFilter