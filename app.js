// function power(a, b) {
//     // Check if the exponent is zero
//     if (b === 0) {
//         return 1;
//     }
//     // Initialize result to 1 (multiplicative identity)
//     let result = 1;
//     // Multiply the base 'a' by itself 'b' times
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// // Example usage:
// console.log(power(2, 3)); // Output: 8
// console.log(power(5, 4)); // Output: 625
// console.log(power(7, 0)); // Output: 1

// _________________________________________________--Answer 2__________________________________________________________
// function isLeapYear(year) {
   
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

 
// console.log(isLeapYear(2012));  
// console.log(isLeapYear(2016));  
// console.log(isLeapYear(2020));  
// console.log(isLeapYear(2023));  

// _________________________________________________--Answer 3__________________________________________________________

// function triangleArea(a, b, c) {
    
//     var S = (a + b + c) / 2;
    
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
//     return area;
// }

 
// console.log(triangleArea(3, 4, 5));  
// console.log(triangleArea(6, 8, 10));  
// console.log(triangleArea(7, 10, 12));  


// _________________________________________________--Answer 4__________________________________________________________
// // Function to calculate the average of three marks
// function calculateAverage(marks) {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     return sum / marks.length;
// }

// // Function to calculate the percentage of total marks
// function calculatePercentage(marks) {
//     let totalMarks = 0;
//     let maxMarks = marks.length * 100; // Assuming each subject is out of 100
//     for (let i = 0; i < marks.length; i++) {
//         totalMarks += marks[i];
//     }
//     return (totalMarks / maxMarks) * 100;
// }

// // Main function to receive marks, calculate average and percentage, and display results
// function mainFunction() {
//     // Sample marks received by the student in 3 subjects
//     let marks = [85, 90, 78];

//     // Calculate average and percentage
//     let average = calculateAverage(marks);
//     let percentage = calculatePercentage(marks);

//     // Display the results
//     console.log(`Average Marks: ${average}`);
//     console.log(`Percentage: ${percentage}%`);
// }

// // Call the main function
// mainFunction();

// _________________________________________________--Answer 5__________________________________________________________

// // Custom function to find the index of a character in a string
// function customIndexOf(str, char) {
//     // Loop through the string to find the character
//     for (let i = 0; i < str.length; i++) {
//         // If the character is found, return its index
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     // If the character is not found, return -1
//     return -1;
// }

// // Example usage:
// console.log(customIndexOf('hello', 'e')); // Output: 1
// console.log(customIndexOf('world', 'o')); // Output: 1
// console.log(customIndexOf('javascript', 'a')); // Output: 1
// console.log(customIndexOf('javascript', 'z')); // Output: -1

// _________________________________________________--Answer 6__________________________________________________________
// Function to delete all vowels from a sentence
// function deleteVowels(sentence) {
//     // Define a string of vowels
//     const vowels = 'aeiouAEIOU';
//     // Initialize an empty string to store the result
//     let result = '';
    
//     // Loop through each character of the sentence
//     for (let i = 0; i < sentence.length; i++) {
//         // If the character is not a vowel, add it to the result
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
    
//     return result;
// }

// // Example usage:
// console.log(deleteVowels('Hello World')); // Output: "Hll Wrld"
// console.log(deleteVowels('JavaScript is fun')); // Output: "JvScrpt s fn"
// console.log(deleteVowels('I love coding')); // Output: " lv cdng"



// _________________________________________________--Answer 7__________________________________________________________
// Function to count occurrences of two vowels in succession
// function countSuccessiveVowels(sentence) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < sentence.length - 1; i++) {
//         // Check if the current and next character are both vowels
//         switch (true) {
//             case vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1]):
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }
    
//     return count;
// }

// // Example usage:
// console.log(countSuccessiveVowels('I see you.')); // Output: 2 ("ee" and "ou




// _________________________________________________--Answer 8__________________________________________________________


// Function to convert kilometers to meters
function convertToMeters(kilometers) {
    return kilometers * 1000;
}

// // Function to convert kilometers to feet
// function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
// }

// // Function to convert kilometers to inches
// function convertToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// // Function to convert kilometers to centimeters
// function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
// }

// // Main function to get distance input and display conversions
// function mainFunction() {
//     // Example input for distance in kilometers
//     const kilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
    
//     // Convert distances
//     const meters = convertToMeters(kilometers);
//     const feet = convertToFeet(kilometers);
//     const inches = convertToInches(kilometers);
//     const centimeters = convertToCentimeters(kilometers);
    
//     // Display the results
//     console.log(`${kilometers} km is equivalent to:`);
//     console.log(`${meters} meters`);
//     console.log(`${feet} feet`);
//     console.log(`${inches} inches`);
//     console.log(`${centimeters} centimeters`);
// }

// // Call the main function
// mainFunction();

// _________________________________________________--Answer 9__________________________________________________________
// Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40; // Regular working hours
//     const overtimeRate = 12.00; // Overtime pay rate per hour
//     let overtimePay = 0; // Initialize overtime pay

//     // Check if hours worked exceed regular hours
//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
//         overtimePay = overtimeHours * overtimeRate; // Calculate overtime pay
//     }

//     return overtimePay;
// }

// // Main function to get input and display overtime pay
// function mainFunction() {
//     // Example input for hours worked
//     const hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));

//     // Calculate overtime pay
//     const overtimePay = calculateOvertimePay(hoursWorked);

//     // Display the result
//     console.log(`Total hours worked: ${hoursWorked}`);
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
// }

// // Call the main function
// mainFunction();







// _________________________________________________--Answer 10__________________________________________________________

 
 
