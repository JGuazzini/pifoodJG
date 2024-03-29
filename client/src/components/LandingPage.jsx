import React from "react";
import { Link } from 'react-router-dom';
import './landingpage.css';

export default function LandingPage() {
    return (
        <div className="landing">
            <h1 className="welcomeMsg">Do you like cooking? This is your place!</h1>
            <Link to='/home' id="click">
                <button className="btn">Let's cook</button>
            </Link>

        </div>
    )
}
