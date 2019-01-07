import {
  SHOW_LOADER,
  HIDE_LOADER,
  SET_LOGGED_IN,
  SET_TOKEN,
  SET_SESSION_ID,
  SET_SNACK_BAR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loggedIn: false,
  loader: false,
  showSnackBar: false,
  token: null,
  sessionId: null,
  sbText: '',
  sbLinkSource: '',
  sbLinkText: '',
  errors: [],
};

export default (state = INITIAL_STATE, action) => {
  state = {
    ...state,
    showSnackBar: false
  };

  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.data.token,
      };
    case SET_SESSION_ID:
      return {
        ...state,
        sessionId: action.data.sessionId,
      };
    case SET_LOGGED_IN:
      localStorage.setItem('sessionId', action.data.sessionId);
      localStorage.setItem('apiKey', action.data.apiKey);

      return {
        ...state,
        loggedIn: action.data.loggedIn,
        username: action.data.username,
        avatar: action.data.avatar,
      };
    case SET_SNACK_BAR:
      return {
        ...state,
        sbText: action.data.sbText || '',
        sbLinkSource: action.data.sbLinkSource || '',
        sbLinkText: action.data.sbLinkText || '',
        showSnackBar: true
      };
    default:
      return {
        ...state,
      };
  }
};
