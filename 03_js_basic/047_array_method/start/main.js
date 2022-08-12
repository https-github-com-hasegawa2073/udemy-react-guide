const arry = [10, 20, 30, 40];
const newArry = [];

const newArry2 = arry.map((val) => val * 2);
const newArry3 = newArry2.filter((val) => val > 50);
console.log(newArry3);
