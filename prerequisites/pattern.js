// print the following pattern
// * * * *
// * * * *
// * * * *
// * * * *


n=4;
for (let i=0; i<n ; i++){   //rows
    let row = "";
    for (let j=0; j<n ; j++){   //columns
        row += "* "; 
    }
    console.log(row);
} 


console.log("--------------")

// print the following pattern
// * 
// * * 
// * * * 
// * * * *
for (let i=0; i<n ; i++){   //rows
    let row = "";
    for (let j=0; j<i+1 ; j++){   //columns
        row += "* "; 
    }
    console.log(row);
}

console.log("--------------")

// print the following pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

m=5
for (let i=0; i<m; i++){
    row = ""
    for (let j=0 ; j<=i; j++){
        row= row + " " + (j + 1);
    }
    console.log(row);
}

console.log("--------------")


// print the following pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

m=5
for (let i=0; i<m; i++){
    row = ""
    for (let j=0 ; j<=i; j++){
        row= row + " " + (i+1);
    }
    console.log(row);
}

console.log("--------------")

// print the following pattern
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
for(let i=0; i<m; i++){
    let row= "";
    for(let j=0; j<m-i; j++){
        row= row + " " + (j+1);
    }
    console.log(row);
}

console.log("--------------")

// print the following pattern
// * * * * *
// * * * *
// * * *
// * *
// *


for (let i=0; i<m; i++){
    row = ""
    for (let j=0 ; j<m-i; j++){
        row= row + " * " ;
    }
    console.log(row);
}

console.log("--------------")

// print the following pattern
// -  -  -  -  * 
//  -  -  -  *  * 
//  -  -  *  *  * 
//  -  *  *  *  * 
//  *  *  *  *  * 

for (let i=0; i<m; i++){
    row= "";
    // print spaces
    for (let j=0; j<m-(i+1); j++){
        row= row + " - ";

    }
    for (let k=0; k<i+1; k++){
        row= row + " * ";
    }
    console.log(row);
}

console.log("--------------")

// print the following pattern
// 1
// 10
// 101
// 1010
// 10101

for(let i=0; i<m; i++){
    let row= "";
   let  toggle=1;
    for(let j=0; j< i+1 ; j++){
        row= row + toggle;
        if(toggle==1){
            toggle=0;
        }
    
    
    else{
        toggle=1;
    }
    
}
    console.log(row);
}


console.log("--------------")


// print the following pattern
// 1
// 01
// 101
// 0101
// 10101

 let  toggle=1;
for(let i=0; i<m; i++){
    let row= "";
   
    for(let j=0; j< i+1 ; j++){
        row= row + toggle;
        if(toggle==1){
            toggle=0;
        }
    
    
    else{
        toggle=1;
    }
    
}
    console.log(row);
}