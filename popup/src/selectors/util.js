const moment = require('moment-timezone');

export const fmt = (n) => n.toFixed(2).toLocaleString('en');

export const fmtPrice = (price) =>
  (!price && '—') || price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);

export const fmtPercent = (price) => (price ? fmt(100 * price) + '%' : '—');

export const fmtClass = (val) => (val && val > 0 ? 'positive' : 'negative');

// Time
export const isMarketOpen = () => {
  const now = moment.tz('America/New_York');
  const day = now.day();
  const hour = now.hour();
  if (day === 0 || day === 6) return false; // weekend
  if (hour < 4 || hour > 20) return false; // extended hours
  return true;
};
