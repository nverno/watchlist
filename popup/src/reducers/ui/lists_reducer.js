import {
  RECEIVE_OPEN_LIST,
  RECEIVE_CLOSE_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_OPEN_LIST:
      return Object.assign({}, state, { [action.name]: true });

    case RECEIVE_CLOSE_LIST:
      let res = Object.assign({}, state);
      delete res[action.name];
      return res;

    default:
      return state;
  }
};
