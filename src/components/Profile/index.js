import React from 'react';
import noboru from '../../img/noboru.jpg';
import './style.css';

function Profile() {
    return (
        <div id="profile">
            <div className="container">
                <div className="row my-3">
                    <div id="img-div" className="col-sm-12 col-md-3">
                        <img src={noboru} alt="noboru-profile-pic"/>
                    </div>
                    <div className="col-sm-12 col-md-9 my-3">
                        <h3> About Me </h3>
                        <p className="mx-1 mb-1">
                            Hi, I'm Nobo. Currently I am a Seattle-based Cloud Support Engineer.
                            I'm passionate about Machine Learning technology and Web Development.
                    </p>
                    <br />
                        <p className="mx-1 mb-1">
                            Currently enrolled in University of Washington Coding Bootcamp learning full stack web
                            development.
                            I'm also a part-time student at Johns Hopkins University pursuing my M.S. degree in Data Science.
                    </p>
                    <br />
                        <p className="mx-1 mb-1">
                            Originally from Tokyo and lived 7 years in Shanghai, so I speak couple languages: English,
                            Japanese
                            and Mandarin.
                            Also couple more in computing like Java, Python, JavaScript and SQL.
                    </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;