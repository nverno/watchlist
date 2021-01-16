import {
  RECEIVE_SEARCH_ERRORS,
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
} from '../../actions/search_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;

    case RECEIVE_SEARCH_RESULTS:
    case CLEAR_SEARCH_RESULTS:
      return [];

    default:
      return state;
  }
};
