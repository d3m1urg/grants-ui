import { get, set } from './composed-reducer';

import { TOGGLE_MENU_ACTION } from '../actions/ui-actions';

const { CURSOR: TOGGLE_MENU_CURSOR } = TOGGLE_MENU_ACTION;

function toggleSideMenu(state, action) {
  const currentMenuState = get(state, action.cursor, false);
  return set(state, action.cursor, !currentMenuState);
}

toggleSideMenu.listenChildren = false;

function testChildListener(state, action) {
  console.log(`heard from ${action.cursor}`);
  return state;
}

testChildListener.listenChildren = true;

export const reducers = [
  {
    cursor: TOGGLE_MENU_CURSOR,
    fn: toggleSideMenu,
    init: false,
  },
  {
    cursor: ['ui'],
    fn: testChildListener,
  },
];
