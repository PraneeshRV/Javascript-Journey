// variable scope = where a variable is recognized
//                               and accessible (local vs global)            

let x = 3; // global scope

function1();

function function1(){
    let x = 1; // local scope
    console.log(x);
}

function function2(){
    let x = 2; // local scope
    console.log(x);
}

