

let now = new Date();
console.log(now.toISOString());
console.log(now.toISOString().slice(0,-5)+"Z");
console.log(now.toISOString().replace(/[.]\d+/, ''));
console.log(now.toISOString().replace('T', ' ').replace(/[.]\d+/, ''));

