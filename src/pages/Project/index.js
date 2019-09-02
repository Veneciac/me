import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
class Project extends Component {
  render() {
    return (
      <div>
        <Grid container columns={4} centered verticalAlign="middle">
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card
              link
              header="Rick Sanchez"
              meta="Scientist"
              description={[
                'Rick is a genius scientist whose alcoholism and reckless,',
                ' nihilistic behavior are a source of concern for his family.'
              ].join('')}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Project;
