//ts의 인터페이스: 오브젝트의 데이터 형태를 결정?

interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "junghyo",
    age: 27,
    gender: "male"
};

// what is 'void' ??
const sayHi = (person: Human): string => {
    const greeting:string = `
        Hello! nice you meet you!
        Is your name ${person.name}?
        You are ${person.age} years old.
        And you are ${person.gender}! Is it right?
    `;
    return greeting;
}

const hello = sayHi(person);
console.log(hello);

// 이건 왜 필요하죠??
export {};