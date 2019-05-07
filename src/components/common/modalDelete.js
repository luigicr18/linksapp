import React from 'react';
import { Alert,Button,Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const modalDelete = (props) => {
    return (
        <div>
            <Modal
                show={props.showDeleteModal}
                onHide={props.hideDeleteModal}
                aria-labelledby="contained-modal-title"
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.elementToDelete && !props.error  &&
                <Alert bsStyle="warning">
                    {props.message1} <strong>{props.elementToDelete.title}</strong>?
                </Alert>
                }
                {props.elementToDelete && props.error &&
                <Alert bsStyle="warning">
                    {props.message2} <strong>{props.error} </strong>
                </Alert>
                }
                {props.elementToDelete && props.isFetching && !props.error &&
                <Alert bsStyle="success">
                    <strong>Deleting.... </strong>
                </Alert>
                }
                {!props.elementToDelete && !props.error &&
                <Alert bsStyle="success">
                    {props.message3} <strong>{props.successMsg} </strong>
                </Alert>
                }
            </Modal.Body>
            <Modal.Footer>
                {!props.successMsg  &&
                <div>
                <Button onClick={props.cofirmDelete(props.elementToDelete.id)}>Yes</Button>
                <Button onClick={props.hideDeleteModal}>No</Button>
                </div>
                }
                {props.successMsg  &&
                <Button onClick={props.hideDeleteModal}>Close</Button>
                }
            </Modal.Footer>
            </Modal>
        </div>
    )
}

modalDelete.propTypes = {
    showDeleteModal: PropTypes.bool.isRequired,
    hideDeleteModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    error: PropTypes.string,
    message1: PropTypes.string,
    message2: PropTypes.string,
    message3: PropTypes.string,
    successMsg: PropTypes.string,
}


export default modalDelete;