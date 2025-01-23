import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const BloggModal = () =>{
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <>
         <Button variant="primary" onClick={handleShow} className='button-modal'>
        Add Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Post Title</label>
          <br/>
          <input type="text" name="title" style={{ width: '350px' }}/>
          <br/>
          <label>Contents:</label>
          <br/>
          <textarea name="content" style={{ height: '200px', width: '350px' }}></textarea>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );


}

export default BloggModal;