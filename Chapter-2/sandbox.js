let age=25;
let year=2025;
console.log(age, year);

age=30;
console.log(age);

const points=100;
console.log(points);

var score=75;
console.log(score);

//single line comment

/*double line Comment;
yes, it is*/

//strings
console.log('hello, world');

let email='sabbir.csecu@gmail.com';
console.log(email);

//string concatation
let firstName='Mehedi Hasan';
let lastName='Sabbir';
let fullName=firstName+' '+lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase())
let result=fullName.toLowerCase();
console.log(result, fullName);

let index=email.indexOf('@');
console.log(index);

//common string methods
index=email.lastIndexOf('a');
console.log(index);

console.log(email.slice(0,10));

console.log(email.substr(4,10));

console.log(email.replace('a','w'));


//Numbers
let radius=10;
const pi=3.1416;
console.log(radius*pi);

console.log(10%3);
console.log(2**3);
console.log(10/3);

//order of operation: B I D M A S
console.log(5*(10-3)**2);

//NaN-not a number
console.log(5/'hello');

let likes=10;
console.log('The blog has '+ likes + ' likes');

//template strings
const title='Best reads of 2025';
const author='Mario';
let tmp='The blog colled '+title +' by '+author+' has '+likes+' likes ';
console.log(tmp);
let tmp1=`The blog called ${title} by ${author} has ${likes} likes`;
console.log(tmp1);

//creating html templates
let html=`
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes </span>
    `;
console.log(html);



//array
let ninjas=[`sabbir`, `mehedi`, `muntaha`];
console.log(ninjas);
console.log(ninjas[2]);

let ages=[10,20,23,25];
console.log(ages[2]);

let random=[`muntaha`,2004,`mehedi`, 2000];
console.log(random);
console.log(random.length);
console.log(random.join(`,`));
console.log(random.indexOf(`muntaha`));
console.log(random.concat(['testing',`with`,`another array`]));
console.log(random.push('Katrina'));
console.log(random.pop('Katrina'));
console.log(random);

//undefined
let undf;
console.log(undf);

//Null
let nn=null;
console.log(nn);

//booleans

console.log(true,false);
//methods can return booleans

console.log(email.includes('@'));
console.log(email.includes(`!`));

//comparison operators like C languages
//strict comparison (different types cannot be email)
let age1=20;
console.log(age1===20);
console.log(age1==='20');
console.log(age1!==20);
console.log(age!=='20');


//type conversion
score='100';
console.log(score+1);
console.log(typeof score);
console.log(Number(score)+1);
console.log(typeof score);

console.log(Boolean('0'));
console.log(Boolean(0));
console.log(Boolean(100));

