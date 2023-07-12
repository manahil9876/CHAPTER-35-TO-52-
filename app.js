// //  ////CHAPTER  # FUNCTIONS//////
                    
// function displayDateTime() {
//     let currentDate = new Date();
// let dateTimeString = currentDate.toLocaleString();
// document.write(dateTimeString);
//   }
  
//   displayDateTime();
  
//   function greetUser(params) {
    
//   } ~     
// function greetUser(firstName, lastName) {
//   var fullName = firstName + " " + lastName;
//  document.write("Hello, " + fullName + "! Welcome!");
// }

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// greetUser(firstName, lastName);


// function addNumbers() {
//   var num1 = parseFloat(prompt("Enter the first number: "));
//   var num2 = parseFloat(prompt("Enter the second number: "));
//   var sumOfNumbers = num1 + num2;
//   return sumOfNumbers;
// }
// var result = addNumbers();
// console.log("The sum is: " + result);
// document.write("The sum is: " + result);


// function calculate(num1, num2, operator) {
//   var result;
//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     result = num1 / num2;
//   } else {
//     return "Invalid operator";
//   }
//   return result;
// }
// var num1 = parseFloat(prompt("Enter the first number: "));
// var num2 = parseFloat(prompt("Enter the second number: "));
// var operator = prompt("Enter the operator (+, -, *, /): ");

// var result = calculate(num1, num2, operator);
// document.write("The result is: " + result);
// console.log("The result is: " + result);


// function square(number) {
//   return number * number;
// }

// var input = parseFloat(prompt("Enter a number: "));
// var result = square(input);
// console.log("The square of " + input + " is: " + result);
// document.write("The square of " + input + " is: " + result);


// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     var result = 1;
//     for (var i = 2; i <= number; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }
// var input = parseInt(prompt("Enter a number: "));
// var result = factorial(input);
// console.log("The factorial of " + input + " is: " + result);


// function countNumbers(start, end) {
//   var output = "";
//   for (var i = start; i <= end; i++) {
//     output += i + " ";
//   }
//   document.write(output);
// }
// var startNum = parseInt(prompt("Enter the starting number: "));
// var endNum = parseInt(prompt("Enter the ending number: "));
// countNumbers(startNum, endNum);


// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(number) {
//     return number * number;
//   }

//   var baseSquare = calculateSquare(base);
//   var perpendicularSquare = calculateSquare(perpendicular);
//   var hypotenuseSquare = baseSquare + perpendicularSquare;
//   var hypotenuse = Math.sqrt(hypotenuseSquare);

//   return hypotenuse;
// }
// var baseLength = parseFloat(prompt("Enter the length of the base: "));
// var perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular: "));

// var result = calculateHypotenuse(baseLength, perpendicularLength);
// console.log("The hypotenuse of the right angle triangle is: " + result);


// ///=========AS VALUE =======////////////////
// function calculateRectangleAreaWithValue(width, height) {
//   var area = width * height;
//   return area;
// }
// var areaWithValue = calculateRectangleAreaWithValue(15, 5);
// console.log("The area of the rectangle (with arguments as values) is: " + areaWithValue);

// ////////==============AS VARIABLE//////////////
// function calculateRectangleAreaWithVariables(width, height) {
//   var area = width * height;
//   return area;
// }
// var width = 25;
// var height = 5;
// var areaWithVariables = calculateRectangleAreaWithVariables(width, height);
// console.log("The area of the rectangle (with arguments as variables) is: " + areaWithVariables);
// document.write("The area of the rectangle (with arguments as variables) is: " + areaWithVariables);

// function isPalindrome(str) {
//   var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   var reversedStr = cleanedStr.split('').reverse().join('');
  
//   return cleanedStr === reversedStr;
// }
// var input = prompt("Enter a string: ");
// var result = isPalindrome(input);

// if (result) {
//   console.log("The string is a palindrome.");
// } else {
//   console.log("The string is not a palindrome.");
// }

// function capitalizeFirstLetter(str) {
//   var words = str.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   var capitalizedString = words.join(" ");

//   return capitalizedString;
// }
// var input = "the quick brown fox";
// var result = capitalizeFirstLetter(input);
// console.log("Original string: " + input);
// console.log("Capitalized string: " + result);
// document.write("Capitalized string: " + result);

// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longestWord = "";
//   var longestLength = 0;
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestLength) {
//       longestWord = words[i];
//       longestLength = words[i].length;
//     }
//   }
//   return longestWord;
// }
// var input = "Web Development Tutorial";
// var result = findLongestWord(input);
// console.log("Original string: " + input);
// console.log("Longest word: " + result);


// function countLetterOccurrences(str, letter) {
//   var count = 0;
//   var lowerCaseLetter = letter.toLowerCase();
//   var lowerCaseString = str.toLowerCase();
//   for (var i = 0; i < lowerCaseString.length; i++) {
//     if (lowerCaseString[i] === lowerCaseLetter) {
//       count++;
//     }
//   }
//   return count;
// }
// var inputString = "JSResourceS.com";
// var inputLetter = "R";
// var result = countLetterOccurrences(inputString, inputLetter);
// console.log("Original string: " + inputString);
// console.log("Letter to count: " + inputLetter);
// console.log("Number of occurrences: " + result);


// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference.toFixed(2));
// }
// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   console.log("The area is " + area.toFixed(2));
// }
// var radius = parseFloat(prompt("Enter the radius of the circle: "));

// calcCircumference(radius);
// calcArea(radius);



// //---CHAP 38 TO 42 | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |----////

// function power(a, b) {
//   var result = Math.pow(a, b);
//   return result;
// }
// var base = parseFloat(prompt("Enter the base: "));
// var exponent = parseFloat(prompt("Enter the exponent: "));
// var powerResult = power(base, exponent);
// console.log(base + " raised to the power of " + exponent + " is: " + powerResult);


// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var inputYear = parseInt(prompt("Enter a year: "));
// var isLeap = isLeapYear(inputYear);
// if (isLeap) {
//   console.log(inputYear + " is a leap year.");
// } else {
//   console.log(inputYear + " is not a leap year.");
// }


// function calculateTriangleArea(a, b, c) {
//   var s = (a + b + c) / 2; 
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
//   return area;
// }
// var sideA = parseFloat(prompt("Enter the length of side A: "));
// var sideB = parseFloat(prompt("Enter the length of side B: "));
// var sideC = parseFloat(prompt("Enter the length of side C: "));

// var area = calculateTriangleArea(sideA, sideB, sideC);
// console.log("The area of the triangle is: " + area.toFixed(2));

// function calculateAverage(marks1, marks2, marks3) {
//   var average = (marks1 + marks2 + marks3) / 3;
//   return average;
// }
// function calculatePercentage(totalMarks, obtainedMarks) {
//   var percentage = (obtainedMarks / 225) * 100;
//   return percentage.toFixed(2);
// }
// function mainFunction() {
//   var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1: "));
//   var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2: "));
//   var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3: "));
//   var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//   var percentageMarks = calculatePercentage(100, subject1Marks + subject2Marks + subject3Marks);

//   console.log("Average marks: " + averageMarks.toFixed(2));
//   console.log("Percentage marks: " + percentageMarks + "%");
// }
// mainFunction();

// function customIndexOf(string, searchChar) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === searchChar) {
//       return i;
//     }
//   }
//   return -1; 
// }
// var inputString = "Hello, World!";
// var searchCharacter = "L";
// var result = customIndexOf(inputString, searchCharacter);
// console.log("String: " + inputString);
// console.log("Search Character: " + searchCharacter);
// console.log("Index of the search character: " + result);


// function deleteVowels(sentence) {
//   var vowels = "aeiouAEIOU";
//   var result = "";
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//     if (vowels.indexOf(char) === -1) {
//       result += char;
//     }
//   }
//   return result;
// }
// var inputSentence = prompt("Enter a sentence (not more than 25 characters): ");
// var modifiedSentence = deleteVowels(inputSentence);
// console.log("Original sentence: " + inputSentence);
// console.log("Modified sentence without vowels: " + modifiedSentence);


// function countSuccessiveVowels(text) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";

//   for (var i = 0; i < text.length - 1; i++) {
//     var currentChar = text[i];
//     var nextChar = text[i + 1];
//     if (vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1) {
//       switch (currentChar + nextChar) {
//         case "ea":
//         case "ei":
//         case "eo":
//         case "eu":
//         case "ia":
//         case "ie":
//         case "io":
//         case "iu":
//         case "oa":
//         case "oi":
//         case "ou":
//         case "ua":
//         case "ue":
//         case "ui":
//         case "uo":
//           count++;
//           break;
//       }
//     }
//   }

//   return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var occurrenceCount = countSuccessiveVowels(sentence);
// console.log("Number of occurrences of two successive vowels: " + occurrenceCount);

// function convertToMeters(distance) {
//     var meters = distance * 1000;
//     console.log("Distance in meters: " + meters + " m");
//   }
//   function convertToFeet(distance) {
//     var feet = distance * 3280.84;
//     console.log("Distance in feet: " + feet + " ft");
//   }
//   function convertToInches(distance) {
//     var inches = distance * 39370.1;
//     console.log("Distance in inches: " + inches + " in");
//   }
//   function convertToCentimeters(distance) {
//     var centimeters = distance * 100000;
//     console.log("Distance in centimeters: " + centimeters + " cm");
//   }
//   var inputDistance = parseFloat(prompt("Enter the distance between two cities (in km): "));
  
//   convertToMeters(inputDistance);
//   convertToFeet(inputDistance);
//   convertToInches(inputDistance);
//   convertToCentimeters(inputDistance);


// function calculateOvertimePay(hoursWorked) {
//     var overtimeRate = 12.00; 
//     var regularHours = 40; 
//     var overtimeHours = Math.max(hoursWorked - regularHours, 0); 
//     var overtimePay = overtimeHours * overtimeRate; 

//     return overtimePay;
//   }
//   var inputHours = parseInt(prompt("Enter the number of hours worked: "));
//   var overtimePay = calculateOvertimePay(inputHours);
  
//   console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));
  


// function calculateCurrencyNotes(amount) {
//     var denomination100 = Math.floor(amount / 100); 
//     var remainingAmount = amount % 100;
//     var denomination50 = Math.floor(remainingAmount / 50); 
//     var denomination10 = Math.floor((remainingAmount % 50) / 10); 
//     var denomination5 = remainingAmount % 10;

//     console.log("Number of 100 notes: " + denomination100);
//     console.log("Number of 50 notes: " + denomination50);
//     console.log("Number of 10 notes: " + denomination10);
//     console.log("Number of 5 rupees coins: " + denomination5);
//   }
//   var inputAmount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds): "));
//   calculateCurrencyNotes(inputAmount);
  
/////======== 43 TO 48===========///////////////

// document.getElementById("myLink").addEventListener("click", function() {
//   alert("You clicked the link!");
// });


var mobileImages = document.querySelectorAll("#mobileContainer img");

mobileImages.forEach(function(image) {
  image.addEventListener("click", function() {
    var imageName = image.alt;
    alert("You clicked on " + imageName);
  });
});

var counterValue = 0;
var counterElement = document.getElementById("counterValue");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
  counterValue++;
  counterElement.textContent = counterValue;
});
decreaseBtn.addEventListener("click", function() {
  if (counterValue > 0) {
    counterValue--;
    counterElement.textContent = counterValue;
  }
});

