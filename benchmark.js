const { performance } = require('perf_hooks');
const { fastParseLite } = require('./src/index');

// 🟢 Sample JSON input (as a string)
const jsonString = JSON.stringify({
  user: {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      zip: 10001
    },
    active: true
  }
});

// 🔥 Equivalent fastParser input
const liteString = `
user{
  name=Alice
  age=#25
  address{
    city=New York
    zip=#10001
  }
  active=!true
}
`;

// Repeat the string to simulate large data
const repeatCount = 10000;
const largeJSON = `[${Array(repeatCount).fill(jsonString).join(",")}]`;
const largeLite = Array(repeatCount).fill(liteString).join("\n");

// 🟢 JSON Test
let t0 = performance.now();
const parsedJSON = JSON.parse(largeJSON);
let t1 = performance.now();
console.log(`🟢 JSON.parse took ${(t1 - t0).toFixed(2)} ms`);

// 🔥 fastParseLite Test
t0 = performance.now();
const parsedLite = fastParseLite(largeLite);
t1 = performance.now();
console.log(`🔥 fastParseLite took ${(t1 - t0).toFixed(2)} ms`);
