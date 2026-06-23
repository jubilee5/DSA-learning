console.log("Hello World");

let firstName = "Jubilee";
let lastName = "sharma";

let fullName = firstName + " " + lastName;

console.log(fullName);


let arr = [1, 2, 3];
console.log(arr[4]);
arr[4] = 5;
console.log(arr); //[ 1, 2, 3, <1 empty item>, 5 ]
arr.push(6);
console.log(arr);
arr[3] = 7;
console.log(arr);
arr.pop(arr[4]);
console.log(arr);


let arr2 = ["Jubilee", "Akshay", "Rohit", "John" ];
console.log(arr2);

let arr3 = ["Jubilee", 4, [24, 25]];    // array can also contain other arrays
console.log(arr3[2][1]);        // 25

let obj = { 
    name: "Jubilee",
    age: 18,
    isStudent: true,
    arr : [1, 2, 3]
 };
console.log(obj);  