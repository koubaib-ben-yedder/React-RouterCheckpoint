import React from 'react'
import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material'
import "../../css/CustomCard.css"
const CustomCard = ({el}) => {
  return (
    <div className="CustomCard">
         <Card sx={{ maxWidth: 345 }}>
           <div className='CustomCardImage'>
              <CardMedia
                component="img"
                alt="green iguana"
                style={{objectFit:"cover"}}
                image={el.posteUrl}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               title: {el.title}  / rating:{el.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               description: {el.description}
              </Typography>
             
            </CardContent>
           
          </Card>
    </div>
  )
}

export default CustomCard