import  {Navbar,Container,Nav} from "react-bootstrap"
import CustomModal from "../Modal/CustomModal";
import "../../css/CustomAppBar.css"
const  CustomAppBar =(props)=> {

  
  const parentSend=({description,title,posteUrl,rating,code})=>{

    props.parentSend({description,title,posteUrl,rating,code})
    
  }


  return (


    <Navbar bg="light" expand="lg">
      <Container>
        <div className="Navbar.Brand" href="#home">MediaTime</div>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            
            <CustomModal compoment={"MovieAdd" } parentSend={parentSend} title={"Add"}/>
            <CustomModal compoment={"MovieFilter"}  parentSend={parentSend} title={"Delete"}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
       
        
  );
}

export  default CustomAppBar