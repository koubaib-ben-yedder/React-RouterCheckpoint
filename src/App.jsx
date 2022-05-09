import MovieList from "./compoment/MovieList";
import MovieAdd from "./compoment/MovieAdd";
import CustomAppBar from "./compoment/ui/appbar/AppBar";
import "./compoment/css/App.css";
import  {Route,Routes} from "react-router-dom"
import {useState} from "react";
import Form from "./compoment/Form";
import Description from "./compoment/Description";
import Video from "./compoment/Video";
import MovieCarsLink from "./compoment/MovieCarsLink";
function App() {
 
  const parentSend=({description,title,posteUrl,rating,code})=>{

 
    // setData({description,title,posteUrl,rating,code})


  }
  
  return (
    
    <div>

      <CustomAppBar parentSend={parentSend} />

      <Routes>


        <Route path="/" exact  element={<Form    />} /> 
        <Route  path ="/Video" exatc element={<Video />}/>
        <Route path ="/Description" exact element={<Description  />} />
        <Route path ="/MovieCard" exact element={<MovieCarsLink />} />
     
              
          
      </Routes>

     
    
      
    

       
     
    </div>
  );
}

export default App;
