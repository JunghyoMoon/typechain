"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "junghyo", age = 27, gender = "male";
const sayHi = (name, age, gender) => {
    const greeting = `
        Hello! nice you meet you!
        Is your name ${name}?
        You are ${age} years old.
        And you are ${gender}!
    `;
    return greeting;
};
const hello = sayHi(name, age, gender);
console.log(hello);
//# sourceMappingURL=index.js.map