// for loop
// print hello world 20 times
for (let i=0 ; i<20 ; i++){
    console.log("Hello World");
}


for (let i=5 ; i>0 ; i--){
    console.log(i);
}


function greet(){
    console.log("Hello Jubilee");
}

for (let i=0 ; i<5 ; i++){
    greet();
}

let arr= [10, 20, 30, 40, 50];
for (let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}


// Print all the even numbers from an array
let arr2 = [1,2,3,4,6,7,8,9,22]
for (let i=0 ; i<arr2.length ; i++){
    if (arr2[i]%2==0){
        console.log(arr2[i]);
    }
   
}

// Print all the odd numbers from an array
let arr3 = [1,2,3,4,6,7,8,9,22]
for (let i=0 ; i<arr3.length ; i++){
    if (arr3[i]%2==1){
        console.log(arr3[i]);
    }
   
}


// while loop
let i=0;
while(i<6){
    console.log("Hello Jubilee sharma");
    i++;
}


// Write a function to search for an element in an array and return its index, if not found return -1
let arr4 = [1,2,3,4,6,7,8,9,22]
function searchElement(arr,element){
    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]==element){
            return i;
        }
    }
        return -1;
    }



let result = searchElement(arr4,9);
console.log(result);


// Write a function to count the number of negative numbers in an array
function countNegatives(arr){
    let count = 0;
    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
let arr5 = [1,2,3,-4,-6,-7,-8,-9,-22]
let result2 = countNegatives(arr5);
console.log(result2);


// Write a function to find the largest number in an array
function findLargest(arr){
    let largest = -Infinity;        //we can use -Infinity to find the largest number or arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr6 = [11,2,73,7,78,87,24]
let result3 = findLargest(arr6);
console.log(result3);


// Write a function to find the smallest number in an array
function findMinimum(arr){
    let min = arr[0];        //we can use Infinity to find the largest number or arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}

let arr7 = [9,8,-1,3,-2,-6]
let result4 = findMinimum(arr7);
console.log(result4);


// Find Second Largest number in an array
function findSecondLargest(arr){
    if(arr.length<2){
        return null;
    }
    let firstLargest = -Infinity;        //we can use -Infinity to find the largest number or arr[0]
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest;        
            firstLargest = arr[i];        
        }
        else if (arr[i]>secondLargest && arr[i]!=firstLargest){         //if the array has duplicates and we want only unique numbers
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr8 = [2,7,3,4,8,11]   // 8
//let arr8 = [3]               // null    
let result5 = findSecondLargest(arr8);
console.log(result5);


//corner cases:
// empty array
//array has duplicates
//array has negative numbers