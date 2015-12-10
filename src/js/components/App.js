import * as React from 'react';
import { Flux }   from 'flumpt';
import Clicker    from './Clicker';

class App extends Flux {

  subscribe () {
    this.on('increment', () => {
      this.update(({ count, button }) => ({
        count : count + 1,
        button,
      }));
    });
  }

  render (state) {
    return <Clicker {...state}/>;
  }

}

export default App;
