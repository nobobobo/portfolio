import React from 'react';
import "./style.css";

function Header({width}) {
    console.log(width);
    return (<div id="header"> 
    {width >= 601 ? <div id="site-header">
        <div className="container">
            <div className="row">
                <div className=" col-6 my-3">
                <a className="navbar-brand" href="#home">
                    <h4 id="brand-title" className="mt-3 mb-0 magic_mint">
                        Noboru Hayashi
                    </h4>
                    <p className="my-0" id="brand-sub"> Full Stack Web Developer </p>
                </a>
            </div>
            <div className="col-6">
                <nav className="navbar navbar-expand-sm navbar-light mt-3">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto my-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#works"> WORKS </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#profile"> PROFILE </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"> CONTACT </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </div>:    <div id="site-header-mobile">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-expand mx-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#works"> WORKS </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#profile">PROFILE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>

</div>}

    </div>);
}

export default Header;