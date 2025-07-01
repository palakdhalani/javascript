// 1 2 3 4 5
//   1 2 3 4 
//     1 2 3 
//       1 2 
//         1

for(let row = 1; row <= 5; row++){
    let l = " ".repeat(row - 1)
    for(let col = 1; col <= 6 - row; col++){
        l += col + " "; 
    }
    console.log(l.trim());
}