//////-------------49 TO 52---------------------/////////////////

function displayFormData(event) {
  event.preventDefault();

  var form = document.getElementById("signupForm");
  var formDataDiv = document.getElementById("formData");

  var name = form.elements[ "name"].value;
  var email = form.elements["email"].value;
  var password = form.elements["password"].value;

  formDataDiv.innerHTML = "<h3>Signup Form Data:</h3>" +
  "<p><strong>Name:</strong> " + name + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
   "<p><strong>Password:</strong> " + password + "</p>";

  form.reset();
}


function showFullDetails() {
  var shortDetails = document.querySelector('.shortDetails');
  var fullDetails = document.querySelector( '.fullDetails');
  var readMoreBtn = document.querySelector('.readMoreBtn');

  shortDetails.style.display = 'none';
  fullDetails.style.display = 'block';
  readMoreBtn.style.display = 'none';
}



var studentData = [];

function addStudent(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");

  var student = {
    name: nameInput.value,
    age: ageInput.value
  };

  studentData.push(student);

  nameInput.value = "";
  ageInput.value = "";

  displayStudentData();
}

function displayStudentData() {
  var studentTable = document.getElementById("studentData");
  studentTable.innerHTML = "";

  for (var i = 0; i < studentData.length; i++) {
    var student = studentData[i];

    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var ageCell = document.createElement("td");
    var actionsCell = document.createElement("td");

    nameCell.textContent = student.name;
    ageCell.textContent = student.age;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      deleteStudent(i);
    });

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
      editStudent(i);
    });

    actionsCell.appendChild(deleteBtn);
    actionsCell.appendChild(editBtn);

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(actionsCell);

    studentTable.appendChild(row);
  }
}
function deleteStudent(index) {
  studentData.splice(index, 1);
  displayStudentData();
}

function editStudent(index) {
  var editForm = document.getElementById("editForm");
  var editNameInput = document.getElementById("editName");
  var editAgeInput = document.getElementById("editAge");

  var student = studentData[index];
  editNameInput.value = student.name;
  editAgeInput.value = student.age;

  editForm.style.display = "block";
}

function updateStudent() {
  var editNameInput = document.getElementById("editName");
  var editAgeInput = document.getElementById("editAge");

  var updatedStudent = {
    name: editNameInput.value,
    age: editAgeInput.value
  };

  var index = studentData.findIndex(function(student) {
    return student.name === updatedStudent.name && student.age === updatedStudent.age;
  });

  if (index !== -1) {
    studentData[index] = updatedStudent;
    displayStudentData();
    cancelEdit();
  }
}
function cancelEdit() {
  var editForm = document.getElementById("editForm");
  editForm.style.display = "none";
}





