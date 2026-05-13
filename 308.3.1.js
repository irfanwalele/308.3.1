// https://github.com/irfanwalele/308.3.1


// Part 1: Fizz Buzz

//Bullet 1
//Loop through all numbers from 1 to 100
//How would I do this? Maybe the for loop
//Createa a variable called i and start it at 1, so let i = 1
//i is less than or equal to 100, this way it loops through all of them
// when i becomes 101, the loop is gonna stop
//i++ after each run of the loop, increase i by 1
//then console log i
// Success! I was able to loop through all numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
    
// }

//Bullet 2
//If a number is divisible by 3, log "Fizz"
// Remember the % sign, this is modulus operator, it divides and lists the remainder 
// For example, i divided by 3, 3 divided by 3 is 1 with a remainder of 0, so it's true
// however, 5 divided by 3 has a remainder of 2, which should trigger false.
// Remember, it is the remainder when you divide i by 3
// If it is true, then it should say Fizz, if it's false, it should say Buzz
// i % === 0 is a Boolean since it would either be true or false, so I don't think i can concatonate

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }

// }

//Bullet 3
//If a number id divisible by 5, log "Buzz"
//Do the same, but add the else if
for (let i =1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

