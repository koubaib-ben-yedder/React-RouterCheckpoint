import React from 'react'
import CustomForm from './ui/form/CustomForm'
const MovieAdd = (props) => {

  const parentSend=({description,title,posteUrl,rating,code})=>{

   // console.log(description,title,posteUrl,rating)

   props.parentSend({description,title,posteUrl,rating,code})


  }
  return (
    <div><CustomForm  parentSend={parentSend} code={"MovieAdd"}/></div>
  )
}

export default MovieAdd