import Immutable from 'immutable';
import { reducers as uiReducers } from './ui-reducers';

const redKey = {
  valueOf: '$redKey$',
};

const valKey = {
  valueOf: '$valKey$',
};

let initialState = Immutable.fromJS({});

(function initReducers() {
  uiReducers.forEach((reducer) => {
    const fnPath = [...reducer.cursor, redKey];
    let fnSet = initialState.getIn(fnPath, null);
    if (!fnSet) {
      fnSet = Immutable.Set();
    }
    fnSet = fnSet.add(reducer.fn);
    initialState = initialState.setIn(fnPath, fnSet);
    if (reducer.hasOwnProperty('init')) {
      initialState = initialState.setIn([...reducer.cursor, valKey], reducer.init);
    }
  });
}());

/*function hydrateState(state) {
}*/

export function trieducer(state = initialState, action) {
  if (action.cursor) {
    const path = [];
    const subscribed = [];
    for (let i = 0; i < action.cursor.length - 1; i++) {
      path.push(action.cursor[i]);
      const reducers = state.getIn([...path, redKey], null);
      if (reducers) {
        for (const fn of reducers.values()) {
          if (fn.listenChildren) {
            subscribed.push(fn);
          }
        }
      }
    }
    const reducers = [...state.getIn([...action.cursor, redKey], []), ...subscribed];
    const st = reducers.reduce((newState, nextReducer) => nextReducer(newState, action), state);
    return st;
  }
  return state;
}

export function get(state, path, ifMissing) {
  return state.getIn([...path, valKey], ifMissing);
}

export function set(state, path, value) {
  return state.setIn([...path, valKey], value);
}
