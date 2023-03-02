import React from 'react';
import Main from './Main';
import Header from './Header'
import Footer from './Footer';
import data from './data.json';
import './App.css';
//import { Modal } from 'bootstrap';
import Modal from 'react-bootstrap/Modal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      image_url: '',
      title: '',
      description: '',
      showModal: false,
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💖'
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (title, url, description) => {
    this.setState({
      showModal: true,
      image_url: url,
      title: title,
      description: description,
    })
  }
  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main className="animals"
          data={data}
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal} />
        <Footer />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{this.state.personName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.image_url} alt={this.state.title} />
            <p>{this.state.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
