import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function MyModal(props) {
    const { gif, title, desc, link, github } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="container">
                    {gif ? <img src={gif} alt={"gif of: "+title}/> : null}
                    <div className="row">
                        {link ? <p className="col-sm text-center">
                            <a className="modal-anchor" href={link} target="_blank" rel="noopener noreferrer" >Application Page</a>
                        </p> : null}
                        {github ? <p className="col-sm text-center">
                            <a className="modal-anchor" href={github} target="_blank" rel="noopener noreferrer">
                                GitHub Repo</a>
                        </p> : null}
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;