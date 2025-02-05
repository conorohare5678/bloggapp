import { useState, useEffect } from 'react';
import React from "react";
import ModalButton from "../components/modal"
import ModalButtonTwo from "../components/viewModal"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom"

const BloggPage = () => {

  const [blogg, setBlogg] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedPost(null);
  };

  const handleShow = (post) => {
    setSelectedPost(post);
    setShow(true);
  };

  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:5321/getBlog')
    .then(blogg => setBlogg(blogg.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ModalButton />
      <Button className='buttonLeft' onClick={() => navigate("/")}>Home Page</Button>
      <div className="card-container">
        {blogg.map (bloggDis => (
        <Card style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{bloggDis.title}</Card.Title>
            <Card.Text>
              {bloggDis.content}
            </Card.Text>
            {/* <ModalButtonTwo/> */}
            {/* <Button variant="primary">View in pop up</Button> */}
            <Button variant="primary" onClick={() => handleShow(bloggDis)}>
                View in pop up
              </Button>
          </Card.Body>
        </Card>
))}
      </div>

      {/* Modal for individual post */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPost?.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )

}

export default BloggPage;