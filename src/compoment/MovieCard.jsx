import React from 'react'
import CustomCard from './ui/card/CustomCard';
const  MovieCard =({data})=> {
   
       
    
  return (
    <div className='MovieCard'> 

      {data.map((el, idx) => (

      

        <CustomCard el={el} />
            
    

      ))}

    
    </div>
  )
}

export default MovieCard;