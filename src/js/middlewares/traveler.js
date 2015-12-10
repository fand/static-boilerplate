import * as React from 'react';
import { Component } from 'flumpt';

let committed = null;
const states = [];

export const traveler = (state) => {
  if (state === null) {
    committed = state;
  }
  else {
    states.push(state);
  }
  return state;
};


export class Viewer extends Component {

  renderStates () {
    const renderedStates = states.map((s, i) => (
      <li key={i}>
        {JSON.stringify(s)}
      </li>
    ));

    return <ul>{renderedStates}</ul>;
  }

  render () {
    const style = {
      position   : 'fixed',
      width      : '300px',
      height     : '100%',
      top        : 0,
      right      : 0,
      background : '#123',
      color      : 'white',
    };

    return  (
      <div style={style}>
        {this.renderStates()}
      </div>
    );
  }

}
