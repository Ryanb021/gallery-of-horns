import React from "react";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <p>text here</p>
      </article>

    )

  };

}

export default HornedBeast;
