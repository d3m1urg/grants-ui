import { TOGGLE_MENU } from '../reducers/ui-reducers';

export function toggleMenu() {
  return {
    type: 'TOGGLE_MENU',
    cursor: TOGGLE_MENU,
  };
}
