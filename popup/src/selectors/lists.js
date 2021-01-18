export const getList = (name, lists) => {
  for (const list of lists) {
    if (list.name === name) return list;
  }
  return null;
};

export const listContains = (list, symbol) => {
  return list.items.some((item) => item === symbol);
};
