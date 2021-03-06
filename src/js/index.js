import * as React from 'react';
import { render } from "react-dom";
import App from './components/App';

import logger from './middlewares/logger';
import { traveler, bindApp } from './middlewares/traveler';

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
    traveler,
    logger,
  ]
});

bindApp(app);

// Fire renderer
app.update(x => x);
