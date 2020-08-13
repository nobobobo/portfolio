import React, {useEffect, useState} from 'react';
import './style.css';

function Home() {
    const [show, setShow] = useState(false);

    useEffect(()=>{
            setShow(true);
    },[])

    const setStyle = () => {
        return {
            animation: show? "fadeIn 3s":"" 
        }
    }

    
    return (
        <div id="home">
            <div className="container my-3">
                <h1 id="title" className="mt-3 mb-1" style={setStyle()}> hi! I'm Noboru Hayashi, </h1>
                <h1 id="sub" className="my-1" style={setStyle()} > a developer based in seattle, washington</h1>
            </div>
        </div>
    );
}

export default Home;