import { useState, useEffect } from 'react';
import React from "react";
import ModalButton from "../components/modal"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"

const BloggPage = () => {

  const [blogg, setBlogg] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5321/getBlog')
    .then(blogg => setBlogg(blogg.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ModalButton />
      <div className="card-container">
        {blogg.map (bloggDis => (
        <Card style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{bloggDis.title}</Card.Title>
            <Card.Text>
              {bloggDis.content}
            </Card.Text>
            <Button variant="primary">View in pop up</Button>
          </Card.Body>
        </Card>
))}
      </div>

    </>
  )

}

export default BloggPage;