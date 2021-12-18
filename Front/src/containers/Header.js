// Local imports
import { connect } from 'react-redux';
import Header from '../components/Header';

// STATES that we give to Props (Header)
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);