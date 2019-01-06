import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loader: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        loader: true,
        ...state
      };
    case HIDE_LOADER:
      return {
        loader: false,
        ...state
      };
    default:
      return {
        ...state,
      };
  }
};
