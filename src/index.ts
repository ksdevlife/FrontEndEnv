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
