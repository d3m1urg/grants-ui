import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { createStore } from 'redux';

import 'flexboxgrid/dist/flexboxgrid.css';

import App from './components/app';

injectTapEventPlugin();

// const store = createStore

render(<App />, document.getElementById('app'));
