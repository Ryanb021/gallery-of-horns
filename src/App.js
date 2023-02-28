import React from 'react';
import Main from'./Main';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>Gallery of Horns</h1>
        </header>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;
