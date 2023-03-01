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
        showModal: false,
        personName: ''
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

  handleOpenModal = (name) => {
    this.setState({
      showModal: true,
      personName: name
    })
  }
  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main 
        data={data} 
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal} />
        <Footer />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.personName}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
