const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: "1L" };

// Keys, Values
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

// Entries
const entries = Object.entries(bottle);
// console.log(entries);

// Delete
delete bottle.isCleaned;

// Seal (can not delete properties but can modify)
Object.seal(bottle);
bottle.price = 200;

// Freeze (Can not change or modify)
Object.freeze(bottle);
