let a = 20
let b = 30
try {
    if (a != b) {
        throw new Error("your ans is right");
        
    }
} catch (error) {
    console.log(error)
}