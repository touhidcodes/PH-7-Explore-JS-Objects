const first = { a: 1, b: 2, c: 3 };
const second = { a: 1, b: 2, c: 3 };

function compareObject(first, second) {
	const firstKeys = Object.keys(first);
	const secondKeys = Object.keys(second);
	if (firstKeys.length === secondKeys.length) {
		for (const key of firstKeys) {
			if (first[key] !== second[key]) {
				return false;
			}
		}
		return true;
	}
}

const output = compareObject(first, second);
console.log(output);
