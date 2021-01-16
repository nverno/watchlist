export const RECEIVE_API_KEYS = 'RECEIVE_API_KEYS';

export const receiveApiKeys = (keys) => ({
  type: RECEIVE_API_KEYS,
  keys,
});
