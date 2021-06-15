import React, { Component } from 'react';

import Mocks from '../Mock/Mock'


class Items extends Component {

  constructor() {
    super();
    this.state = {
      lag: [],
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        lag: Mocks,
      });
    }, 2000);
  }

  render() {
    return (
        <div>
          {this.state.lag.map((lag) => {
            return <p>{lag.title} - {lag.description}</p>;
          })}
        </div>
    );
  }
}

export default Items; 