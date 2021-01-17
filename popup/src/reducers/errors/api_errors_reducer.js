import {
  RECEIVE_API_ERRORS,
  RECEIVE_BATCH_QUOTES,
  CLEAR_API_ERRORS,
} from '../../actions/stock_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_API_ERRORS:
      return [action.errors.message];

    case CLEAR_API_ERRORS:
    case RECEIVE_BATCH_QUOTES:
      return [];

    default:
      return state;
  }
};
