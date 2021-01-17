import { RECEIVE_BATCH_QUOTES } from '../../actions/stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BATCH_QUOTES:
      let ns = Object.assign({}, state);
      for (const [key, val] of Object.entries(action.data)) {
        ns[key] = val['quote'];
      }
      return ns;

    default:
      return state;
  }
};
