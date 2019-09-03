import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <h1
            style={{
              fontSize: 150,
              fontFamily: 'Concert One'
            }}
          >
            Hello,
          </h1>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column>
            <div
              style={{
                border: 1,
                borderColor: 'black',
                height: '60vh',
                width: '45vw',
                backgroundColor: 'grey'
              }}
            ></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
