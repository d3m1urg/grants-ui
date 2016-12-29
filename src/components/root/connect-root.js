import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/ui-actions';
import { get } from '../../reducers/composed-reducer';
import { TOGGLE_MENU } from '../../reducers/ui-reducers';
import Root from './root';

const mapStateToProps = state => ({
  open: get(state, TOGGLE_MENU, false),
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => {
    dispatch(toggleMenu());
  },
});

const ConnectRoot = connect(mapStateToProps, mapDispatchToProps)(Root);

export default ConnectRoot;
