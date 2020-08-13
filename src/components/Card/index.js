import React, { useState } from 'react';
import MyModal from '../MyModal';
import './style.css';

function importAll(r) {
    let images = {};
    r.keys().map(item => images[item.replace('./', '')] = r(item));
    return images;
}

const images = importAll(require.context('../../img/', false, /\.*/));

function Card(props) {
    const { id, img, title } = props;

    const [show, setShow] = useState(false);

    return (
        <div className="col-sm m-3" onClick={() => setShow(true)}>
            <div id={`pj${id + 1}`} className="card" >
                <img src={images[img]} className="card-img" alt={img} />
                <div id={`overlay${id + 1}`}>
                    <div className="text">
                        <p>{title}</p>
                    </div>
                </div>
            </div>

            <div onClick={e => e.stopPropagation()}>
                <MyModal {...props}
                    show={show}
                    onHide={() => setShow(false)} />
            </div>


        </div>
    );
}

export default Card;