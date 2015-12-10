import * as React    from 'react';
import { Component } from 'flumpt';

class ClickCounter extends Component {

  componentDidMount () {
    console.log('>> mount ClickCounter');
  }

  componentWillUpdate () {
    console.log('## update ClickCounter');
  }

  render () {
    console.log('@@ render ClickCounter');
    return <span>{this.props.counter}</span>;
  }

}

class ClickButton extends Component {

  componentDidMount () {
    console.log('>> mount ClickButton');
  }

  componentWillUpdate () {
    console.log('## update ClickButton');
  }

  render () {
    console.log('@@ render ClickButton');
    return (
      <button
        onClick={() => this.dispatch('increment')}>
        {this.props.button}!
      </button>
    );
  }

}

class Clicker extends Component {

  componentDidMount () {
    this.dispatch('increment');
  }

  render () {
    return (
      <div>
        <ClickCounter counter={this.props.count} />
        <ClickButton button={this.props.button} />
      </div>
    );
  }

}

export default Clicker;
