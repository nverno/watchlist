export const fmt = (n) => n.toFixed(2).toLocaleString('en');

export const fmtPrice = (price) =>
  (!price && '—') || price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);

export const fmtPercent = (price) => (price ? fmt(100 * price) + '%' : '—');

export const fmtClass = (val) => (val && val > 0 ? 'positive' : 'negative');
