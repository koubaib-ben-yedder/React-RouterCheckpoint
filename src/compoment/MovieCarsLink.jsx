import React from 'react'
import {useParams,useLocation} from "react-router-dom"
import CustomCard from './ui/card/CustomCard'
import {Link } from "react-router-dom"
const MovieCarsLink = () => {

    const {description,posteUrl,title,rating,trailer}=useLocation().state
  return (
    <div>
        
        description:{description}

        <iframe src={trailer.substring(0,24)+"embed/"+trailer.substring(24)} title="description"></iframe>
     
        <Link to ="/">go back</Link>
    </div>
  )
}

export default MovieCarsLink