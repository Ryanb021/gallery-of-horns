import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal className="title"
        show={this.props.show} onHide={this.props.onHide} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="animals" src={this.props.src} alt={this.props.alt} />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
