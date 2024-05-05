//template literals
let a = 'Hello';
let b = 'World';
let c = 5;
let d = 7;
let fullWord = a+' '+b;
console.log(fullWord);
console.log(`${a} ${b} \n${c+d}`);

//Distructuring Objects and Arrays
//Objects
const personalInfo = {
    fname : 'Keerthana',
    age : 19,
    city : 'Coimbatore',
    state : 'Tamilnadu'
};

let {fname,age,city,state} = personalInfo;
console.log(`${fname} ${age} ${city}`);

let {fname:fn, age:a} = personalInfo;
console.log(`${fn} ${a}`);
//Arrays
let names = ['Keerthana', 'Devatha', 'Kalaivani', 'Dhanapal'];
let [arr] = ['Keerthana', 'Devatha', 'Kalaivani', 'Dhanapal'];
console.log(arr);

let [arr1, arr2, arr3] = ['Keerthana', 'Devatha', 'Kalaivani'];
console.log(arr1, arr2, arr3);
let arr4 = 'Kaviyazhini';
console.log(arr2 +' ' +arr4);

//Arrow Function
const arrFunc = (a, b)=>{
    return a*b;
}
console.log(arrFunc(2, 4));

const a = ()=>{
    console.log("This is Arrow Function!!");
}

a();

//Default Parameters
function func(a, b=2){
    return a+b;
}

console.log(func(2));
console.log(func(1,5));

//Classes
class Details{
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo;
    }
}
let stud1 = new Details('Keerthana', 65);
let stud2 = new Details('PG', 66);

console.log(stud1.name);
console.log(stud2.name);

//Rest parameter
function func(...input){
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    return sum;
} 
console.log(func(1,2));
console.log(func(4,6));

//Spread Operator
let arr = [1,2,3,7,-4]
console.log(...arr);
console.log(Math.max(...arr));

//for/of loop
const myArr = [2,43,65,3,0,56,1]
for(let i of myArr){
    console.log(myArr);
}

//Map & Set
//Map
let myMap = new Map([
    ['Name','Keerthana'],
    ['Age',19],
    ['A','class'],
    [2026,'Batch']
])

myMap.set(true, 'Student');
myMap.set(0,'false');
console.log(myMap.get('Name'), myMap.get(true), myMap.get(2026));

//Set
let mySet = new Set(['Hello', 'Hello'])
mySet.add(20);
mySet.add(20);
console.log(mySet)

//Promise
let college = new Promise((resolve, reject)=>{
    let CollegeGood = true;
    if(CollegeGood){
        setTimeout(resolve, 2000);
    }
    else
        setTimeout(reject, 3000);
})

college.then(()=>console.log("College is good"))
.catch(()=>console.log("College is not good"));

//Symbols
const abc = {
    fname : "Hello World",
    greet : 'Welcome to Programming'
}

let short_name = Symbol('short_name');
abc.short_name = 'Coding';
console.log(`${abc.fname} ${abc.greet}`);
console.log(`short name is: ${abc.short_name}`);
console.log(`short name is: ${[abc.short_name]}`);

//String Methods
//startsWith
const useStart = "This is startsWith() method";
console.log(useStart.startsWith("This is"),
useStart.startsWith('This string'));
//endsWith
const useEnd = "This is endsWith() method";
console.log(useEnd.endsWith("method"),
useStart.startsWith('This is'));
//includes()
const useIncludes = "This is a includes() method";
console.log(useIncludes.includes("a"),
useStart.includes('This string'));
