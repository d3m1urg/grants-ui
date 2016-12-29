import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { trieducer } from './reducers/composed-reducer';

// import 'flexboxgrid/dist/flexboxgrid.css';

import App from './components/app';

injectTapEventPlugin();

const store = createStore(trieducer);

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
