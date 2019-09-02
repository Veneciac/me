import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' };

  componentDidMount() {
    this.setState({
      activeItem: this.props.location.pathname.slice(1, this.props.location.pathname.length)
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        pointing
        secondary
        style={{
          height: '8vh'
        }}
      >
        <Menu.Menu
          position="right"
          style={{
            marginRight: '5vw'
          }}
        >
          <Route
            render={({ history }) => (
              <Menu.Item
                style={{
                  marginHorizontal: '1vw'
                }}
                name="home"
                active={activeItem === 'home'}
                onClick={() => {
                  history.push('/');
                  this.setState({ activeItem: 'home' });
                }}
              />
            )}
          />
          <Route
            render={({ history }) => (
              <Menu.Item
                style={{
                  marginHorizontal: '1vw'
                }}
                name="project"
                active={activeItem === 'project'}
                onClick={() => {
                  history.push('/project');
                  this.setState({ activeItem: 'project' });
                }}
              />
            )}
          />

          <Route
            render={({ history }) => (
              <Menu.Item
                style={{
                  marginHorizontal: '1vw'
                }}
                name="profile"
                active={activeItem === 'profile'}
                onClick={() => {
                  history.push('/profile');
                  this.setState({ activeItem: 'profile' });
                }}
              />
            )}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
export default withRouter(NavBar);
