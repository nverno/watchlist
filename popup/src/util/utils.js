export const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

// split string, STR, by query, Q, returning parts marking those that matched
export const splitByMatches = (q, str) => {
  if (q.length === 0) return [];
  let m,
    i = 0,
    parts = [];
  const re = new RegExp(q, 'ig');

  while ((m = re.exec(str)) && i < str.length) {
    m.index > 0 &&
      parts.push({
        match: false,
        value: str.slice(i, m.index),
      });
    parts.push({
      match: true,
      value: str.slice(m.index, m.index + q.length),
    });
    i = m.index + q.length;
  }

  i < str.length &&
    parts.push({
      match: false,
      value: str.slice(i),
    });

  return parts;
};
