const numbers = [12, 45, 67, 86, 44];
// For of cannot be used in objects
for (const number of numbers) {
	console.log(number);
}

const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: "1L" };

const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
	// console.log(key, bottle[key]);
}

// For in
for (const key in bottle) {
	console.log(key, bottle[key]);
}

// Advance
for (const [key, value] of Object.entries(bottle)) {
	console.log(key, value);
}
