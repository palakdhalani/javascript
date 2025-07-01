//  1. simple function

// function greet(){
//     console.log("Hello, World!");
// }
// greet()


//  2. varaible as a function or anonymous function
// let greet = function() {
//     console.log("Hello, World!");}
// greet()


//  3. arrow function

// let greet = () => {
//     console.log("Hello, World!");
// }
// greet()


 // 4. immediately invoked function expression (IIFE)
//  let greet = (function() {
//     console.log("Hello, World!");   

// })();


                //   orrrr


// 4. immediately invoked function expression (IIFE)
//  let greet = (function() {
//     console.log("Hello, World!");   

// }());  



// 5. nested function
// function outerFunction() {
//     function innerFunction() {
//         console.log("Hello");
//   }
//     innerFunction();
// }
// outerFunction();



// 6. closure
// function outerFunction() {   
//     let count = 0;
//     function innerFunction() { 
//         count++;
//         console.log(count);
//     }
//     return innerFunction;
// }
// let print = outerFunction();
// print(); 
// print(); 
// print(); 



