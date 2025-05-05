const add = (a, b) => a + b;
console.log(add(3,5));

const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());

class Person
{
    constructor(name)
    {
        this.name = name;
    }

    greet = () => console.log(`Hola ${this.name}`);

}
const person = new Person('Paula');
person.greet();