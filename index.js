const hyphenSanitizer = value => value.replaceAll('-', ' ');
const punctuationSanitizer = value => value.replaceAll(/[^\w\s]/g, '');
const stopWordSanitizer = value => value.replaceAll(/\b(a|an|and|the|is|in|of|on|at|for|by|with)\b/g, '');

export default function acronymer(text) {
	if (typeof text !== 'string') {
		throw new TypeError('Input value must be a string.');
	}

	let words = hyphenSanitizer(text);
	words = punctuationSanitizer(words);
	words = words.split(' ').map(word => stopWordSanitizer(word));
	const wordsLength = words.length;
	let acronym = '';

	for (let i = 0; i < wordsLength; i++) {
		const word = words[i];
		if (word.length > 0 && /^[A-Za-z]+$/.test(word)) {
			const capitalLetters = word.match(/[A-Z]/g);
			if (capitalLetters && capitalLetters.length === 2) {
				acronym += capitalLetters.join('');
			} else if (capitalLetters && capitalLetters.length > 2) {
				acronym += capitalLetters[0];
			} else {
				acronym += word[0].toUpperCase();
			}
		}
	}

	return acronym;
}
