// Here's another problem that involves validation and calculation!

// Problem: Calculate the Discount on a Product
// A store is offering a discount on products, but only if the price of the product is valid. The discount is 15% of the product's price.

// Problem Description:
// The function should take a number as input, which represents the price of a product.
// If the price is valid (i.e., a number greater than 0), calculate the discount as 15% of the price.
// If the input is not a number or less than or equal to 0, return "Invalid".

// function discountProduct (price) {
//     if (typeof price !== "number" || price <= 0) {
//         return "Invalid"
//     } 
    
//     let discount = price * 15 /100;
//     return discount;

// }

// const product = discountProduct(500);
// console.log(product);



// function cashOut( money ) {
//    if (typeof money !== "number" || money < 0) {
//     return "Invalid";
//    }
   
//     let cashoutAmount = money * 1.75 / 100;
//     return cashoutAmount;
// }

// const result = cashOut(0);
// console.log(result);


// function  validEmail(email) {
//     let spilittedEmail = email.split("@");
//     const firstName = spilittedEmail[0];
//     const lastName = spilittedEmail[1];


    
// }




// function validEmail(email) {
//     if (typeof email !== 'string') {
//         return "Invalid";
//     }
//     if (email.includes(' ')) {
//         return false;
//     }

//     const invalidStartChars = ['.', '-', '_', '+', '@'];
//     if (invalidStartChars.includes(email[0])) {
//         return false;
//     }
//     const spilittedEmail = email.split('@');
//     if (spilittedEmail.length !== 2) {
//         return false;
//     }
    
//     if (!email.endsWith('.com')) {
//         return false;
//     }
//     return true;
// }


/*
function validEmail(email) {
    // Check if the input is a string
    if (typeof email !== 'string') {
        return "Invalid";
    }

    // Check if the email contains spaces
    if (email.includes(' ')) {
        return false;
    }

    // Check if the email starts with an invalid character
    const invalidStartChars = ['.', '-', '_', '+', '@'];
    if (invalidStartChars.includes(email.split('')[0])) {
        return false;
    }

    // Split the email by '@' and check if there are exactly two parts
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }

    // Check if the email ends with '.com' using split and includes
    if (!email.split('.').includes('com')) {
        return false;
    }

    // If all conditions are met, return true
    return true;
}
const result = validEmail("programming-hero.com");
console.log(result);
*/




// function validEmail(email) {
//     // Check if the input is a string
//     if (typeof email !== 'string') {
//         return "Invalid";
//     }

//     // Check if the email contains spaces
//     if (email.includes(" ")) {
//         return false;
//     }

//     // Check if the email starts with an invalid character
//     let invalidStartChars = [".", "-", "_", "+", "@"];
//     for (let i = 0; i < invalidStartChars.length; i++) {
//         if (email[0] === invalidStartChars[i]) {
//             return false;
//         }
//     }

//     // Split the email by '@' and check if there are exactly two parts
//     const parts = email.split("@");
//     if (parts.length !== 2) {
//         return false;
//     }

//     // Check if the email ends with '.com'
//     const domainParts = email.split(".");
//     if (!domainParts.includes("com")) {
//         return false;
//     }

//     // If all conditions are met, return true
//     return true;
// }

// const result = validEmail("nesh  ad2gmail.com");
// console.log(result);  // Expected output: true






// function electionResult(votes) {
//     // Check if the input is an array
//     if (!Array.isArray(votes)) {
//         return "Invalid";
//     }

//     let mangoVotes = 0;
//     let bananaVotes = 0;

//     // Loop through the array and count mango and banana votes
//     for (let i = 0; i < votes.length; i++) {
//         if (votes[i] === "mango") {
//             mangoVotes++;
//         } else if (votes[i] === "banana") {
//             bananaVotes++;
//         }
//     }


//     if (mangoVotes > bananaVotes) {
//         return "Mango";
//     } else if (bananaVotes > mangoVotes) {
//         return "Banana";
//     } else {
//         return "Draw";
//     }
// }

// const votes =  ["mango", "banana", "Na-Vote", "mango"];
// console.log(electionResult(votes)); // This will output "Mango"

// // Example invalid input (not an array):
// // console.log(electionResult("invalid input")); // This will output "Invalid"



// function isBestFriend(friend1, friend2) {
//     if (typeof friend1 !== "object" || typeof friend2 !== "object") {
//         return false;
//     }
    
//     return friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll;
// }

// const friendA = isBestFriend({ name: "Rahim", roll: 2, bestFriend: 1 });
// const friendB = isBestFriend({ name: "Karim", roll: 2, bestFriend: 1 });
// const friendC = isBestFriend({ name: "Rakib", roll: 3, bestFriend: 4 });
// const friendD = isBestFriend({ name: "Hasan", roll: 4, bestFriend: 5 });

// console.log(friendA, friendB,friendC, friendD );


// function isBestFriend(friend1, friend2) {
//     if (typeof friend1 !== "object" || typeof friend2 !== "object") {
//         return "Invalid"; // 🚩 Challenge: Return "Invalid" for non-objects
//     }
    
//     return friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll;
// }

// // ✅ Properly pass two objects
// const result1 = isBestFriend({ name:"kashem", roll: 2, bestFriend: 11},"Kashem er Kono Bondhu Nai");
// const result2 = isBestFriend({ name: "Rakib", roll: 3, bestFriend: 4 }, { name: "Hasan", roll: 4, bestFriend: 5 });

// console.log(result1, result2); // ✅ Should print: true false


// function calculateWatchTime(watchTimes) {
//     // 🚩 Challenge: Check if input is an array and all elements are numbers
//     if (!Array.isArray(watchTimes)) {
//         return "Invalid";
//     }

//     for (let i = 0; i < watchTimes.length; i++) {
//         if (typeof watchTimes[i] !== "number") {
//             return "Invalid";
//         }
//     }

//     // Calculate total watch time in seconds
//     let totalSeconds = 0;
//     for (let i = 0; i < watchTimes.length; i++) {
//         totalSeconds += watchTimes[i];
//     }

//     // Convert seconds to hours, minutes, and seconds
//     const hour = Math.floor(totalSeconds / 3600);
//     const minute = Math.floor((totalSeconds % 3600) / 60);
//     const second = totalSeconds % 60;

//     return { hour, minute, second };
// }

// // Example Usage
// const result = calculateWatchTime([100, 99, 119, 300]); 
// console.log(result); // Expected Output: { hour: 1, minute: 32, second: 45 }
