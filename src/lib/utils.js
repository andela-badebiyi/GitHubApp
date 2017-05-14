import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action';

const utils = {
    usernameIsValid: function(username) {
        if (username) {
            return username.trim() && !username.includes(' ');
        }
        return false;
    }
}

export function connectToRedux(component) {
    function mapStateToProps(state) {
        return {
            history: state.history,
            profile: state.profile
        }
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators(actionCreators, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(component);

}

export default utils;
