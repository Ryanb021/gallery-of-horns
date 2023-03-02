import React from 'react';
import Main from './Main';
import Header from './Header'
import SelectedBeast from './SelectedBeast';
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
    });
  }
  //toggleHearts = () => {
  //this.setState({
  //hearts: !this.state.show
  //})
  //}

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
        <Main
          data={data}
          addHearts={this.addHearts}
          //toggleHearts={this.toggleHearts}
          handleOpenModal={this.handleOpenModal} />
        <Footer />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          src={this.state.image_url}
          alt={this.state.keyword}
          title={this.state.title}
          description={this.state.description}
        />

      </>
    );
  }
}

export default App;
