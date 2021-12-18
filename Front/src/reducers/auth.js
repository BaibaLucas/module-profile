// actions
import {
  CHANGE_AUTH_FIELD
} from '../store/action';

// Initial State user infos
const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  imgprofil: null,
  isLogged: false,
  loginError: false,
  memberslist: [],
  isLoaded: false,
  success: false,
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
        imgprofil: action.profilurl,
        password: '',
        isLogged: true,
        isLoaded: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...oldState,
        email: '',
        password: '',
        isLogged: false,
        loginError: true,
        isLoaded: true,
      };

    case 'LOGOUT':
      return {
        ...oldState,
        id: '',
        username: '',
        email: '',
        password: '',
        imgprofil: null,
        isLogged: false,
        isLoaded: true,
      };

    case 'IMG_UPLOAD_SUCCESS':
        return {
          ...oldState,
          id: action.id,
          username: action.username,
          email: action.email,
          imgprofil: action.profilurl,
          password: '',
          isLogged: true,
          isLoaded: true,
          success: true,
        };

    case 'CHANGE_LOADER':
      return {
        ...oldState,
        isLoaded: !oldState.isLoaded,
      };

    case 'CHANGE_SUCCESS':
      return {
        ...oldState,
        success: false,
      };

    case 'RESET_MEMBERS':
      return {
        ...oldState,
        memberslist: [],
      }

    case 'GET_MEMBERS_SUCCESS':
      return {
        ...oldState,
        memberslist: action.list,
        isLoaded: true,
      };

    default:
      return {...oldState}
  }
};

export default reducer;