// Types
// Auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SUGNUP_SUCCESS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const CHANGE_IMG_FIELD = 'CHANGE_IMG_FIELD';
export const IMG_UPLOAD_SUCCESS = 'IMG_UPLOAD_SUCCESS';








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
export const changeImgField = (file) => ({
  type: CHANGE_IMG_FIELD,
  file,
});

export const imgUploadSuccess = (user) => ({
  type: IMG_UPLOAD_SUCCESS,
  ...user,
});

