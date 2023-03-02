import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';



class Main extends React.Component {
  render() {

    let horns = [];
    this.props.data.forEach((creatures, index) => {
      //console.log(creatures.description);
      horns.push(
        <HornedBeast
          title={creatures.title}
          imageURL={creatures.image_url}
          description={creatures.description}
          addHearts={this.props.addHearts}
          handleOpenModal={this.props.handleOpenModal}
          key={index}
        />
      )
    })

    return (
      <main>
        {horns}
      </main>

    )

  }
}

export default Main;
