// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello Alex!";
//     } else if (input === "Pat") {
//         return "Hello Pat!";
//     } else if (input === " ") {
//         return "Hello World!";
//     } else if (input === true) {
//         return "Hello World!";
//     } else if (input === false) {
//         return "Hello World!";
//     } else {
//     return "Hello Jane!";
//     }
// }

function sayHello(input) {
    if (input === true) {
        return "Hello World!";
    } else if (input === false) {
        return "Hello World!";
    } else if (input === " ") {
        return "Hello World!";
    }
     else {
        return ("Hello " + input + "!");
    }
}