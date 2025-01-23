import { useState } from 'react';
import React from "react";
import ModalButton from "../components/modal"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BloggPage = () =>{
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return(
        <>
        <ModalButton/>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        </div>
      
        </>
    )

}

export default BloggPage;