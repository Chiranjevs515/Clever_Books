import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import "./navbar.css"
import App from "../App";
function Navbar(){
return (
    <>
    <div className="nav-container">
        <div className="logo">
            <h1>CleverBooks</h1>
        </div>
        <div className="nav-item">
            <ul>
            <li>Product</li>
                <li>Pricing</li>
                <li>Industry</li>
                <li>Coustomer Stories</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="btns">
        <button>Login</button>
        <button type="button" class="btn btn-danger">Talk to Us</button>
        </div>
    </div>
    </>
)
}
export default Navbar