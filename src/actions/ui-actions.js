export const TOGGLE_MENU_ACTION = {
  TYPE: 'TOGGLE_MENU',
  CURSOR: ['ui', 'root', 'sideMenuOpen'],
};

export function toggleMenu() {
  return {
    type: TOGGLE_MENU_ACTION.TYPE,
    cursor: TOGGLE_MENU_ACTION.CURSOR,
  };
}
