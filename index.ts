const name = "junghyo",
    age = 27, 
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`
        Hello! nice you meet you!
        Is your name ${name}?
        You are ${age} years old.
        And you are ${gender}
    `);
}

sayHi(name, age, gender);


// 이건 왜 필요하죠??
export {};