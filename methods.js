const student = {
	name: "kodom Ali",
	age: 23,
	money: 2300,
	exam: function () {
		console.log(this.money);
		return this.name;
	},
	improve: function (subject) {
		this.exam();
		return `${this.name} is improve on this ${subject}`;
	},
};

const output = student.exam();
console.log(output);

const output2 = student.improve("bangla");
console.log(output2);
