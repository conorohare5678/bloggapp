import React, { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";

const BloggModal = () =>{
        const [show, setShow] = useState(false);
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

       const handleInput = (event) => {
        event.preventDefault()

        axios
        .post("http://localhost:5321/addBlog", {title, content})
        .then(response => {
          console.log(response)

          setTitle('')
          setContent('')

          handleClose();
        })

       }

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
          <form onSubmit={handleInput}>
          <label>Post Title</label>
          <br/>
          <input type="text" name="title" style={{ width: '350px' }} value={title} onChange={(e) => setTitle(e.target.value)}/>
          <br/>
          <label>Contents:</label>
          <br/>
          <textarea name="content" style={{ height: '200px', width: '350px' }} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          
        </Modal.Footer>
          
          </form>
        </Modal.Body>
        
      </Modal>
        </>
    );


}

export default BloggModal;