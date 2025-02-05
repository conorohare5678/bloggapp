import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const ViewModal = () =>{

    const [blogg, setBlogg] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() =>{
        axios.get('http://localhost:5321/getBlog')
        .then(blogg => setBlogg(blogg.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
          <Button variant="primary" onClick={handleShow} className='button-modal'>
        View Post in pop up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {blogg.map (bloggDis =>(
                <Card style={{ width: '18rem', marginBottom: '10px' }}>
                <Card.Body>
                  <Card.Title>{bloggDis.title}</Card.Title>
                  <Card.Text>
                    {bloggDis.content}
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            ))

            }
         
         
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal.Body>
        
      </Modal>
        </>
    );

}

export default ViewModal;