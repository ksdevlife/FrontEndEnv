import bar from './bar';
import usejQuery from './usejQuery.ts';

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

usejQuery();

// var a = 12;
// var b = "34";
// b = a;
// alert(a);
