import { saveSettings } from '../../util/settings';
import {
  RECEIVE_OPEN_LIST,
  RECEIVE_CLOSE_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let res;

  switch (action.type) {
    case RECEIVE_OPEN_LIST:
      res = Object.assign({}, state, { [action.name]: true });
      break;

    case RECEIVE_CLOSE_LIST:
      res = Object.assign({}, state);
      delete res[action.name];
      break;

    default:
      return state;
  }

  saveSettings({ ui: { lists: res } });
  return res;
};
