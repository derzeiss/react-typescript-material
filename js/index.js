/** 01 Merge objects (spread) */
/** 02 Executing Functions Directly & Indirectly */
/** 03 map() */
/** 04 Arrow Functions and reduce */
/** 05 Modules */
/** 06 Remove falsy values from a given array */
/** 07 Promises & async error handling */

console.log('---- 00 basics ----');
const number = 1;
const string = 'string';
const boolean = true;
const array = [1, '2', 'three', true];
const object = { key: 'value', one: '1', 2: 2, 'three-and-a-half': 3.5, true: true };
const null_ = null;
const undefined_ = 2;

// let vs. const
let val3 = 1;
val3 = 2;
console.log('mod', val3);

const val4 = { one: 1 };
val4.two = 2;
console.log(val4);

const val5 = [1, 2, 3];
val5.push(4);
console.log(val5);

// block- vs. function-scoping
var val = 4;
if (true) {
  var val = 5;
  console.log('in', val);
}
console.log('out', val);

const val2 = 4;
if (true) {
  const val2 = 5;
  console.log('in', val2);
}
console.log('out', val2);

// if-statements
const one = 1;
if (one === 1) {
  console.log('Number is 1');
}

if (one === '1') {
  console.log('Number is "1"');
}

// loops
while (false) {
  // do stuff
}

do {
  //stuff
} while (false);

for (let i = 0; i < 3; i++) {
  // runs three times
}

// functions
function myFunction(param1, param2) {
  //do stuff
  return true;
}

const myLambda = (param1, param2) => {
  // do stuff
  return true;
};

const myShortLambda = (param1, param2) => true;

// ---- 01 spread operator ----
console.log('---- 01 spread operator ----');
const numbers = [1, 2, 3];
const [one_, two, three] = numbers;
console.log(one_, two, three);

const numbersWithZero = [0, ...numbers];
console.log('numbersWithZero', numbersWithZero);

const person = { firstname: 'John', lastname: 'Doe', birthday: '01.04.1337' };
const { firstname, lastname } = person;

const johnsAge = 2024 - 1337;
const sex = 'male';
const fullJohn = { ...person, age: johnsAge, sex };
console.log('fullJohn', fullJohn);

const mergeObjects = (...objs) => objs.reduce((result, obj) => ({ ...result, ...obj }), {});
console.log(mergeObjects({ one: 1, two: 2 }, { three: 3, four: 4 }, { five: 5, one: 'one' }));

// ---- 02 executing functions directly / indirectly ----
console.log('---- 02 executing functions directly / indirectly ----');

const everythingIsAnObject = () => console.log('helloWorld');

const runItIfItsCallable = (thing) => {
  if (typeof thing === 'function') thing();
};

class MyClass {
  constructor() {
    console.log('class');
  }
}

runItIfItsCallable(everythingIsAnObject);
runItIfItsCallable(4);
runItIfItsCallable(() => console.log('inline lambda'));
runItIfItsCallable(function () {
  console.log('inline function');
});
runItIfItsCallable({ one: 1 });
// runItIfItsCallable(MyClass);

const fnArr = [runItIfItsCallable, everythingIsAnObject];
fnArr[0](fnArr[1]);

const fnObj = {
  run: runItIfItsCallable,
  one: () => console.log(1),
  two: () => console.log(2),
};

const keyRun = 'run';
const keyArg = 'two';
fnObj[keyRun](fnObj[keyArg]);

// ---- 03 array functions ----
console.log('---- 03 array functions ----');
const people = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    age: 34,
  },
  {
    id: 2,
    firstname: 'John',
    lastname: 'Palmer',
    age: 4,
  },
  {
    id: 3,
    firstname: 'Max',
    lastname: 'Pane',
    age: 99999,
  },
];

const isJohn = (person) => person.firstname === 'John';

