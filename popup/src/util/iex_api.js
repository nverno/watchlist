/**
 * IexCloud financial API:
 * https://iexcloud.io/docs/api/
 */
// import { mapKeys } from './utils';
const BASE_URL = 'https://cloud.iexapis.com/stable';

const createUrl = (endpoint, params, apiKey) => {
  params.token = apiKey;
  const encoded = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `${BASE_URL}${endpoint}?${encoded}`;
};

const sendRequest = async (endpoint, params, apiKey) => {
  const url = createUrl(endpoint, params, apiKey);
  console.log('API: ', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();

  // if (typeof data['Error Message'] !== 'undefined') {
  //   throw new Error(data['Error Message']);
  // } else if (typeof data['Note'] !== 'undefined') {
  //   throw new Error(`API limit exceeded: ${data['Note']}`);
  // }

  return data;
};

// Quotes
export const fetchQuotes = async (symbols, params, apiKey) => {
  return sendRequest(
    '/stock/market/batch',
    {
      symbols: symbols.join(','),
      types: 'quote',
      ...params,
    },
    apiKey
  );
};
