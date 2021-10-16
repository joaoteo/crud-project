import axios from 'axios';
import React from 'react';
import { useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function Delete(props){
    const [show, setShow] =useState(true)
    const {dinossauro} =  useParams()
        async function handleDelete() {
        try{
            const deletPost = await axios.delete(`https://ironrest.herokuapp.com/instahack/${dinossauro}`) //DELETE
                console.log(deletPost)
                props.history.push("/")
        }catch(erro){console.log(erro)}
                    
    }

    function handleClose() {
        setShow(false)
        props.history.push("/")

    }
    
      return(
        <div>                         
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                <Modal.Title> <strong>Excluir Post</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                Tem certeza que deseja excluir este post? Essa operação é irreversível.           
                </Modal.Body>
                <Modal.Footer>
                <Button style={{ backgroundColor: "#FFA900" }} onClick={handleDelete}>
                    Excluir
                </Button>
                </Modal.Footer>
            </Modal>            
        </div>
    )
}


export default Delete;