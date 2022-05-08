import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

import "../../css/CustomForm.css";
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};



const CustomForm= ({parentSend,code}) => {

  const [description,setDescription]=useState("");
  const [title,setTitle]=useState("");
  const [posteUrl,setPostUrl]=useState("");
  const [rating,setRating]=useState(0);
  
  const change=(e)=>{

    if(e.target.name=="description"){

      setDescription(e.target.value)

    }else{

      if(e.target.name=="title"){
      
        setTitle(e.target.value)

      }else{
      
        if(e.target.name=="posteUrl"){
        
          setPostUrl(e.target.value)
        }else{

          

          setRating(e.target.value)
        }
      }
    }
       
  }


 

  parentSend({description,title,posteUrl,rating,code})
  
  return (
    <div className='FormContent'>
     
      <TextField
          label="description"
          id="filled-size-small"
          name="description"
          onChange={(e)=>{change(e)}}
         
        />
        <TextField
          label="title"
          id="filled-size-small"
          name="title"
          onChange={(e)=>{change(e)}}
        
        />
          <TextField
          label="posteUrl"
          id="filled-size-small"
          name="posteUrl"
          onChange={(e)=>{change(e)}}
         
        />
      
      <Rating
  
        defaultValue={2}
        name="rating"
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
        onClick={(e)=>{change(e)}}
       
      />
  </div>
  )
}

export default CustomForm