const hasJohn = people.some(isJohn);
const onlyJohns = people.every(isJohn);
const firstJohn = people.find(isJohn);
const firstJohnIndex = people.findIndex(isJohn);
const allJohns = people.filter(isJohn);
const grownUps = people.filter((p) => p.age >= 18);
const firstMary = people.find((p) => p.firstname === 'Mary');
const firstMaryIndex = people.findIndex((p) => p.firstname === 'Mary');
const ages = people.map((p) => p.age).sort((a, b) => a - b);

console.log(
  '\nhasJohn',
  hasJohn,
  '\nonlyJohns',
  onlyJohns,
  '\nfirstJohn',
  firstJohn,
  '\nfirstJohnIndex',
  firstJohnIndex,
  '\nallJohns',
  allJohns,
  '\ngrownUps',
  grownUps,
  '\nfirstMary',
  firstMary,
  '\nfirstMaryIndex',
  firstMaryIndex,
  '\nages',
  ages
);

const numberOfJohns = people.filter(isJohn).length;
const JohnsLastnames = people.filter(isJohn).map((j) => j.lastname);

const peopleById = people.reduce((result, p) => {
  result[p.id] = p;
  return result;
}, {});

console.log(peopleById);

console.log(Object.keys(peopleById), Object.values(peopleById), Object.entries(peopleById));

Object.entries(peopleById).forEach(([id, person]) => {
  console.log(id, person);
});

console.log('---- truthy / falsy values ----');

const logIsTruthy = (val) => {
  if (val) {
    console.log('"' + val + '" is truthy');
  } else {
    console.log(`"${val}" is falsy`);
  }
};

logIsTruthy(-1);
logIsTruthy(1);
logIsTruthy(0);
logIsTruthy(' ');
logIsTruthy('');
logIsTruthy('one');
logIsTruthy(true);
logIsTruthy(false);
logIsTruthy({});
logIsTruthy([]);
logIsTruthy(null);
logIsTruthy(undefined);

console.log('---- falsy / nullish coalescing ----');

console.log('0', 0 || 'falsy');
console.log("''", '' || 'falsy');
console.log("' '", ' ' || 'falsy');
console.log('null', null || 'falsy');
console.log('undefined', undefined || 'falsy');

console.log('0', 0 ?? 'nullish');
console.log("''", '' ?? 'nullish');
console.log("' '", ' ' ?? 'falsy');
console.log('null', null ?? 'nullish');
console.log('undefined', undefined ?? 'nullish');

console.log('---- object equality ----');

const obj1 = { one: 1 };
const obj2 = obj1;
const obj3 = { one: 1 };

console.log('1=2', obj1 === obj2);
console.log('1=3', obj1 === obj3);

const isObj1 = (obj) => obj === obj1;

console.log('1', isObj1(obj1));
console.log('2', isObj1(obj2));
console.log('3', isObj1(obj3));

const changeObj = (obj) => {
  obj.two = 'two';
};

changeObj(obj1);

console.log(obj1);
console.log(obj2);

const changeArr = (arr) => {
  arr.push('last');
};

const arr1 = [1, 2, 3];
changeArr(arr1);
console.log(arr1);

console.log('---- shallow / deep copy ----');
const obj4 = { one: 1, two: { val: 2 }, fn: () => true };

const obj4CopyReference = obj4;
obj4.one = 2;
console.log('reference', JSON.stringify(obj4), JSON.stringify(obj4CopyReference));

const obj4CopyShallow = { ...obj4 };
obj4.one = 3;
obj4.two.val = 3;
console.log('shallow', JSON.stringify(obj4), JSON.stringify(obj4CopyShallow));

const obj4CopyDeep = { ...obj4, two: { ...obj4.two } };
obj4.one = 4;
obj4.two.val = 4;
console.log('deep', JSON.stringify(obj4), JSON.stringify(obj4CopyDeep));

const obj4CopyJson = JSON.parse(JSON.stringify(obj4));
obj4.one = 5;
obj4.two.val = 5;
console.log('json', JSON.stringify(obj4), JSON.stringify(obj4CopyJson));
console.log(obj4, obj4CopyJson);
