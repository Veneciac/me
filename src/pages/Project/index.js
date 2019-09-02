import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import shareBoxImg from '../../assets/shareboxSS.png';
import { Link } from 'react-router-dom';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'ShareBox',
        description: 'ShareBox is a mini wordpress website where you can add background song to your article and maximize the experience.',
        link: 'sharebox.veneciac.xyz',
        video: '',
        img: shareBoxImg
      }, {
        name: 'ShareBox',
        description: 'ShareBox is a mini wordpress website where you can add background song to your article and maximize the experience.',
        link: 'sharebox.veneciac.xyz',
        video: '',
        img: shareBoxImg
      }, {
        name: 'ShareBox',
        description: 'ShareBox is a mini wordpress website where you can add background song to your article and maximize the experience.',
        link: 'sharebox.veneciac.xyz',
        video: '',
        img: shareBoxImg
      }]
    }
  }

  renderCard = () => {
    return this.state.data.map((e, i) => {
      return (
        <Grid.Column key={i} mobile={16} tablet={10} computer={5}>
          <Link to={{
            pathname:`/project/${e.name}`, 
            detail: {
                ...e
            }}}>
          <Card
            style={{
              minWidth: '29vw'
            }}
            link
          >
            <Image src={e.img} fluid />
            <Card.Content>
              <Card.Header textAlign="center" >{e.name}</Card.Header>
              <Card.Meta>
                {/* <span className="date">e.link</span> */}
              </Card.Meta>
              <Card.Description textAlign="center">{e.description}</Card.Description>
            </Card.Content>
          </Card>
          </Link>

      </Grid.Column>
      )
    })
  }

  render() {
    return (
      <div>
        <Grid columns={5} centered verticalAlign="middle">
          {this.renderCard()}
        </Grid>
      </div>
    );
  }
}
export default Project;
