/**
Generates an acronym from the given text. `Cascading Style Sheets ==> CSS`.

@param text - The input text to generate the acronym from.
@returns The generated acronym. If the input text is empty, the output will be an empty string.
@throws {TypeError} If the input value is not a string.

@example
```
import acronymer from 'acronymer';

console.log( acronymer('Cascading Style Sheets') )      // 'CSS'
console.log( acronymer('Behavior-driven design') )      // 'BDD'
console.log( acronymer('HyperText Markup Language!') )  // 'HTML'
```
*/
export default function acronymer(text: unknown): string;
