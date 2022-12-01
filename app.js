console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section
for (i = 0; i <= 100; i++){
    if (i % 2 != 0){
        console.log (i);
}
}

console.log("EXERCISE 2:\n==========\n");
// Exercise 2 Section
    for (i = 1; i <= 100; i++)
    if (i % 15 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else {
        console.log(i);
    }

console.log("EXERCISE 3:\n==========\n");
// Exercise 3 Section
    i = 1;
    while (i <= 100){
        if (i % 2 != 0){
            console.log (i);
    }
    i++;
    }
    
    i = 1;

    while (i <= 100) {
    if (i % 15 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else {
        console.log(i);
    }
    i++;
};

console.log("EXERCISE 4:\n==========\n");
// Exercise 4 Section
let [value, n] = [Math.round((Math.random() * 500)), Math.round(Math.random() * (500 - 100) + 100)];

function loopin (value, n){
for (i = 0; i <= n; i++){
    
    if (i == value){
        return console.log("Found value! Which was " + value);
    } }
    return console.log("Did not find value");
};
loopin(value,n);

console.log("EXERCISE 5:\n==========\n");
// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

console.log(fizzDivisor,buzzDivisor,end,start);

function randomFizzBuzz (start,end,fizzDivisor,buzzDivisor){
for (i = start; i <= end; i++)
if (i % (fizzDivisor*buzzDivisor) == 0){
    console.log("FIZZBUZZ");
} else if (i % buzzDivisor == 0) {
    console.log("BUZZ");
} else if (i % fizzDivisor == 0) {
    console.log("FIZZ");
} else {
    console.log(i);
}
};
randomFizzBuzz(start,end,fizzDivisor,buzzDivisor);