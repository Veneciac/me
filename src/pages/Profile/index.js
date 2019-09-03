import React, { Component } from 'react';
import profPic from '../../assets/profpic.jpg';
import { Image, Grid } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <Grid container>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Image src={profPic} size="large" bordered floated="right" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <h1>Venecia Calista</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
              ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </p>
            <Grid container>
              <Grid.Row>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                />
              </Grid.Row>
              <Grid.Row>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                />
              </Grid.Row>
              <Grid.Row>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                />
              </Grid.Row>
              <Grid.Row>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                />
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default Profile;
