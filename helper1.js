
const lisa=[45,11,22,3,4]
console.log(lisa.length);
console.log(lisa.at(0))

for (let index = 0; index < lisa.length; index++) {
    const element = lisa[index];
    console.log(element);
}
lisa.forEach(element => {
    console.log(element);
});

for(let el of lisa){
    console.log('lisa: '+el);
}

let name ='test'
console.log(`${lisa}:${name}`)
let there ="there";
var acdc = null
console.log(`${there}`);

function some(){
    console.log(`name: ${there}`)
    there = "roc k"
    acdc = 11
}


some();
console.log(there);
console.log(acdc)

var a = [12]
a = [1]
let b;
b= 142;

console.log(b)

var result  = 10>15? true: false;
console.log(result)
