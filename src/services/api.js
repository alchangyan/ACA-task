import { get, post } from 'axios';
import config from '../config/default';
import {
  showLoader,
  hideLoader,
} from '../actions/loader';
import {
  setToken,
  setSessionId,
  setLoggedIn,
} from '../actions/auth';
import {
  setSnackBar,
} from '../actions/globals';

export function signUp(username, apiKey) {
  return async (dispatch, getState) => {
    dispatch(showLoader());
    const store = getState();
    
    // getting token
    let token = store.globals.token;
    let sessionId = store.globals.sessionId;
    let loggedIn = false;

    if (!token) {
      // getting session ID
      try {
        // getting token
        const url = `${config.host}${config.api.createToken}?api_key=${apiKey}`;
        const {data: createTokenResponse} = await get(url);

        if (createTokenResponse.success || token) {
          token = createTokenResponse.request_token;
          dispatch(setToken(token));
        }

        dispatch(setSnackBar({
          text: 'Please press link to confirm =>',
          linkSource: `https://www.themoviedb.org/authenticate/${token}`,
          linkText: 'Link',
        }));
      } catch(err) {
        dispatch(setSnackBar({
          text: 'Something goes wrong. Please check your API key.'
        }));
      }
    } else {
      try {
        if (!sessionId) {
          const url = `${config.host}${config.api.createSession}?api_key=${apiKey}`;
          const {data: createSessionResponse} = await post(url, {request_token: token});
          sessionId = createSessionResponse.session_id;
          dispatch(setSessionId(sessionId));
        }

        try {
          const url = `${config.host}${config.api.getUserInfo}?api_key=${apiKey}&session_id=${sessionId}`;
          const {data: getUserInfoResponse} = await get(url);
          if (getUserInfoResponse.username !== username) {
            dispatch(setSnackBar({
              text: 'You have entered an invalid username.'
            }));
          } else {
            loggedIn = true;
            dispatch(setLoggedIn({
              loggedIn,
              sessionId,
              apiKey,
              username,
              avatar: `https://secure.gravatar.com/avatar/${getUserInfoResponse.avatar.gravatar.hash}.jpg?s=64`
            }));
          }

        } catch(err) {
          dispatch(setSnackBar({
            text: 'Something goes wrong. Please reload the page and try again.'
          }));
        }
      } catch(err) {
        dispatch(setSnackBar({
          text: 'You do not accept permisstions or you have problems with your API key.'
        }));
      }
    }

    dispatch(hideLoader());
  };
}

export function signIn(apiKey, sessionId) {
  return async (dispatch, getState) => {
    dispatch(showLoader());

    try {
      const url = `${config.host}${config.api.getUserInfo}?api_key=${apiKey}&session_id=${sessionId}`;
      const {data: getUserInfoResponse} = await get(url);
      dispatch(setLoggedIn({
        loggedIn: true,
        sessionId,
        apiKey,
        username: getUserInfoResponse.username,
        avatar: `https://secure.gravatar.com/avatar/${getUserInfoResponse.avatar.gravatar.hash}.jpg?s=64`
      }));
    } catch(err) {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('sessionId');
      dispatch(setSnackBar({
        text: 'You do not accept permisstions or you have problems with your API key.'
      }));
    }
    
    dispatch(hideLoader());
  }
}