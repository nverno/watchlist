import {
  RECEIVE_LIST_ERRORS,
  RECEIVE_LIST,
  CLEAR_LIST_ERRORS,
} from '../../actions/list_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;

    case RECEIVE_LIST:
    case CLEAR_LIST_ERRORS:
      return [];

    default:
      return state;
  }
};
