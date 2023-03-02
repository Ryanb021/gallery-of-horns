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

  handleHeaderClick = () => {
    this.props.handleOpenModal( this.props.title, this.props.imageURL, this.props.description);
    this.handleWaves();
  }

  render() {
    return (
      <article className="beasts">
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
        <p>💖{this.state.waves} Favorite/s</p>
        <p className="clickme" onClick={this.handleWaves}>---Like me! Love me! Please!---</p>
        <img onClick={this.handleHeaderClick}//, {this.props.addHearts}
          src={this.props.imageURL}
          alt={this.props.keyword}
          title={this.props.title}
          description={this.props.description}
          //onClick={this.props.addHearts}
        />

      </article>
    )
  };
}

export default HornedBeast;
