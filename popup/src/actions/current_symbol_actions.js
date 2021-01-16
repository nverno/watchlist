export const RECEIVE_CURRENT_SYMBOL = 'RECEIVE_CURRENT_SYMBOL';
export const CLEAR_CURRENT_SYMBOL = 'CLEAR_CURRENT_SYMBOL';

export const clearCurrent = () => ({
  type: CLEAR_CURRENT_SYMBOL,
});

export const setCurrent = (symbol) => ({
  type: RECEIVE_CURRENT_SYMBOL,
  symbol,
});
