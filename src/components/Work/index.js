import React, { useEffect } from 'react';
import './style.css';
import { fs, ml, ot } from "./works.json";
import Card from "../Card";

function Work() {

    const openTabs = (event, tabName) => {

        let i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    const getCards = (workList) => {
        const res = [];
        let i = 0;
        while (i < workList.length) {
            let row = (
                <div className="row text-center">
                    <Card id={i} {...workList[i]} />
                    {i + 1 < workList.length ? <Card id={i + 1} {...workList[i + 1]} /> : <div className="col-sm m-3"/>}
                    {i + 2 < workList.length ? <Card id={i + 2} {...workList[i + 2]} /> : <div className="col-sm m-3"/>}
                </div>);

            res.push(row);
            i += 3;
        }

        return res;
    }

    useEffect(()=>{
        document.getElementById("defaultOpen").click();
    })

    return (
        <div id="works">
            <div className="container mt-3">
                <div className="tab text-center">
                    <button id="defaultOpen" className="tablinks btn btn-outline-success" onClick={event => openTabs(event, 'FullStack')}>Full-Stack</button>
                    <button className="tablinks btn btn-outline-info" onClick={event => openTabs(event, 'MachineLearning')}>Machine
                    Learning</button>
                    <button className="tablinks btn btn-outline-secondary" onClick={event => openTabs(event, 'Others')}>Others</button>
                </div>
                <div id="FullStack" className="tabcontent">
                    {getCards(fs)}
                </div>
                <div id="MachineLearning" className="tabcontent">
                    {getCards(ml)}
                </div>
                <div id="Others" className="tabcontent">
                    {getCards(ot)}
                </div>
            </div>
        </div>);
}

export default Work;