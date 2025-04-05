function fastParseLite(text) {
  const lines = text
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length && !l.startsWith("//") && !l.startsWith("#"));

  const stack = [{}];
  let current = stack[0];

  for (let line of lines) {
    if (line.endsWith('{')) {
      const key = line.slice(0, -1).trim();
      const newObj = {};
      current[key] = newObj;
      stack.push(current);
      current = newObj;
    } else if (line === '}') {
      current = stack.pop();
    } else {
      const [key, rawVal] = line.split('=').map(s => s.trim());
      let val;

      if (rawVal.startsWith('#')) {
        val = Number(rawVal.slice(1));
      } else if (rawVal.startsWith('!')) {
        val = rawVal.slice(1) === 'true';
      } else {
        val = rawVal;
      }

      current[key] = val;
    }
  }

  return stack[0];
}

function flatten(obj, prefix = '', result = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}_${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

module.exports = {
  fastParseLite,
  flatten
};
