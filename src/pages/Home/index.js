import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <text>this is home!</text>
        <svg height="500" width="500">
          <polygon
            points="250,60 100,400 400,400"
            class="triangle"
          />
          Sorry, your browser does not support
          inline SVG.
        </svg>
      </div>
    );
  }
}

export default Home;
