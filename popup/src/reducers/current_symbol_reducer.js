import {
  RECEIVE_CURRENT_SYMBOL,
  CLEAR_CURRENT_SYMBOL,
} from '../actions/current_symbol_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SYMBOL:
      return action.symbol;

    case CLEAR_CURRENT_SYMBOL:
      return null;

    default:
      return state;
  }
};
