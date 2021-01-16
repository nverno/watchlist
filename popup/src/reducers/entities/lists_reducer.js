import {
  RENAME_LIST,
  RECEIVE_LIST,
  REMOVE_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let res;

  switch (action.type) {
    case RECEIVE_LIST:
      res = action.list.items;
      if (state[action.name])
        res = [...new Set(res.concat(state[action.name]))];
      return Object.assign({}, state, { [action.list.name]: res });

    case REMOVE_LIST:
      res = Object.assign({}, state);
      delete res[action.name];
      return res;

    case RENAME_LIST:
      res = Object.assign({}, state);
      res[action.newName] = Object.assign({}, res[action.oldName]);
      delete res[action.oldName];
      return res;

    default:
      return state;
  }
};
