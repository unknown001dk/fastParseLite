const { fastParseLite, flatten } = require('../src/index');

const input = `
user{
  name=Alice
  age=#25
  address{
    city=New York
    zip=#10001
    location{
      data=dummy
    }
  }
  active=!true
}
`;

const result = fastParseLite(input);

const flat = flatten(result.user);
console.log("Flattened:", flat);
