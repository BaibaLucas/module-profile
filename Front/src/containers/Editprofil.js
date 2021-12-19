// Package imports
import { connect } from 'react-redux';

// Local imports
import Editprofil from '../components/Editprofil';

// STATES that we give to Props (EditProfil)
const mapStateToProps = (state) => ({
  isLoaded: state.auth.isLoaded,
  success: state.auth.success,
  imgprofil: state.auth.imgprofil,
});

const mapDispatchToProps = (dispatch) => ({

  handleSubmit: (formData) => {
    dispatch({ type: "CHANGE_LOADER"});
    dispatch({ type: "UPDATE_IMG_PROFIL", formData});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Editprofil);
