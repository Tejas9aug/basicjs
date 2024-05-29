let age=21;
var year=3;
console.log(age,year);

age=22;
console.log(age);

let firstName ='Tejas';
console.log(firstName);
let fullName='TejasPatange';
let index=fullName.indexOf('a');
console.log(index);
let email='patangetejas25@gmail.com';
let res=email.lastIndexOf('z');
console.log(res);
let ans=email.slice(9,10);
console.log(ans);
let maxi=email.substring(9,10);
console.log(maxi);

const title="Tejas";
const likes=32;
let mini=`The name of author is ${title}.He got ${likes} likes`;
console.log(mini);

let html=`<h2>Tejas</h2>
<p>The number of likes ${title} got is ${likes}</p>`;
console.log(html);

//for loop
// for(let i=0;i<100;i++){
//     console.log("Tejas",i);
// }
let names=['Tejas','Shreyas','Shreedhar'];
for(let i=0;i<names.length;i++){
    if(names[i]=='Tejas'){
        console.log("true");

    }
    else {
        console.log("flase");
    }
}
// let s=0;
// while(s<3){
//     s++;
//     console.log("Tejas",`${s}`);
// }
//functions in js

function sayhello(){
    console.log("hello");
}

sayhello();
const say=function(){
    console.log("Function Expression");
}
say();

function calcArea(radius){
    let area=3.14*radius**2;
    return area;

}
const newver=(radius)=>{
    return 3.14*radius**2;
}
console.log(newver(20));
let an=calcArea(100);
console.log(an);