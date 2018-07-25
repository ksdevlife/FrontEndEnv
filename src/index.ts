import bar from './bar';
import './style.css';
import './style.scss';

bar();

interface Person {
    firstName: string;
    lastName: string;
}

const greeter = (person: Person) => {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let person = {firstName: "Jane", lastName: "User"};

document.write("<br />");
document.write(greeter(person));

document.write("<p id='hmr'>Hot Module Rplacement Before</p>");
document.getElementById('hmr').style.color = "green";

let numString:string = "123";
let num:number = Number(numString);
let numString2:string = num.toString();

console.log(numString);
console.log(num);
console.log(numString2);
console.log("hmr");