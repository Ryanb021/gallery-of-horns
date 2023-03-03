import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';



class Main extends React.Component {
  render() {

    let hornsOfBeast = [];
    this.props.data.forEach((creatures, index) => {
      //console.log(creatures.description);
      hornsOfBeast.push(
        <HornedBeast
          title={creatures.title}
          imageURL={creatures.image_url}
          description={creatures.description}
          horns={creatures.horns}
          addHearts={this.props.addHearts}
          //toggleHearts={this.props.toggleHearts}
          handleOpenModal={this.props.handleOpenModal}
          key={index}
        />
      )
    })

    return (
      <main>
        {hornsOfBeast}
      </main>

    )

  }
}

export default Main;
