const name = "junghyo",
    age = 27, 
    gender = "male";

const sayHi = (name:string, age:number, gender:string): string => {
    const greeting:string = `
        Hello! nice you meet you!
        Is your name ${name}?
        You are ${age} years old.
        And you are ${gender}!
    `;
    return greeting;
}

const hello = sayHi(name, age, gender);
console.log(hello);

// 이건 왜 필요하죠??
export {};