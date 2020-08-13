import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function MyModal(props) {
    const { id, img, title, desc, link, github } = props;

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

                {link ? <p>
                    <a className="modal-anchor" href={link} target="_blank" rel="noopener noreferrer" >Application Page</a>
                </p> : null}
                {github ? <p>
                    <a className="modal-anchor" href={github} target="_blank" rel="noopener noreferrer">
                        GitHub Repo</a>
                </p> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;