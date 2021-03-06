class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender || "male";
    }
}

const junghyo = new Human("Junghyo Moon", 27);
const jisoo = new Human("Jisoo Kim", 27, "female");

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

console.log(
    sayHi(junghyo),
    sayHi(jisoo)
);

// 이건 왜 필요하죠??
export {};