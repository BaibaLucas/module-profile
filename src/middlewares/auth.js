// Package imports
import axios from 'axios';

// Local imports
import { apiUrl } from './url';
import { signupSuccess } from '../store/action';
import { getMembersSuccess } from '../store/action';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOGIN': {
      const { auth: { email, password } } = store.getState();

      const config = {
        method: 'post',
        url: `${apiUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      };

      axios(config)
      .then((response) => {
        store.dispatch({
          type: 'LOGIN_SUCCESS',
        });
      }).catch((error) => {
        console.log(error);
        store.dispatch({
          type: 'LOGIN_FAILURE'
        })
      });
      break;
    };

    case 'USER_SIGNUP': {
      const { auth: { username, email, password } } = store.getState();

      const config = {
        method: 'post',
        url: `${apiUrl}/user`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username,
          email,
          password,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(signupSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
      break;
    };

    case 'GET_ALL_MEMBERS': {
			axios.get(`${apiUrl}/members`)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getMembersSuccess(response.data.data));
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

    
    
    default:
      next(action);
  }
};

export default auth;