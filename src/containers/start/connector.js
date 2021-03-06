import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/ui-actions';
import Start from './index';

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(toggleMenu());
  },
});

const StartContainer = connect(() => ({}), mapDispatchToProps)(Start);

export default StartContainer;
