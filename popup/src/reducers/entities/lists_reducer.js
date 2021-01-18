import { saveSettings } from '../../util/settings';
import {
  RENAME_LIST,
  RECEIVE_LIST,
  REMOVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST_ITEM,
} from '../../actions/list_actions';
import { getList } from '../../selectors/lists';

const removeList = (name, lists) => {
  return lists.filter((list) => list.name !== name);
};

export default (state = [], action) => {
  Object.freeze(state);
  let res, old;

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;

    case RECEIVE_LIST:
      res = [...state];
      let items = action.list.items.map((item) => item.toUpperCase());
      if ((old = getList(action.list.name, state))) {
        items = [...new Set(items.concat(old.items))];
        old.items = items;
      } else {
        res.push({ name: action.list.name, items });
      }
      break;

    case REMOVE_LIST_ITEM:
      res = [...state];
      old = getList(action.list.name, state);
      old.items = old.items.filter((ele) => ele !== action.item);
      break;

    case REMOVE_LIST:
      res = removeList(action.name, state);
      break;

    case RENAME_LIST:
      res = [...state];
      for (const list of state) {
        if (list.name === action.oldName) {
          list.name = action.newName;
          break;
        }
      }
      break;

    default:
      return state;
  }

  saveSettings({ lists: res });
  return res;
};
