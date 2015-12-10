import * as React    from 'react';
import { Component } from 'flumpt';

class Clicker extends Component {

  componentDidMount () {
    this.dispatch('increment');
  }

  render () {
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.dispatch('increment')}>increment</button>
      </div>
    );
  }

}

export default Clicker;
