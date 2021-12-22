// Package imports
import { connect } from 'react-redux';

// Local imports
import Home from '../components/Home';


// STATES that we give to Props (Home)
const mapStateToProps = (state) => ({
  members: state.auth.memberslist,
  isLogged: state.auth.isLogged,
  username: state.auth.username,
  isLoaded: state.auth.isLoaded
});

const mapDispatchToProps = (dispatch) => ({
  
  loadMembersData: () => {
    dispatch({ type: 'CHANGE_LOADER'});
    dispatch({ type: 'GET_ALL_MEMBERS'});
    dispatch({ type: 'CHANGE_ERROR'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);