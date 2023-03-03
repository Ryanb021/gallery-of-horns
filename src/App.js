import React from 'react';
import Main from './Main';
import Header from './Header'
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import data from './data.json';
import FormComponent from './Form';
import './App.css';
//import ListGroup from 'react-bootstrap/ListGroup';
//import { Modal } from 'bootstrap';
//import Modal from 'react-bootstrap/Modal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      image_url: '',
      title: '',
      description: '',
      showModal: false,
      filterHorns: '',
      filterData: '',
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

  hornCount = (event) => {
    event.preventDefault();
    if (this.state.filterHorns === "4") {
      let newHorns = data.filter(i => i.horns >= 4);
      this.setState({ filterData: newHorns })

    } else if (this.state.filterHorns === "1") {
      let newHorns = data.filter(i => i.horns === 1);
      this.setState({ filterData: newHorns })

    } else if (this.state.filterHorns === "2") {
      let newHorns = data.filter(i => i.horns === 2);
      this.setState({ filterData: newHorns })

    } else if (this.state.filterHorns === "3") {
      let newHorns = data.filter(i => i.horns === 3);
      this.setState({ filterData: newHorns })

    } else if (this.state.filterHorns === "all") {
      this.setState({ filterData: data })
    }
  }

  select = (event) => {
    this.setState({ filterHorns: event.target.value })
  }

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />

        <FormComponent
          hornCount={this.hornCount}
          select={this.select}
        />

        <Main
          data={this.state.filterData}
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
          horns={this.state.horns}
        />

      </>
    );
  }
}

export default App;
