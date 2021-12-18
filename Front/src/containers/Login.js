// Package imports
import { connect } from 'react-redux';

// Local imports
import Login from '../components/Login';
import { changeAuthField } from '../store/action';


// STATES that we give to Props (Login)
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  isLogged: state.auth.isLogged,
  loginError: state.auth.loginError,
  isLoaded: state.auth.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleLogin: () => {
    dispatch({ type: 'CHANGE_LOADER'});
    dispatch({ type: 'LOGIN'});
  },

  handleLogout: () => {
    dispatch({ type: 'CHANGE_LOADER'});
    dispatch({ type: 'LOGOUT' });
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Login);