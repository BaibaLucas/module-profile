// Package imports
import { connect } from 'react-redux';

// Local imports
import Home from '../components/Home';


// STATES that we give to Props (Signup)
const mapStateToProps = (state) => ({
  members: state.auth.memberslist
});

const mapDispatchToProps = (dispatch) => ({
  loadMembersData: () => {
    dispatch({ type: 'GET_ALL_MEMBERS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);