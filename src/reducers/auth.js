// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

// Initial State user infos
const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  imgprof: '',
  isLogged: false,
  role_id: '',
  loginError: false,
  memberslist: [],
};

const reducer = (oldState = initialState, action = {}) => {
  
  switch (action.type) {
    
    case CHANGE_AUTH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        id: action.id,
        username: action.username,
        email: action.email,
        imgprof: action.imgprof,
        password: '',
        isLogged: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...oldState,
        email: '',
        password: '',
        isLogged: false,
        loginError: true,
      };

    case 'GET_MEMBERS_SUCCESS':
      return {
        ...oldState,
        memberslist: action.list,
      };

    default:
      return {...oldState}
  }
};

export default reducer;