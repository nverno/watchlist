export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RENAME_LIST = 'RENAME_LIST';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_OPEN_LIST = 'RECEIVE_OPEN_LIST';
export const RECEIVE_CLOSE_LIST = 'RECEIVE_CLOSE_LIST';

export const closeList = (name) => ({
  type: RECEIVE_CLOSE_LIST,
  name,
});

export const openList = (name) => ({
  type: RECEIVE_OPEN_LIST,
  name,
});

export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists,
});

export const removeList = (name) => ({
  type: REMOVE_LIST,
  name,
});

export const addToList = (name, items) => ({
  type: RECEIVE_LIST,
  list: {
    name,
    items,
  },
});

export const createList = (name) => ({
  type: RECEIVE_LIST,
  list: {
    name,
    items: [],
  },
});

export const renameList = (newName, oldName) => ({
  type: RENAME_LIST,
  newName,
  oldName,
});

export const updateList = (list) => ({
  type: RECEIVE_LIST,
  list,
});
