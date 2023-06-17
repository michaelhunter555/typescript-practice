//Primitives: number, string, boolean
//complex: array, object, boolean//
//function types, parameters

let age: number;
age = 12;

let userName: string;
userName = 'michael'

let isInstructor: boolean;
isInstructor = false;


//more complex types
let hobbies: string[][][];
hobbies = [
    [
        ['play', 'stay', 'day']
    ]
];

//object type definition - defining structure of an object
let person: {
    name: string,
    age: number,
};

person = {
    name: 'Mike',
    age: 23,
};

//array of objects
let people: {
    name: string,
    age: number,
}[];

people = [ {name: 'mike', age: 23} ]

//Type inference - built in inference from TypeScript
let course = 'My name is JakeShillaa';
//course = 21 throws an error

//Union Types - type definition for more than one type
let result: string | number = 'no values found.';


//Type Aliases - in all the places where we use this object type, we can us the alias
//only needs to be defined once and can be repeated as many times as we need
type User = {
    name: string,
    age: number,
}

//array of objects
let users: User[];

//Function and Types

//functions and where types can be assigned

//return types - we can also provide return types
const add = (a: number, b: number): number => {
    return a + b;
};
//no return 
const printLine = (val: any): void => {
    console.log(val)
}


//Generics

const insertAtFront = (array: any[], val: any) => {
    const arr = [val,...array];
    return arr;
}

//array type number[]
const demoArrayOne = [1,2,3];

//array now is inferred as any 
const updatedArrayOne = insertAtFront(demoArrayOne, 4); // [1,2,3,4]
updatedArrayOne[0].split('') // with out generics would cause runtime error.



//maybe we want to use a function that always creates a new array
const insertAtEnd = <T>(array: T[], val: T) => {
    const arr = [...array, val];
    return arr;
}

//array type number[]
const demoArray = [1,2,3];

//array now is inferred as any 
const updatedArray = insertAtEnd(demoArray, 4); // [1,2,3,4]
//updatedArray[0].split('') // with generics we get a warning

