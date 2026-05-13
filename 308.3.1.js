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
// for (let i =1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//Bullet 4 
// If a number is divisible by both 3 and 5, log "Fizz Buzz"
// How do I know if it's divided by both numbers? Wouldn't that just be 15?
// I think it's probably 15 since it's the lowest multiple of 3 and 5
// I'll need 2 else if  loops, the else won't have a condition

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log("Fizz Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 ===0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


// Success! Part 1 is complete!
// commit to github



// Part 2: Prime Time
// ELI5: What is a prime number?
//  A number greater than 1
// It can only be made by mutiplying 1 times itself (ex: 1 x 5)
// ex: 6 is not a prime number because 1x6 and 2x3
// As numbers become larger, determining whether or not they're prime is hard, but loops 
// make this easy
//Write a script that accomplishes
// Bullet 1: Declare an arbitrary number n
// Bullet 2: Create a loop that searches for the next prime number, starting at n
// and incrementing from there
// Bullet 3: As soon as you find the prime number, log that number and exit the loop

// let n = 81; // Declare an arbitrary number 'n'
// let isPrime = true // assume the number is prime, unless I prove otherwise
// // Remember you need the computer to explitly tell you yes or no based on code

// //prime numbers are greater than 1, remember?
// if (n <= 1) {
//     isPrime = false; //If less than 1, then it's not prime, so false
// } else { //This portion runs when the if statement if false
//     for (let d = 2; d < n; d++) { //d is basically starting at 2, because it's not 1, then go up and compare to n
//         if (n % d === 0) {
//             isPrime = false;
//             break; // stop checking
//         }
//     }
// }

// console.log(isPrime);

// Part II is complete, it's a lot easier going one by one

// Part III: Feeling Loopy
//CSVs are used when you download instagram information
//copy and past the line and make it a const, try to break it from the n
// Remember it's a string so put it in quotes
// It's similar to excel with rows and columns
// This is confusing, go slow. 
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Loop through the characters of a given CSV string.
// The .length returns the length of the string object
for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];
    console.log(ch);
}