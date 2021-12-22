// Local imports
import { connect } from 'react-redux';
import Account from '../components/Account';
import { changeAuthField } from '../store/action';

// STATES that we give to Props (Profil)
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  userid: state.auth.id,
  username: state.auth.username,
  email: state.auth.email,
  imgprofil: state.auth.imgprofil,
  success: state.auth.success,
});

const mapDispatchToProps = (dispatch) => ({

  changeLoader: () => {
    dispatch({ type: "CHANGE_LOADER"});
  },
  changeSuccess: () => {
    dispatch({ type: 'CHANGE_SUCCESS' });
  },
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
  handleSubmitUsername: () => {
      dispatch({type: 'EDIT_USER_USERNAME'});
  },
  handleSubmitEmail: () => {
    dispatch({type: 'EDIT_USER_EMAIL'});
},
  handleSubmitPassword: () => {
    dispatch({type: 'EDIT_USER_PASSWORD'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Account);