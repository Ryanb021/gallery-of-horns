import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';



class Main extends React.Component {
  render() {

    let hornsOfBeast = this.props.data.map((creatures, _id) => {
      //console.log(creatures.description);

        return <HornedBeast
          title={creatures.title}
          imageURL={creatures.image_url}
          description={creatures.description}
          horns={creatures.horns}
          addHearts={this.props.addHearts}
          //toggleHearts={this.props.toggleHearts}
          handleOpenModal={this.props.handleOpenModal}
          key={creatures._id}
        />
      
    });

    return (
      <main>
        {hornsOfBeast}
      </main>

    )

  }
}

export default Main;
