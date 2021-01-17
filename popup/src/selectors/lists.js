export const getList = (name, lists) => {
  for (const list of lists) {
    if (list.name === name) return list;
  }
  return null;
};

export const removeList = (name, lists) => {
  return lists.filter((list) => list.name !== name);
};
