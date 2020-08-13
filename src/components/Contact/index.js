import React from 'react';
import './style.css';

function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <h5>Contact: </h5>
                <div className="row">
                    <div className="col-sm">
                        <nav className="navbar navbar-light">
                            <div className="navbar-expand mx-auto" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="https://github.com/nobobobo" className="fa fa-github zoom" target="_blank" rel="noopener noreferrer"> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.linkedin.com/in/noboruhayashi/" className="fa fa-linkedin zoom"
                                            target="_blank" rel="noopener noreferrer"> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="mailto: ianhsu1221@gmail.com" className="fa fa-paper-plane zoom"
                                            target="_blank" rel="noopener noreferrer"> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://docs.google.com/document/d/1kOwIcUZmfB_SsIV7_HHJe_VU_Zspax1pnxHEoA01FeM/edit?usp=sharing"
                                            className="fa fa-file zoom" target="_blank" rel="noopener noreferrer"> </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Contact;