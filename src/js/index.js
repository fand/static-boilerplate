import * as React from 'react';
import { render } from "react-dom";
import App from './components/App';

import logger from './middlewares/logger';

// Setup renderer
const app = new App({
  renderer: el => {
    render(el, document.querySelector("#root"));
  },
  initialState: {
    count  : 0,
    button : 'click me',
  },
  middlewares: [
    logger,
  ]
});

// Fire renderer
app.update(x => x);
