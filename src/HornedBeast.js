import React from "react";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props){
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
      <article>
        <h2>{this.props.name}</h2>
        <p>{this.state.waves} greetings</p>
        <p onClick={this.handleWaves}>Say Hello!</p>
        <img
        src={this.props.imageURL}
        alt={this.props.alt}
        />
      </article>
    )
  };
}

export default HornedBeast;
