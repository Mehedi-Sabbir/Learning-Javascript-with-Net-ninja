//for loop
console.log(`for loop practice`);
for(let i=0;i<5;i++){
    console.log(`Sabbir`,i);
}

const names=[`sabbir`,`rakib`,`asif`];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
    let html=`<div>${names[i]}</div>`;
    console.log(html);
}
//while loop
console.log(`while loop practice`);
let i=names.length;
while(i--){
    console.log(names[i],i);
    let html=`<div>${names[i]}</div>`;
    console.log(html);
}

//do..while loop
console.log(`do while loop practice`)
i=names.length;
do{
     console.log(names[i],i);
    let html=`<div>${names[i]}</div>`;
    console.log(html);
    i--;
}while(i>=0)

//if....else statement practice like C Language
console.log(`If...Else statement practice`);
const name=`Sabbir`;
if(name==`Sabbir`){
    console.log('true');
}
else {
    console.log('False');
}

//break, continue keywords.....work like C language

//switch statement
console.log(`Switch statement`);
const grade='A';
switch(grade){
    case `A`:
        console.log(`You got A`);break;
    case `B`:
        console.log(`You got B`);break;
    case `C`:
        console.log(`You got C`);break;
    case 'F':
        console.log(`You failed`);break;
}

//function
  