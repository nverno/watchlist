import { merge } from 'lodash';
import { RECEIVE_API_KEYS } from '../actions/settings_actions';

const _defaultState = {
  keys: {},
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_API_KEYS:
      let keys = Object.assign({}, state.keys);
      return Object.assign({}, state, merge(keys, action.keys));

    default:
      return state;
  }
};
