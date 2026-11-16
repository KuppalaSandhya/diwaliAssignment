// const temperature = 30;
// if (temperature > 30) {
//     console.log("hot")
// }

// else if (temperature <  15)
// {
//     console.log("cold")
// }
//  else
//     {
//          console.log("warm")
//}

// function isLong(word){
//     const length = word.length
//     return (length > 5)
// }

// console.log(isLong("elephant"));

// function getBase(km,isNight){
//     if(km === 0 ){
//       return (isNight) ? 9 : 5;
//     }
//     return ;
// }

// function calculateFare(km, isNight){
//       if(km === 0 ){
//       return (isNight) ? 9 : 5;
//     }

//      const sum = 2 + calculateFare(km - 1, isNight)
//      return sum;
// }

// console.log(calculateFare(10, false));

// const currency = {
// India : "INR",
//  USA : "USD",
// Japan : "JPY"
// }

// function getCurrency(currency, country){
//     return currency[country]
// }

// const country = "India"
// console.log(getCurrency( currency ,country));

// function selectOdds(array){
//     const newArray = []
// for (let i = 0; i < array.length; i ++){
//   if(array[i] % 2 === 1) newArray.push (array[i]);
// }
// return newArray
// }

// const array = [1,2,3,4,5,6]

// console.log(selectOdds(array));

// mapLengths(["apple", "cat", "Four"]) //[5, 3, 4].

// function mapLengths (words) {
//     const length = [];
// for (let i = 0; i < words.length; i ++){
// length.push( words[i]. length)
// }
// return length;
// }

//console.log(mapLengths(["apple", "cat", "Four"]));


// function getDataType(day) {
//     switch (day) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:

//             return ("weekday");

//         case 6:
//         case 7:

//             return ("weekend");

//         default:

//             return ("invalidDay");

//     }
// }

// const day = 7;
// console.log(getDataType(day));

// age = 22;
// isStudent = false;

// (age < 18 && isStudent) ? "discount" : "full price"

// function classifyTemperature(celsius) {
//     if (celsius < 10) return "cold"
//     else if (celsius > 25) return "hot"
//     return "pleasant"
// }
// console.log(classifyTemperature(10));


// function isEven(number) {
//     return (number % 2 === 0)
// }

// function countEvensBetween(start, end) {
//     let count = 0;

//     for (let i = start; i <= end; i++) {
//         if (isEven(i)) {
//             count += 1;
//         }
//     }

//     return count;
// }


// function isEven(number) {
//     return number % 2 === 0;
// }

// function countEvensBetween(start, end) {
//     let count = 0;

//     for (let index = start; index <= end; index++) {
//         count += isEven(index) ? 1 : 0;
//     }

//     return count;
// }
// console.log(countEvensBetween(5, 2));

// function getPositiveNumbers(numbers) {
//     let positiveNumbers = []

//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] > 0) {
//             positiveNumbers.push(numbers[index]);
//         }
//     }

//     return positiveNumbers
// }

// const numbers = [0, 1, 3, -5, -8];
// console.log(getPositiveNumbers(numbers));
// console.log(getPositiveNumbers([]))
// console.log(getPositiveNumbers([-10, -2, 0]))
// console.log(getPositiveNumbers([0.5, -0.5, 4]))


// • name: the student's name
// • average: the arithmetic mean of scores (or 0 if scores is empty)
// • passed: true if average >= 60, and false otherwise

// function getAverage(scores) {

//     if (!scores || scores.length === 0) {
//         return 0;
//     }

//     let sum = 0;

//     for (const score of scores) {
//         sum += score
//     }

//     return sum / scores.length;
// }

// function hasPassed(average) {
//     return average >= 60
// }

// function summarizeStudent(student) {
//     const average = getAverage(student.scores);
//     const isPass = hasPassed(average);

//     return {
//         name: student.name,
//         average: Number(average.toFixed(2)),
//         passed: isPass
//     }
// }

// const student = {
//     name: "Asha",
//     scores: [80, 90, 70]
// }

// console.log(summarizeStudent(student));


// const students = [
//     { name: "Asha", average: 85 },
//     { name: "Ravi", average: 92 },
//     { name: "Meera", average: 85 },
//     { name: "Kabir", average: 74 },
// ];

// function hasHonoredMarks(average, honoredMarks = 85) {
//     return average >= honoredMarks
// }

// function getHonorRollNames(students) {
//     const honoredStudents = [];

//     for (const student of students) {
//         if (hasHonoredMarks(student.average)) {
//             honoredStudents.push(student.name)
//         }
//     }

//     return honoredStudents;
// }

// console.log(getHonorRollNames([]))
// console.log(getHonorRollNames([{ name: "Ananya", average: 84.99 }, { name: "Dev", average: 85 }]))
// console.log(getHonorRollNames([{ name: "Tara", average: 95 }]))



// function calculateTotalPrice(cartItems) {
//     let totalPrice = 0;

//     for (const cartItem of cartItems) {
//         totalPrice += cartItem.price * cartItem.quantity;
//     }
//     return totalPrice
// }
// console.log(calculateTotalPrice([]))
// console.log(calculateTotalPrice([{ name: "Pencil", price: 10, quantity: 0 }]))
// console.log(calculateTotalPrice([{ name: "Free Sample", price: 0, quantity: 5 }]))



