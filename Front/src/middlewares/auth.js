// Package imports
import axios from 'axios';

// Local imports
import { apiUrl } from './url';
import { signupSuccess } from '../store/action';
import { getMembersSuccess, imgUploadSuccess } from '../store/action';

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
          ...response.data.data
        });
        console.log('Login Success --->', response.data.data);
      }).catch((error) => {
        console.log('Login Failure ---->', error);
        store.dispatch({
          type: 'LOGIN_FAILURE'
        })
      });
      break;
    };

    case 'UPDATE_IMG_PROFIL': {
      const { auth: { id } } = store.getState();
      const formData = new FormData();
      formData.append(`myImage`, action.formData);
      const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      };
      axios.post(`${apiUrl}/upload/${id}`, formData, config)
        .then((response) => {
          console.log('The file is successfully uploaded');
          console.log('response.data --->', response.data);
          console.log("imgProfile---->", response.data.data.profilurl);
          store.dispatch(imgUploadSuccess(response.data.data));
        }).catch((error) => {
          console.log('Oups', error);
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

    case 'EDIT_USER_USERNAME': {
      const { auth: { editusername, id } } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/username/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          editusername,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response);
            store.dispatch({ type: 'EDIT_SUCCESSFULLY' });
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
      break;
    };

    case 'EDIT_USER_EMAIL': {
      const { auth: { editemail, id } } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/email/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          editemail,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response);
            store.dispatch({ type: 'EDIT_SUCCESSFULLY' });
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
      break;
    };

    case 'EDIT_USER_PASSWORD': {
      const { auth: { editpassword, id } } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/password/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          editpassword,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response);
            store.dispatch({ type: 'EDIT_SUCCESSFULLY' });
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
      break;
    };

    case 'GET_ALL_MEMBERS': {
			axios.get(`${apiUrl}/member`)
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