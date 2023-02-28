import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render () {
    return(
      <main>
        <HornedBeast name="Batman"/>
        <p>The horned hero. Fear him!</p>
        <HornedBeast name="Batman Who Laughs"/>
        <p>Batman's horned evil side. Very dangerous.</p>
        <HornedBeast name="The Dark Knight"/>
        <p>The ultimate horned dark knight!</p>
      </main>
    )

  }
}

export default Main;
