import test from 'ava';
import acronymer from './index.js';

test('Generate acronym from a simple string', t => {
	t.is(acronymer('Cascading Style Sheets'), 'CSS');
	t.is(acronymer('cascading style sheets'), 'CSS');
	t.is(acronymer('Behavior-driven design'), 'BDD');
});

test('Generate acronym from a string with special characters', t => {
	t.is(acronymer('HyperText Markup Language!'), 'HTML');
});

test('Generate acronym from a words with two or more capital letters', t => {
	t.is(acronymer('JavaScript Object Notation'), 'JSON');
});

test('Generate acronym from a string where all letters in words are capital', t => {
	t.is(acronymer('CASCADING Style Sheets'), 'CSS');
	t.is(acronymer('HyperText and Markup Language'), 'HTML');
});

test('Generate acronym from an empty string', t => {
	t.is(acronymer(''), '');
});

test('Generate acronym from a string with all non-alphabetic characters', t => {
	t.is(acronymer('1234567890!@#$%^&*()'), '');
});

test('Generate acronym from a string with single-letter words', t => {
	t.is(acronymer('A B C'), 'ABC');
});

test('Generate acronym from a non-string input', t => {
	const inputString = 123; // Non-string input
	const error = t.throws(() => {
		acronymer(inputString);
	}, {instanceOf: Error});
	t.is(error.message, 'Input value must be a string.');
});
