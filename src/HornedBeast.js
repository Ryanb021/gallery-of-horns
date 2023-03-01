import React from "react";
//import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0
    };
  }

  handleWaves = () => {
    //when user click on "Say Hello" update the value of this.state.waves
    this.setState({
      waves: this.state.waves + 1,
    });
  }

  render() {
    return (
      <article className="beasts">
        <h2>{this.props.title}</h2>
        <p>{this.state.waves} 💖Favorite/s --- </p>
        <p className="clickme" onClick={this.handleWaves}>Like me! Love me! Please!---</p>
        <img
          src={this.props.imageURL}
          alt={this.props.keyword}
          description={this.props.description}
        />

      </article>
    )
  };
}

export default HornedBeast;
