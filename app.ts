// N1
enum Colors {
    Red = 'qizil',
    Green = 'yashil',
    Blue = 'ko`k',
}

console.log(8, Colors.Green)

// N2
interface Car {
    brand: string
    model: string
    year: number
}

let carObject: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

console.log(23, carObject)

// N3
interface CarOwerName {
    brand: string
    model: string
    year: number
    ownerName?: string
}

let carObj: CarOwerName = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    // ownerName: 'Tayota'
};

console.log(40, carObj)

// N4
interface Person {
    name: string
    age: number
}

interface Employee {
    workplace: string
}

type UserInter = Person & Employee

let UserObj: UserInter = {
    name: 'Muslimbek',
    age: 16,
    workplace: 'Najot Ta`lim'
}
console.log(59, UserObj)

// N5
interface Admin {
    adminId: number;
    type: 'admin';
}

interface User {
    userId: number;
    role: 'user';
}

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    adminId: 1,
    userId: 2,
    type: 'admin',
    role: 'user'
};

console.log(81, adminUser);

// N6
let NumMass: number[] = [1, 2, 3, 4, 5]

let ResNumMass = NumMass.map((arg) => arg * 2)
console.log(87, ResNumMass)

// N7
let StringMass: string[] = ['salom', 'string', 'hello', 'number']

let ResStringMass = StringMass.filter((arg) => arg.length <= 5)
console.log(93, ResStringMass)

// N8
interface Obj8 {
    name: string
    age: number
    email: string
}

const ResObj8: Obj8 = {
    name: 'Muslimbek',
    age: 5,
    email: 'muslimbekmuminov47@gamil.com'
}

console.log(108, ResObj8)

// N9
function splitObject(obj: { [key: string]: any }): { keys: string[]; values: any[] } {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    return { keys, values };
}

let exampleObj = { name: "John", age: 30, profession: "Engineer" };

let result = splitObject(exampleObj);

console.log(121, result.keys);
console.log(122, result.values);

// N10
function userFun(a: number, b: number) {
    return a + b
}

console.log(129, userFun(7, 5))

// N11
function calculateAverage(...numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(140, calculateAverage(1, 2, 3, 4, 5));
console.log(141, calculateAverage(10, 20, 30));
console.log(142, calculateAverage());

// N12
let tuple: [string, number, string] = ['Muslimbek', 16, 'muslimbekmuminov47@gmail.com']

console.log(147, tuple)

// N13
function swapTuple(input: [number, string]): [string, number] {
    return [input[1], input[0]];
}

let originalTuple: [number, string] = [42, "Hello"];
let swappedTuple = swapTuple(originalTuple);

console.log(157, swappedTuple);

// N14
function filterNumbers(input: any[]): number[] {
    return input.filter(item => typeof item === 'number');
}

let mixedArray: any[] = [1, 'Hello', 3.14, { key: 'value' }, 42, true];

let numbersOnly = filterNumbers(mixedArray);
console.log(167, numbersOnly);

// N15
function filterStrings(input: any[]): string[] {
    return input.filter(item => typeof item === 'string');
}

let mixedArrayString: any[] = [1, 'Hello', 3.14, { key: 'value' }, true, 'World'];

let stringsOnly = filterStrings(mixedArrayString);
console.log(177, stringsOnly);

// N16
function getStringLength(input: unknown): number | null {
    if (typeof input === 'string') {
        return input.length;
    }
    return null;
}

console.log(187, getStringLength('Hello'));
console.log(188, getStringLength(123));

// N17
function getStringLengthToUpperCase(input: unknown): string | null {
    if (typeof input === 'string') {
        return input.toUpperCase()
    }
    return null;
}

console.log(198, getStringLengthToUpperCase('Hello'));
console.log(199, getStringLengthToUpperCase(123));

// N18
type UserInfo = {
    name: string;
    age: number;
    isStudent: boolean;
};

const user1: UserInfo = {
    name: 'Alice',
    age: 25,
    isStudent: true
};

const user2: UserInfo = {
    name: 'Bob',
    age: 30,
    isStudent: false
};

const user3: UserInfo = {
    name: 'Charlie',
    age: 22,
    isStudent: true
};

console.log(226, user1);
console.log(227, user2);
console.log(228, user3);

// N19
type UserName = {
    name: string
}
type UserAge = {
    age: number
}

type UserNameAndAge = UserName & UserAge

const UserNameAge = {
    name: 'Muslimbek',
    age: 16
}

console.log(UserNameAge)

// N20
type MultiplyOrConcat = (a: any, b: any) => any;

const multiply: MultiplyOrConcat = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    return null;
};

const concatenate: MultiplyOrConcat = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    return null;
};

console.log(multiply(2, 3));
console.log(concatenate('Hello', 'World'));