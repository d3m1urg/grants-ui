import { fromJS, Set as ISet } from 'immutable';
import { reducers as uiReducers } from './ui-reducers';

const redKey = {
  valueOf: '$redKey$',
};

const valKey = {
  valueOf: '$valKey$',
};

let initialState = fromJS({});

function traceback(cursor, state) {
  if (cursor.length === 1) {
    return state;
  }
  const trace = [...cursor];
  let fnSet = state.getIn([...cursor, redKey]);
  while (trace.length > 0) {
    trace.pop();
    const reducers = state.getIn([...trace, redKey], null);
    if (reducers) {
      for (const fn of reducers.values()) {
        if (fn.listenChildren) {
          fnSet = fnSet.add(fn);
        }
      }
    }
  }
  return state.setIn([...cursor, redKey], fnSet);
}

function sortByCursorLength(a, b) {
  if (a.cursor.length < b.cursor.length) return -1;
  if (a.cursor.length > b.cursor.length) return 1;
  return 0;
}

(function initReducers() {
  const redds = [...uiReducers];
  redds.sort(sortByCursorLength).forEach((reducer) => {
    const fnPath = [...reducer.cursor, redKey];
    let fnSet = initialState.getIn(fnPath, null);
    if (!fnSet) {
      fnSet = ISet();
    }
    fnSet = fnSet.add(reducer.fn);
    initialState = initialState.setIn(fnPath, fnSet);
    if (reducer.hasOwnProperty('init')) {
      initialState = initialState.setIn([...reducer.cursor, valKey], reducer.init);
    }
    initialState = traceback(reducer.cursor, initialState);
  });
}());

export function trieducer(state = initialState, action) {
  if (action.cursor) {
    const reducers = [...state.getIn([...action.cursor, redKey], [])];
    return reducers.reduce((newState, nextReducer) => nextReducer(newState, action), state);
  }
  return state;
}

export function get(state, path, ifMissing) {
  return state.getIn([...path, valKey], ifMissing);
}

export function set(state, path, value) {
  return state.setIn([...path, valKey], value);
}
