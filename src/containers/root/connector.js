import { connect } from 'react-redux';
import { TOGGLE_MENU_ACTION, toggleMenu } from '../../actions/ui-actions';
import { get } from '../../reducers/composed-reducer';
import Root from './index';

const { CURSOR: TOGGLE_MENU_CURSOR } = TOGGLE_MENU_ACTION;

const mapStateToProps = state => ({
  open: get(state, TOGGLE_MENU_CURSOR, false),
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => setTimeout(() => dispatch(toggleMenu()), 0),
});

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
