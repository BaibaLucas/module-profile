// Types
// Auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SUGNUP_SUCCESS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';




// Actions
// Auth actions
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  ...user,
});

export const getMembersSuccess = (list) => ({
  type: GET_MEMBERS_SUCCESS,
  list,
});