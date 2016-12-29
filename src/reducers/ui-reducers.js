import { get, set } from './composed-reducer';

export const TOGGLE_MENU = ['ui', 'root', 'sideMenuOpen'];

function toggleSideMenu(state, action) {
  const currentMenuState = get(state, TOGGLE_MENU, false);
  return set(state, TOGGLE_MENU, !currentMenuState);
}

toggleSideMenu.listenChildren = false;

function testRootListener(state, action) {
  console.log(`got the action from ${action.cursor}`);
  return state;
}
testRootListener.listenChildren = true;

export const reducers = [
  {
    cursor: TOGGLE_MENU,
    fn: toggleSideMenu,
    init: false,
  },
  {
    cursor: ['ui'],
    fn: testRootListener,
  },
];
