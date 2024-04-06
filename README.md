# acronymer

> Transform strings into memorable acronyms

![CI](https://github.com/palashmon/acronymer/actions/workflows/main.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/acronymer.svg)](http://npm.im/acronymer)
[![npm downloads](https://img.shields.io/npm/dm/acronymer.svg)](http://npm.im/acronymer)

Transform strings into memorable acronyms with ease using the `acronymer` npm package. This lightweight and efficient tool simplifies the process of generating acronyms from input strings, making them concise and easy to remember.

### How It Can Be Useful

- Abbreviating long phrases or technical terms in code or documentation.
- Creating memorable identifiers for variables, functions, or entities.
- Compressing data while maintaining readability.
- Enhancing user experience by simplifying complex terminology.
- Streamlining communication by providing concise representations of concepts or ideas.

## Install

```sh
npm install acronymer
```

## Usage

```js
import acronymer from 'acronymer';

// Test cases
acronymer('Cascading Style Sheets')         // 'CSS'
acronymer('Behavior-driven design')         // 'BDD'
acronymer('HyperText Markup Language!')     // 'HTML'
acronymer('JavaScript Object Notation')     // 'JSON'
acronymer('CASCADING Style Sheets')         // 'CSS'
acronymer('HyperText and Markup Language')  // 'HTML'
acronymer('A B C')                          // 'ABC'
acronymer('')                               // ''
acronymer('1234567890!@#$%^&*()')           // ''
```

## API

### acronymer(text)

#### text
Type: `string`

The text to be transformed into an acronym. It must be a non-empty **string** containing at least one alphanumeric character. It will throw an error if the input is not a string.

## License

MIT © [Palash Mondal](https://github.com/palashmon)
