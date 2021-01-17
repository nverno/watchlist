import { saveSettings } from '../../util/settings';
import {
  RENAME_LIST,
  RECEIVE_LIST,
  REMOVE_LIST,
  RECEIVE_LISTS,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let res;

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;

    case RECEIVE_LIST:
      res = action.list.items;
      if (state[action.list.name])
        res = [...new Set(res.concat(state[action.list.name]))];
      res = Object.assign({}, state, { [action.list.name]: res });
      break;

    case REMOVE_LIST:
      res = Object.assign({}, state);
      delete res[action.name];
      break;

    case RENAME_LIST:
      res = Object.assign({}, state);
      res[action.newName] = Object.assign({}, res[action.oldName]);
      delete res[action.oldName];
      break;

    default:
      return state;
  }

  saveSettings({ lists: res });
  return res;
};
