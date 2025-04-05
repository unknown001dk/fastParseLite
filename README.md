# ⚡ fastparselite

A blazing-fast, lightweight parser for custom config-like syntax. Convert human-readable structured text into JSON objects in milliseconds — with optional flattening support!

![npm](https://img.shields.io/npm/v/fastparselite)
![downloads](https://img.shields.io/npm/dt/fastparselite)
![license](https://img.shields.io/npm/l/fastparselite)

---

## ✨ Features

- ✅ Parse custom key-value structured text into objects
- ✅ Lightweight and dependency-free
- ✅ Flatten deeply nested objects
- ✅ Supports strings, numbers, booleans
- ✅ JSON alternative for simple configs or embedded data
- ✅ Super simple API

---

## 🚀 Installation

```bash
npm install fastparselite
```

---
## 📄 Syntax Guide

| Type       | Syntax Example       | Meaning                      |
|------------|----------------------|------------------------------|
| String     | `name=Dineshkumar`   | Key with string value        |
| Number     | `age=#21`            | Key with number value        |
| Boolean    | `active=!true`       | Key with boolean value       |
| Nesting    | `address { ... }`    | Start a nested block         |
| End Nest   | `}`                  | Close a nested block         |
| Comment    | `//` or `#`          | Entire line is ignored       |


---

## 🧪 Usage

🔡 Input Example
```txt

user{
  name=Dineshkumar
  age=#20
  active=!true
  address{
    city=Karur
    zip=#600001
  }
}
```

---

## 📦 Node.js Usage


```js

const { fastParseLite, flatten } = require('fastparselite');

const input = `
user{
  name=Dineshkumar
  age=#21
  active=!true
  address{
    city=Karur
    zip=#600001
  }
}
`;

const parsed = fastParseLite(input);
console.log("Parsed Object:", parsed);

const flat = flatten(parsed);
console.log("Flattened Object:", flat);
```

## ✅ Output
Parsed Object:

```js

{
  user: {
    name: 'Dineshkumar',
    age: 21,
    active: true,
    address: {
      city: 'Karur',
      zip: 624620
    }
  }
}
```
Flattened Object:

```js

{
  user_name: 'Dineshkumar',
  user_age: 21,
  user_active: true,
  user_address_city: 'Karur',
  user_address_zip: 624620
}
```

---

## 📂 Use Cases

⚙️ CLI tool configuration

🔍 Embedded data parsing

🛠️ Alternative to JSON for simple use cases

🧩 Flattening nested data structures for logs or forms

---

## 📑 API

`fastParseLite(text: string): object`
Parses the structured custom text into a nested JavaScript object.

`flatten(obj: object): object`
Converts a deeply nested object into a flat key-value pair using underscores.

🧑‍💻 Local Development

```bash

git clone https://github.com/unknown001dk/fastparselite.git
cd fastparselite
npm install
```

Run a local test file:

```bash

node test/test.js
```

## 🪪 License
MIT © 2025 [Dineshkumar A]

---

## 🔗 Connect

GitHub: @unknown001dk
![@unknown001dk](https://github.com/unknown001dk)
