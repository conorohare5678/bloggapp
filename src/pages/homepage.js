import React from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();
    return(
        <>
        <h1 className="center-text">Blogging Page</h1>
        <p className="center-text">This is an application where a user can blogg about daily sport that they have done</p>
        <p className="center-text">A user can posta daily bog here to the page where they can login and post about their daily activity</p>
        
        <Button variant="info" className="center-item" onClick={() => navigate("/BloggPage")}>Lets get Blogging</Button>
        </>
    );
}

export default HomePage;