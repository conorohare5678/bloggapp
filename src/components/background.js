import React from "react";
import Video from '../images/background.mp4'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const BackgroundVideo = ()=> {

    const navigate = useNavigate();
    return(
        <>
        <div className="Background-container">
            <video autoPlay loop muted className="Video-Main">
                <source src={Video} type="video/mp4"/>
            </video>
            <div className="text-overlay">
            <h1 className="center-text">Blogging Page</h1>
        <p className="center-text">This is an application where a user can blogg about daily sport that they have done</p>
        <p className="center-text">A user can posta daily bog here to the page where they can login and post about their daily activity</p>
        
        <Button size="lg" variant="info" className="center-item" onClick={() => navigate("/BloggPage")}>Lets get Blogging</Button>
        </div>
        </div>
        
        </>
    )

}

export default BackgroundVideo;