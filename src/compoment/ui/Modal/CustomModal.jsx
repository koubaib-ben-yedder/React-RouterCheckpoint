import React,{useState} from 'react'
import {Button,Modal,Alert} from "react-bootstrap"
import MovieAdd from '../../MovieAdd';
import MovieFilter from '../../MovieFilter';
import "../../css/CustomModal.css";
const CustomModal = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    const parentSend=({description,title,posteUrl,rating,code})=>{

      props.parentSend({description,title,posteUrl,rating,code})
      
    }
  

    
  return (
    <div className='CustomModal'>
        
            <Button variant="primary" onClick={handleShow}>
              {props.title!="Add"?"Delete":" Add "}
            </Button>
           
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              style={{heigth:"23rem"}}
            >
            <Alert   variant={props.title!="Add"?"danger":"success"}>
                <Modal.Header closeButton>
                    <Modal.Title >{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                        {props.compoment=="MovieAdd"?<MovieAdd title={props.title} parentSend={parentSend} />:<MovieFilter title={props.title} parentSend={parentSend} />}
                </Modal.Body>
                <Modal.Footer>
                
                    <Button onClick={()=>handleClose()}  variant={props.title!="Add"?"danger":"success"}>{props.title}</Button>
                </Modal.Footer>
                 </Alert>
                </Modal>
           
          
    
      
      
      
    </div>
  )
}

export default CustomModal