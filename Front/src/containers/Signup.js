// Package imports
import { connect } from 'react-redux';

// Local imports
import Signup from '../components/Signup';
import { changeAuthField } from '../store/action';


// STATES that we give to Props (Signup)
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  imgprof: state.auth.imgprof,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'USER_SIGNUP'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);