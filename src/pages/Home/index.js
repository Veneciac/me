import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
        }}>
        
        <h1 style={{
          fontSize: 150,
          fontFamily: 'Concert One'
        }}>Hello,</h1>

        <div style={{
          border: 1,
          borderColor: 'black',
          height: '400px',
          width: '400px',
          backgroundColor: 'grey'
        }}>

        </div>
      </div>
    );
  }
}

export default Home;
