let myString:string = "Hello";
console.log(myString);

//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

let list: Array<number>[] = [1, 2, 3];
console.log(list[0])

//any
let notSure: any = 4;
notSure = "MAYBE A STRING INSTEAD";
console.log("Value is a string: "+notSure+".");
notSure = false;
console.log("Now value is a boolean: "+notSure+".");