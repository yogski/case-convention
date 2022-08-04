# Case Convention NPM Package

Simple typescript package for case conversion. Automatically convert to desired case. Zero dependencies.

Supported case conversions:
- `snake_case`
- `camelCase`
- `PascalCase`
- `MACRO_CASE` (Alias: `UPPER_CASE_SNAKE_CASE`)
- `kebab-case` (Alias: `slug`)
- `Train-case`
- `flatcase` (⚠️Warning: cannot be converted back to other cases)
- `dot.case`
- `Capitalize the string`
- `Title The String`
- `normalize the string`

## Installation
Run this command to install `case-convention` on your project.
```
npm install case-convention
```

## Usage

### Import
ES6 style import
```javascript
import { Convention } from "case-convention"
```

### Methods
- Convert to title (capitalize every word)
  ```javascript
  let str = "lorem.ipsum"
  console.log(Convention.title(str))
  // "Lorem Ipsum"
  ```
- Convert to capitalized (capitalize the first letter only)
  ```javascript
  let str = "Lorem-Ipsum"
  console.log(Convention.capitalized(str))
  // "Lorem ipsum"
  ```
- Convert to normalized string (space-separated, all lower-case)
  ```javascript
  let str = "LOREM_IPSUM"
  console.log(Convention.normalize(str))
  // "lorem ipsum"
  ```
- Convert to `snake_case`
  ```javascript
  let str = "LOREM_IPSUM"
  console.log(Convention.snakeCase(str))
  // "lorem_ipsum"
  ```
- Convert to `camelCase`
  ```javascript
  let str = "lorem.ipsum"
  console.log(Convention.camelCase(str))
  // "loremIpsum"
  ```
- Convert to `kebab-case` or `slug`
  ```javascript
  let str = "LoremIpsum"
  console.log(Convention.kebabCase(str))
  console.log(Convention.slug(str))
  // "lorem-ipsum"
  ```
- Convert to `PascalCase`
  ```javascript
  let str = "lorem ipsum"
  console.log(Convention.pascalCase(str))
  // "LoremIpsum"
  ```
- Convert to `Train-Case`
  ```javascript
  let str = "Lorem Ipsum"
  console.log(Convention.trainCase(str))
  // "Lorem-Ipsum"
  ```
- Convert to `MACRO_CASE` or `UPPER_CASE_SNAKE_CASE` alias
  ```javascript
  let str = "lorem.ipsum"
  console.log(Convention.macroCase(str))
  console.log(Convention.upperCaseSnakeCase(str))
  // "LOREM_IPSUM"
  ```
- Convert to `dot.case`
  ```javascript
  let str = "lorem_ipsum"
  console.log(Convention.dotCase(str))
  // "lorem.ipsum"
  ```
- Convert to `flatcase`
  ```javascript
  let str = "LOREM_IPSUM"
  console.log(Convention.flatCase(str))
  // "loremipsum"
  ```

### Behavior & Error Handling

This package doesn't throw errors. Instead, improper input will return empty string. This package will also attempt to remove excess separators, as well as variable prefix.
```javascript
// empty string as input returns empty string as output
console.log(Convention.snakeCase(""))
  // ""

// following prefixes are removed: "@", "_", "$"
console.log(Convention.slug("$centeredDiv"))
  // "centered-div"

// excess single separators are removed
console.log(Convention.normalize("DEFAULT____VALUE"))
  // "default value"
console.log(Convention.kebabCase("TOO   SPACIOUS"))
  // "too-spacious"

// multiple separators in an input returns empty string as output
// following symbols are considered as separator: " ", ".", "-", "_"
console.log(Convention.camelCase("face-to-face meeting"))
  // ""
```

## Contribute
Experiencing issues? Need new features? Please go to [this link](https://github.com/yogski/case-convention/issues) and create new entry.

Also, feel free to submit [pull requests](https://github.com/yogski/case-convention/pulls).

## Special Thanks
- [TomChen](https://github.com/tomchen) for creating awesome [modern npm package template](https://github.com/tomchen/example-typescript-package) 
