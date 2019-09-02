import React, { Component } from 'react';

class ProjectDetail extends Component {
  componentDidMount() {
    console.log('PARAMS', this.props.location.detail)
  }
  
  render() {
    return <div></div>;
  }
}

export default ProjectDetail;
