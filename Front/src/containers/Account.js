// Local imports
import { connect } from 'react-redux';
import Account from '../components/Account';

// STATES that we give to Props (Profil)
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  userid: state.auth.id,
  username: state.auth.username,
  email: state.auth.email,
  imgprofil: state.auth.imgprofil,
});

const mapDispatchToProps = (dispatch) => ({

  handleSubmit: (formData) => {
    dispatch({ type: "UPDATE_IMG_PROFIL", formData});
  },
  changeLoader: () => {
    dispatch({ type: "CHANGE_LOADER"});
  },
  changeSuccess: () => {
    dispatch({ type: 'CHANGE_SUCCESS' });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Account);