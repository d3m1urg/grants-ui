import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/ui-actions';
import App from './index';

const mapDispatchToProps = dispatch => ({
  onRouteChange: () => {
    dispatch(toggleMenu());
  },
});

const AppContainer = connect(() => ({}), mapDispatchToProps)(App);

export default AppContainer;
