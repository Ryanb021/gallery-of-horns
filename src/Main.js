import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render () {
    return(
      <main>
        <HornedBeast name="Batman"/>
        <HornedBeast name="Batman Who Laughs"/>
        <HornedBeast name="The Dark Knight"/>
      </main>
    )

  }
}

export default Main;
