import {
  SET_TOKEN,
  SET_SESSION_ID,
  SET_LOGGED_IN,
} from '../actions/actionTypes'

export function setToken(token) {
  return {
    type: SET_TOKEN,
    data: {token},
  }
}

export function setSessionId(sessionId) {
  return {
    type: SET_SESSION_ID,
    data: {sessionId},
  }
}

export function setLoggedIn(data) {
  return {
    type: SET_LOGGED_IN,
    data,
  }
}
