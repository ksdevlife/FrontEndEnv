import bar from './bar';

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

// var a = 12;
// var b = "34";
// b = a;
// alert(a);

let numString:string = "123";
let num:number = Number(numString);
let numString2:string = num.toString();

console.log(numString);
console.log(num);
console.log(numString2);