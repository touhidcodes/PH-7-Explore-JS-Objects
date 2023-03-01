// create oject using object literals
const player = {};

// Properties
player.name = "nirob";
player.age = 24;

// Method
player.bat = () => {
	console.log("swing your bat");
};
// console.log(player);
// player.bat();

const student = {
	name: "pandey",
	job: "undey",
	ball: () => {
		console.log("throw your ball");
	},
	salary: 20000,
};

// Object Constructor
const person = new object();
console.log(person);

// Object create method
const item = Object.create(null);
console.log(item);

const stu = Object.create(student);
console.log(stu.name);

// Class
class Person {
	name = "abul";
	address = "sadarghat";
	constructor(age) {
		this.age = age;
	}
}

const person1 = new Person(34);
console.log(person1);

// Function
function Car(model, year) {
	this.model = model;
	this.year = year;
}

const tesla = new Car("elon", 2026);
