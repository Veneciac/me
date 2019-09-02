import React, { Component } from 'react';
import bgImg from '../../assets/bg.png';

class Home extends Component {
  render() {
    return (
      <div
        style={{
          // backgroundImage: `url(${bgImg})`,
          height: '100vh',
          width: '100%',
          backgroundColor: '#f2f2f2'
        }}
      >
        <text>ini home</text>
      </div>
    );
  }
}

export default Home;
