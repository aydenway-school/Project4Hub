// Navigation Script
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

function showApp(appName) {
    // Hide all app sections
    const allSections = document.querySelectorAll('.app-section');
    allSections.forEach(section => section.classList.remove('active'));
    
    // Show selected app
    document.getElementById(appName + '-app').classList.add('active');
    
    // Close mobile menu
    navMenu.classList.remove('active');
}

// Temp Converter Functions
// Function to update the formula display based on selected conversion type
// TODO: write the body of this updateFormula() function
/* Steps to complete updateFormula():
   1. Get the value of the conversion type selected by the user from the element with id "conversion-type"
   2. Get the element with id "formula" to display the formula
   3. Check if the conversion type is "ftoc" (Fahrenheit to Celsius)
   4. If it is "ftoc", set the formula text to show the Fahrenheit to Celsius formula
   5. Otherwise, set the formula text to show the Celsius to Fahrenheit formula

   DONE
*/
function updateFormula() {
    // please write the body of this function

    const conversionType = document.getElementById("conversion-type").value;

    if (conversionType === "ftoc") {
        document.getElementById("formula").textContent = "C = (F - 32) * 5/9";
    }
    else {
        document.getElementById("formula").textContent = "F = (C * 9/5) + 32";
    }
    // Update the formula display with the appropriate formula
}

// Function to assess temperature and provide text and color indicators
function assessTemperature(temp, scale) {
    const tempElement = document.getElementById("temp-assessment");
    let assessment = "";
    let color = "";
    
    // Temperature thresholds differ based on scale
    if (scale === "celsius") {
        if (temp <= 0) {
            assessment = "Very Cold";
            color = "#3498db"; // Blue
        } else if (temp < 10) {
            assessment = "Cold";
            color = "#7fb3d5"; // Light blue
        } else if (temp < 20) {
            assessment = "Cool";
            color = "#a9cce3"; // Very light blue
        } else if (temp < 30) {
            assessment = "Moderate";
            color = "#2ecc71"; // Green
        } else if (temp < 40) {
            assessment = "Warm";
            color = "#f39c12"; // Orange
        } else {
            assessment = "Hot";
            color = "#e74c3c"; // Red
        }

    //TODO
    /* Steps to complete the Fahrenheit assessment:
       1. Use an else statement to handle the Fahrenheit scale
       2. Set up conditional statements for temperature ranges in Fahrenheit
       3. For each range, specify the appropriate assessment text and color
       4. Use the same color scheme as the Celsius part but with Fahrenheit thresholds
       5. Very Cold: <= 32°F (Blue)
       6. Cold: 32-49°F (Light blue)
       7. Cool: 50-67°F (Very light blue)
       8. Moderate: 68-85°F (Green)
       9. Warm: 86-103°F (Orange)
       10. Hot: >= 104°F (Red)

       DONE
    */
    } else { // Fahrenheit
        // please write the conditional statements based on the specification

        if (temp <= 32) {
            assessment = "Very Cold";
            color = "#3498db"; // Blue
        } else if (temp < 49) {
            assessment = "Cold";
            color = "#7fb3d5"; // Light blue
        } else if (temp < 67) {
            assessment = "Cool";
            color = "#a9cce3"; // Very light blue
        } else if (temp < 85) {
            assessment = "Moderate";
            color = "#2ecc71"; // Green
        } else if (temp < 103) {
            assessment = "Warm";
            color = "#f39c12"; // Orange
        } else {
            assessment = "Hot";
            color = "#e74c3c"; // Red
        }
    }
    
    // Update the assessment display with text and color
    tempElement.textContent = `Temperature Assessment: ${assessment}`;
    tempElement.style.color = color;
    tempElement.style.fontWeight = "bold";
}

// Function to perform temperature conversion based on selection
function convertTemperature() {
    // Get the input temperature value
    // TODO: write the code to get the input temperature
    /* Steps to get the input temperature:
       1. Get the element with id "temperature"
       2. Get the value entered by the user
       3. Convert the value to a floating-point number using parseFloat()
    */
    // please write the code to get the input temperature as specified above
    const temperatureInput = document.getElementById("temperature");
    const temperatureValue = parseFloat(temperatureInput.value);

    // DONE
    
    // Get the conversion type
    const conversionType = document.getElementById("conversion-type").value;
    
    // Get the result element
    const resultElement = document.getElementById("conversion-result");
    
    // Validate that the input is a number
    if (isNaN(temperatureValue)) {
        resultElement.textContent = "Invalid input. Please enter a number.";
        document.getElementById("temp-assessment").textContent = "";
        return;
    }
    
    // Perform the conversion based on the selected type
    // TODO: write the code to do the conversion
    /* Steps to perform the conversion:
       1. Create a variable to store the result
       2. Check if the conversion type is "ftoc" (Fahrenheit to Celsius)
       3. If it is "ftoc", apply the formula: C = (F - 32) * 5/9
       4. Display the result formatted with the appropriate units
       5. Call assessTemperature with the result and "celsius" scale
       6. If it's not "ftoc", it must be "ctof" (Celsius to Fahrenheit)
       7. Apply the formula: F = (C * 9/5) + 32
       8. Display the result formatted with the appropriate units
       9. Call assessTemperature with the result and "fahrenheit" scale
       10. Use toFixed(2) to round the result to 2 decimal places
    */
    // please write the code to calculate the result as specified above

    // checks what conversion is being used, performs the calculation, and then dislays it in the result element
    let result;
    if (conversionType === "ftoc") {
        result = (temperatureValue - 32) * (5 / 9);
        resultElement.textContent = `${temperatureValue} °F = ${result.toFixed(2)} °C`;
    }
    else {
        result = (temperatureValue * (9 / 5)) + 32;
        resultElement.textContent = `${temperatureValue} °C = ${result.toFixed(2)} °F`;
    }
    assessTemperature(temperatureValue, document.getElementById("conversion-type").value === "ftoc" ? "fahrenheit" : "celsius");
}

// Function to clear the converter
// TODO: write the body of this clearConverter() function
/* Steps to complete clearConverter():
   1. Set the value of the input element with id "temperature" to an empty string
   2. Set the textContent of the element with id "conversion-result" to an empty string
   3. Set the textContent of the element with id "temp-assessment" to an empty string
*/
function clearConverter() {

    document.getElementById('temperature').value = ''; // finds the temperature input and switches it back to blank
    // please write the body of the function as specified above
    const conversionResult = document.getElementById('conversion-result');
    const tempAssessment = document.getElementById('temp-assessment');

    // Clear the result and temperature text
    if (conversionResult) {
        conversionResult.innerHTML = '';
    }
    if (tempAssessment) {
        tempAssessment.innerHTML = '';
    }

}

// Magic 8 Ball Functions
const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

let historyItems = [];

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function shakeBall() {
    const question = document.getElementById('question').value.trim();
    const ball = document.getElementById('ball');
    const answerElement = document.getElementById('answer');
    const questionDisplay = document.getElementById('question-display');
    const questionInput = document.getElementById('question');
    
    if (question === '') {
        alert('Please ask a question first!');
        return;
    }

    answerElement.textContent = '8';
    
    ball.style.transform = 'translateX(-5px)';
    setTimeout(() => { ball.style.transform = 'translateX(5px)'; }, 100);
    setTimeout(() => { ball.style.transform = 'translateX(-5px)'; }, 200);
    setTimeout(() => { ball.style.transform = 'translateX(5px)'; }, 300);
    setTimeout(() => { ball.style.transform = 'translateX(0)'; }, 400);
    
    setTimeout(() => {
        const randomAnswer = getRandomAnswer();
        answerElement.textContent = randomAnswer;
        questionDisplay.textContent = `"${question}"`;
        questionDisplay.style.opacity = 1;
        addToHistory(question);
    }, 500);
    
    questionInput.value = '';
}

function resetBall() {
    document.getElementById('answer').textContent = '8';
    document.getElementById('question-display').textContent = '';
    document.getElementById('question-display').style.opacity = 0;
    document.getElementById('question').value = '';
}

function addToHistory(question) {
    historyItems.unshift(question);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const questionHistory = document.getElementById('question-history');
    questionHistory.innerHTML = '';
    
    historyItems.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'history-item';
        listItem.textContent = question;
        questionHistory.appendChild(listItem);
    });
}

function clearHistory() {
    historyItems = [];
    updateHistoryDisplay();
}

// Task List Functions
// 2D Array to store tasks - each task is [taskText, priority]
let tasks = [];
// New 2D array to store date and time - each item is [dateString, timeString]
let taskDueDates = [];

// Array of random tasks for the random task feature - focused on health and student wellness
const randomTasks = [
  "Take a short walk",
  "Drink a glass of water",
  "Stretch for 5 minutes",
  "Practice deep breathing for 2 minutes",
  "Stand up and move around for 5 minutes",
  "Do a quick meditation session",
  "Write in a gratitude journal",
  "Have a healthy snack",
  "Rest your eyes for 2 minutes",
  "Fix your posture",
  "Do a quick workout",
  "Call a friend or family member",
  "Take a short nap",
  "Listen to calming music",
  "Drink a cup of tea",
  "Practice mindfulness for 5 minutes",
  "Step outside for fresh air",
  "Do a quick stretching routine"
];

// Get DOM elements
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const taskList = document.getElementById('task-list');

// Function to validate date in MM/DD format
// TODO
/* 1. Create a function that validates the date string in MM/DD format
   2. Check if the string has exactly one '/' character
   3. Split the string by '/' and check if we have exactly 2 parts
   4. Check if both parts have exactly 2 digits
   5. Verify that all characters are digits (Hint: use charCodeAt method to check ASCII values)
   6. Convert parts to numbers and check if month is between 1-12
   7. Check if day is valid for the given month (use an array for days in each month)
   8. Return true if date is valid, false otherwise
*/
function validateDate(dateStr) {
  // write the body of this function please

  // Check if the string has exactly one '/' character
  if (dateStr.indexOf('/') === -1 || dateStr.indexOf('/') !== dateStr.lastIndexOf('/')) {
    return false;
  }

    //console.log(dateStr);


  // Split the string by '/' and check if we have exactly 2 parts
  const parts = dateStr.split('/');
  if (parts.length !== 2) {
    return false;
  }

  //console.log(dateStr);

  // check if both parts have exactly 2 digits
  if (parts[0].length !== 2 || parts[1].length !== 2) {
    return false;
  }

  // Verify that all characters are digits
  for (let i = 0; i < dateStr.length; i++) {
    const charCode = dateStr.charCodeAt(i);
    if (charCode < 47 || charCode > 57) { // ASCII codes for '0' to '9' + 47 for '/'
      return false;
    }
  }

    //console.log(dateStr);
  // Convert parts to numbers
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  // Check if month is between 1-12
  if (month < 1 || month > 12) {
    return false;
  }

  //console.log(dateStr);

  // Array for days in each month (assuming non-leap year)
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Check if day is valid for the given month
  if (day < 1 || day > daysInMonth[month]) {
    return false;
  }
  
  return true;
}

// Function to validate time in 24-hour format (HH:MM)
// TODO
/* 1. Create a function that validates the time string in 24-hour (HH:MM) format
   2. Check if the string has exactly one ':' character
   3. Split the string by ':' and check if we have exactly 2 parts
   4. Check if both parts have exactly 2 digits
   5. Verify that all characters are digits (Hint: use charCodeAt method to check ASCII values)
   6. Convert parts to numbers and check if hours are between 0-23
   7. Check if minutes are between 0-59
   8. Return true if time is valid, false otherwise
*/
function validateTime(timeStr) {
  // write the body of this function please

  // Check if the string has exactly one ':' character
  if (timeStr.indexOf(':') === -1 || timeStr.indexOf(':') !== timeStr.lastIndexOf(':')) {
    return false;
  }
  // Split the string by ':' and check if we have exactly 2 parts
  const parts = timeStr.split(':');

  if (parts.length !== 2) {
    return false;
  }

  // check if both parts have exactly 2 digits
  if (parts[0].length !== 2 || parts[1].length !== 2) {
    return false;
  }

  // Verify that all characters are digits
  for (let i = 0; i < timeStr.length; i++) {
    const charCode = timeStr.charCodeAt(i);
    if (charCode < 48 || charCode > 58) { // ASCII codes for '0' to '9' + 58 for ':'
      return false;
    }
  }
  // Convert parts to numbers
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  // Check if hours are between 0-23
  if (hours < 0 || hours > 23) {
    return false;
  }
  // Check if minutes are between 0-59
  if (minutes < 0 || minutes > 59) {
    return false;
  }
  return true;
}

// TODO
/* 1. Create a function that calculates priority based on date and time
   2. Get the current year using new Date().getFullYear()
   3. Parse the date and time from strings to numbers using:
      - Split dateStr by '/' and convert parts to numbers
      - Split timeStr by ':' and convert parts to numbers
   4. Create a new Date object with the provided date and time
      (Hint: new Date(year, month-1, day, hours, minutes))
   5. Return the timestamp (milliseconds since epoch) by using dueDate.getTime()
      (This will be used for sorting tasks by due date/time) 
      (This last return statement is already given to you.)
*/
function calculatePriority(dateStr, timeStr) {
  // Get current date
  // write the code to get the year
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Parse the date and time
  // write the code to parse the date and time
  const [month, day] = dateStr.split('/').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  // Create a date object for the due date
  // write the code to create a date object for the due date
  const dueDate = new Date(currentYear, month - 1, day, hours, minutes);
  
  // For sorting, we'll use a more precise priority based on exact timestamp
  // Return the timestamp itself for more accurate sorting
  return dueDate.getTime();
}



// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  const dateStr = dateInput.value.trim();
  const timeStr = timeInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task first!');
    return;
  }
  
  if (!validateDate(dateStr)) {
    alert('Please enter a valid date in MM/DD format!');
    return;
  }
  
  if (!validateTime(timeStr)) {
    alert('Please enter a valid time in 24-hour format (HH:MM)!');
    return;
  }
  
  // Calculate priority based on date and time
  const priority = calculatePriority(dateStr, timeStr);
  console.log(priority);
  
  // Create task array [taskText, priority]
  const task = [taskText, priority];
  
  // Add to tasks array
  tasks.push(task);
  
  // Add to due dates array
  taskDueDates.push([dateStr, timeStr]);
  
  // Sort tasks by priority
  sortTasksByPriority();
  
  // Update task display
  updateTaskDisplay();
  
  // Clear the input field
  clearInput();
}

// Function to add a random task
function addRandomTask() {
  // Get random task from the array
  const randomIndex = Math.floor(Math.random() * randomTasks.length);
  const randomTask = randomTasks[randomIndex];
  
  // Set the task input value
  taskInput.value = randomTask;
  
  // Focus on the date input
  dateInput.focus();
}

// Function to sort tasks by priority and update the taskDueDates array accordingly
function sortTasksByPriority() {
  // Create an array of indices
  let indices = Array.from(Array(tasks.length).keys());
  
  // Sort indices based on due dates and times
  indices.sort(function(a, b) {
    // Get date and time from taskDueDates
    const dateA = taskDueDates[a][0];
    const timeA = taskDueDates[a][1];
    const dateB = taskDueDates[b][0];
    const timeB = taskDueDates[b][1];
    
    // Parse date components
    const [monthA, dayA] = dateA.split('/').map(Number);
    const [monthB, dayB] = dateB.split('/').map(Number);
    
    // Compare months first
    if (monthA !== monthB) {
      return monthA - monthB;
    }
    
    // If months are the same, compare days
    if (dayA !== dayB) {
      return dayA - dayB;
    }
    
    // If dates are the same, compare times
    const [hoursA, minutesA] = timeA.split(':').map(Number);
    const [hoursB, minutesB] = timeB.split(':').map(Number);
    
    // Compare hours
    if (hoursA !== hoursB) {
      return hoursA - hoursB;
    }
    
    // Compare minutes
    return minutesA - minutesB;
  });
  
  // Create new arrays based on sorted indices
  const newTasks = [];
  const newTaskDueDates = [];
  
  for (let i = 0; i < indices.length; i++) {
    newTasks.push(tasks[indices[i]]);
    newTaskDueDates.push(taskDueDates[indices[i]]);
  }
  
  // Replace original arrays with sorted arrays
  tasks = newTasks;
  taskDueDates = newTaskDueDates;
}

// Function to handle keypress (for Enter key)
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

// Assign the onkeydown property directly
taskInput.onkeydown = handleKeyPress;

// Function to clear the input fields
function clearInput() {
  taskInput.value = '';

  taskInput.focus();
}

// Function to update the task display
function updateTaskDisplay() {
  // Clear current task list
  taskList.innerHTML = '';
  
  // Add each task item using for loop as requested
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskText = task[0]; // Task text is at index 0
    const dateStr = taskDueDates[i][0]; // Date string
    const timeStr = taskDueDates[i][1]; // Time string
    
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    
    // Create task details container
    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    
    // Get current date
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Parse the date and time
    const [month, day] = dateStr.split('/').map(Number);
    const [hours, minutes] = timeStr.split(':').map(Number);
    
    // Create a date object for the due date
    const dueDate = new Date(currentYear, month - 1, day, hours, minutes);
    
    // Calculate time difference in hours
    const diffMs = dueDate - now;
    const diffHours = diffMs / (1000 * 60 * 60);
    
    // Assign visible priority class based on time difference
    let priorityClass = 1; // Default to highest priority (red)
    if (diffHours < 0) {
      priorityClass = 1; // Overdue - highest priority (red)
    } else if (diffHours < 4) {
      priorityClass = 1; // Due within 4 hours - highest priority (red)
    } else if (diffHours < 24) {
      priorityClass = 2; // Due within a day (orange)
    } else if (diffHours < 48) {
      priorityClass = 3; // Due within 2 days (blue)
    } else if (diffHours < 72) {
      priorityClass = 4; // Due within 3 days (green)
    } else {
      priorityClass = 5; // Due later - lowest priority (gray)
    }
    
    // Create task text container
    const taskTextContainer = document.createElement('span');
    taskTextContainer.className = 'task-text';
    
    // Create priority dot element
    const priorityDot = document.createElement('span');
    priorityDot.className = `priority-indicator priority-${priorityClass}`;
    
    // Create the actual task text element
    const taskTextElement = document.createTextNode(taskText);
    
    // Create due date text
    const dueDateText = document.createElement('span');
    dueDateText.className = 'due-date-text';
    dueDateText.textContent = ` Due: ${dateStr} at ${timeStr}`;
    
    // Create delete button with onclick attribute
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.setAttribute('onclick', `deleteTask(${i})`);
    
    // Append elements to containers
    taskTextContainer.appendChild(priorityDot);
    taskTextContainer.appendChild(taskTextElement);
    
    taskDetails.appendChild(taskTextContainer);
    taskDetails.appendChild(dueDateText);
    
    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteButton);
    
    // Append list item to task list
    taskList.appendChild(listItem);
  }
}

// Function to delete a specific task
function deleteTask(index) {
  // Remove task from both arrays
  tasks.splice(index, 1);
  taskDueDates.splice(index, 1);
  
  // Update the display
  updateTaskDisplay();
}

// Function to clear all tasks
function clearTasks() {
  // Clear both arrays
  tasks = [];
  taskDueDates = [];
  
  // Update the display
  updateTaskDisplay();
}

// Initial input field setup and display update
window.onload = function() {
  // Initial update of task display
  updateTaskDisplay();
};

// Countdown Timer Functions
let timerDisplay;
let motivationDisplay;
let secondsInput;
let startBtn;
let resetBtn;
let statusDisplay;
let countdown;
let timeLeft;
let phraseIndex = 0;

const motivationalPhrases = [
    "Every second counts!",
    "You're making progress!",
    "Keep going, you're doing great!",
    "Stay focused, stay strong!",
    "You've got this!",
    "One step at a time!",
    "Believe in yourself!",
    "Success is just ahead!",
    "Don't give up now!",
    "The best is yet to come!",
    "Each moment brings you closer to your goal!",
    "Small steps lead to big results!",
    "Your determination is inspiring!",
    "Progress happens one second at a time!",
    "Keep that momentum going!"
];

window.addEventListener('load', function() {
    timerDisplay = document.getElementById('timer');
    motivationDisplay = document.getElementById('motivation');
    secondsInput = document.getElementById('seconds');
    startBtn = document.getElementById('startBtn');
    resetBtn = document.getElementById('resetBtn');
    statusDisplay = document.getElementById('status');
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function startCountdown() {
    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
        statusDisplay.textContent = "Please enter a valid number of seconds";
        return;
    }
    
    startBtn.disabled = true;
    secondsInput.disabled = true;
    statusDisplay.textContent = "Countdown in progress...";
    
    timeLeft = seconds;
    updateTimerDisplay();
    
    countdown = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft % 5 === 0 || timeLeft === seconds - 1) {
            phraseIndex = (phraseIndex + 1) % motivationalPhrases.length;
            motivationDisplay.textContent = motivationalPhrases[phraseIndex];
        }
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "00:00";
            motivationDisplay.textContent = "🎉 Congratulations! You've completed the countdown!";
            startBtn.disabled = false;
            secondsInput.disabled = false;
            statusDisplay.textContent = "Countdown complete!";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = "00:00";
    motivationDisplay.textContent = "Enter seconds and start the timer for motivation!";
    startBtn.disabled = false;
    secondsInput.disabled = false;
    statusDisplay.textContent = "";
    secondsInput.value = "30";
}

// NATO Converter Functions
const natoLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const natoWords = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
                    "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa",
                    "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
                    "Yankee", "Zulu", "One", "Two", "Three", "Four", "Five", "Six", 
                    "Seven", "Eight", "Nine", "Zero"];

function chToNato(ch) {
    const upperCh = ch.toUpperCase();
    const index = natoLetters.indexOf(upperCh);
    if (index !== -1) {
        return natoWords[index];
    }
    return ch;
}

function wordToNato(word) {
    const characters = word.split("");
    const natoCharacters = characters.map(ch => chToNato(ch));
    return natoCharacters.join(" ");
}

function sentenceToNato(sentence) {
    const words = sentence.split(" ");
    const natoWords = words.map(word => wordToNato(word));
    return natoWords.join(" ");
}

function verbalize() {
    const inputString = document.getElementById("inputString").value;
    const natoResult = sentenceToNato(inputString);
    document.getElementById("natoResult").textContent = natoResult;
}

function clearNATOInputs() {
    document.getElementById("inputString").value = "";
    document.getElementById("natoResult").textContent = "";
}

// Calculator Functions
// Global Variables
let memory = 0;
let currentInput = "0";
let currentOperator = null;
let leftOperand = null;
let waitingForRightOperand = false;
let lastOperation = "";
let calculationDone = false;

// DOM Elements
const display = document.getElementById('display');
const history = document.getElementById('history');

// Initialize display
display.value = "0";

// Functions for calculator operations
function appendToDisplay(value) {
    // If we just completed a calculation and start typing a new number
    if (calculationDone && !isNaN(value)) {
        clearDisplay();
        calculationDone = false;
    } else if (calculationDone) {
        calculationDone = false;
    }
    
    // If waiting for right operand, start a new input
    if (waitingForRightOperand) {
        display.value = value;
        waitingForRightOperand = false;
    } else {
        // Handle leading zero
        if (display.value === "0" && value !== ".") {
            display.value = value;
        } else {
            display.value += value;
        }
    }
    
    currentInput = display.value;
}

function clearDisplay() {
    display.value = "0";
    currentInput = "0";
}

function clearAll() {
    clearDisplay();
    history.textContent = "";
    leftOperand = null;
    currentOperator = null;
    waitingForRightOperand = false;
    lastOperation = "";
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    display.value = memory;
    currentInput = display.value;
}

function addToMemory() {
    try {
        // TODO: Replace this with safer code
        memory += parseFloat(eval(display.value));


        // not sure if this is correct


        // Check if memory is a number
        if (isNaN(memory)) {
            memory = 0;
        }
        // Check if memory is too large
        if (memory > Number.MAX_SAFE_INTEGER) {
            memory = Number.MAX_SAFE_INTEGER;
        }
        // Check if memory is too small
        if (memory < Number.MIN_SAFE_INTEGER) {
            memory = Number.MIN_SAFE_INTEGER;
        }
    } catch (e) {
        display.value = "Error";
    }
}

function subtractFromMemory() {
    try {
        // TODO: Replace this with safer code
        memory -= parseFloat(eval(display.value));
        // Check if memory is a number
        if (isNaN(memory)) {
            memory = 0;
        }
        // Check if memory is too large
        if (memory > Number.MAX_SAFE_INTEGER) {
            memory = Number.MAX_SAFE_INTEGER;
        }
        // Check if memory is too small
        if (memory < Number.MIN_SAFE_INTEGER) {
            memory = Number.MIN_SAFE_INTEGER;
        }
    } catch (e) {
        display.value = "Error";
    }
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
    currentInput = display.value;
}

/* Implement a function that parses and calculates mathematical expressions
   1. Create a function named evaluateExpression that takes an expression string as input
   2. First, handle simple number case: if the expression is a number, return it as a float
   3. Create an array to store tokens (numbers and operators)
   4. Loop through each character in the expression
   5. If the character is an operator (+, -, *, /), add the current number to tokens and then add the operator
   6. If the character is a digit or decimal point, add it to the current number string
   7. After the loop, add any remaining number to tokens
   8. Process multiplication and division first (following order of operations)
   9. Then process addition and subtraction
   10. Return the final calculated result
*/
function evaluateExpression(expression) {
     // If it's a simple number, return it
    if (!isNaN(parseFloat(expression)) && isFinite(expression)) {
        return parseFloat(expression);
    }
    
    // Create a tokenizer to parse the expression
    const tokens = [];
    let currentNumber = '';
    
    // Tokenize the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (currentNumber) {
                tokens.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            tokens.push(char);
        } else if (!isNaN(parseInt(char)) || char === '.') {
            currentNumber += char;
        }
    }
    
    // Push the last number if exists
    if (currentNumber) {
        tokens.push(parseFloat(currentNumber));
    }
    
    // Process multiplication and division first
    for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === '*') {
            tokens[i-1] = tokens[i-1] * tokens[i+1];
            tokens.splice(i, 2);
            i -= 2;
        } else if (tokens[i] === '/') {
            tokens[i-1] = tokens[i-1] / tokens[i+1];
            tokens.splice(i, 2);
            i -= 2;
        }
    }
    
    // Process addition and subtraction
    let result = tokens[0];
    for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === '+') {
            result += tokens[i+1];
        } else if (tokens[i] === '-') {
            result -= tokens[i+1];
        }
    }
    
    return result;
}

// TODO: Write the body of this function
/* This function should handle various mathematical operations like sqrt, power, etc.
   1. Handle the 'Math.sqrt' function:
      a. Update history.textContent to show the operation
      b. Calculate the square root of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true
   
   2. Handle the 'Math.pow' function:
      a. Store the current display value as leftOperand
      b. Update history.textContent to show the base
      c. Set currentOperator to "pow"
      d. Set waitingForRightOperand to true to wait for the exponent
   
   3. Handle 'Math.abs' function:
      a. Update history.textContent to show the operation
      b. Calculate the absolute value of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true
   
   4. Handle trigonometric functions (Math.sin, Math.cos, Math.tan):
      a. Extract the function name (sin, cos, tan)
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true
   
   5. Handle inverse trigonometric functions (Math.asin, Math.acos, Math.atan)
      a. Extract the function name (asin, acos, atan)
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true
   
   6. Handle 'Math.log' function (base 10 logarithm):
      a. Update history.textContent to show the operation
      b. Calculate the logarithm of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true
   
   7. Handle 'Math.exp' function (e^x):
      a. Update history.textContent to show the operation
      b. Calculate e raised to the power of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true
   
   8. Handle rounding functions (Math.round, Math.ceil, Math.floor):
      a. Extract the function name
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true
*/
function insertMathFunction(func) {
    // Your code here
    /* 1. Handle the 'Math.sqrt' function:
      a. Update history.textContent to show the operation
      b. Calculate the square root of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true */

    if (func === "sqrt") {
        history.textContent = `√(${display.value})`;
        display.value = Math.sqrt(parseFloat(display.value));
        calculationDone = true;

    /* 2. Handle the 'Math.pow' function:
      a. Store the current display value as leftOperand
      b. Update history.textContent to show the base
      c. Set currentOperator to "pow"
      d. Set waitingForRightOperand to true to wait for the exponent */

    } else if (func === "pow") {
        leftOperand = parseFloat(display.value);
        history.textContent = `${leftOperand}^`;
        currentOperator = "pow";
        waitingForRightOperand = true;

    /* 3. Handle 'Math.abs' function:
      a. Update history.textContent to show the operation
      b. Calculate the absolute value of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true */

    }
    else if (func === "abs") {
        history.textContent = `|${display.value}|`;
        display.value = Math.abs(parseFloat(display.value));
        calculationDone = true;
    /* 4. Handle trigonometric functions (Math.sin, Math.cos, Math.tan):
      a. Extract the function name (sin, cos, tan)
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true */

    }
    else if (func === "sin") {

        // Check if the value is less than or equal to 0
        if (parseFloat(display.value) <= 0) {
            display.value = "Error";
            return;
        }
        // Check if the value is greater than or equal to 1
        if (parseFloat(display.value) >= 1) {
            display.value = "Error";
            return;
        }

        history.textContent = `sin(${display.value})`;
        display.value = Math.sin(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "cos") {

        // Check if the value is less than or equal to 0
        if (parseFloat(display.value) <= 0) {
            display.value = "Error";
            return;
        }
        // Check if the value is greater than or equal to 1
        if (parseFloat(display.value) >= 1) {
            display.value = "Error";
            return;
        }

        history.textContent = `cos(${display.value})`;
        display.value = Math.cos(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "tan") {
        // Check if the value is less than or equal to 0
        if (parseFloat(display.value) <= 0) {
            display.value = "Error";
            return;
        }
        // Check if the value is greater than or equal to 1
        if (parseFloat(display.value) >= 1) {
            display.value = "Error";
            return;
        }

        history.textContent = `tan(${display.value})`;
        display.value = Math.tan(parseFloat(display.value));
        calculationDone = true;
    /* 5. Handle inverse trigonometric functions (Math.asin, Math.acos, Math.atan)
      a. Extract the function name (asin, acos, atan)
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true */

    }
    else if (func === "asin") {
        history.textContent = `asin(${display.value})`;
        display.value = Math.asin(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "acos") {
        history.textContent = `acos(${display.value})`;
        display.value = Math.acos(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "atan") {
        history.textContent = `atan(${display.value})`;
        display.value = Math.atan(parseFloat(display.value));
        calculationDone = true;
    /* 6. Handle 'Math.log' function (base 10 logarithm):
      a. Update history.textContent to show the operation
      b. Calculate the logarithm of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true */

    }
    else if (func === "log") {

        // Check if the value is less than or equal to 0
        if (parseFloat(display.value) <= 0) {
            display.value = "Error";
            return;
        }

        history.textContent = `log(${display.value})`;
        display.value = Math.log10(parseFloat(display.value));
        calculationDone = true;
    /* 7. Handle 'Math.exp' function (e^x):
      a. Update history.textContent to show the operation
      b. Calculate e raised to the power of the current display value
      c. Update display.value with the result
      d. Set calculationDone to true */

    }
    else if (func === "exp") {
        history.textContent = `e^(${display.value})`;
        display.value = Math.exp(parseFloat(display.value));
        calculationDone = true;
    /* 8. Handle rounding functions (Math.round, Math.ceil, Math.floor):
      a. Extract the function name
      b. Update history.textContent to show the operation
      c. Calculate the result using the appropriate Math function
      d. Update display.value with the result
      e. Set calculationDone to true */

    }
    else if (func === "round") {
        history.textContent = `round(${display.value})`;
        display.value = Math.round(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "ceil") {
        history.textContent = `ceil(${display.value})`;
        display.value = Math.ceil(parseFloat(display.value));
        calculationDone = true;
    } else if (func === "floor") {
        history.textContent = `floor(${display.value})`;
        display.value = Math.floor(parseFloat(display.value));
        calculationDone = true;
    }
    else {
        console.error("Unknown function: " + func);
    }


}

// TODO: Write the body of this function
/* This function should insert mathematical constants into the calculator display
   1. Check if constant is 'Math.PI' and if so, set display.value to Math.PI
   2. Check if constant is 'Math.E' and if so, set display.value to Math.E
   3. Check if constant is 'Math.LN2' and if so, set display.value to Math.LN2
   4. Check if constant is 'Math.LN10' and if so, set display.value to Math.LN10
   5. Update currentInput to match the display value
   6. Set calculationDone to true
*/
function insertMathConstant(constant) {
    // Your code here

    if (constant === "Math.PI") {

        display.value = Math.PI;

    }
    else if (constant === "Math.E") {

        display.value = Math.E;

    }
    else if (constant === "Math.LN2") {

        display.value = Math.LN2;

    }
    else if (constant === "Math.LN10") {

        display.value = Math.LN10;

    }

    currentInput = display.value;
    calculationDone = true;
}

/* This function should calculate the result of the current expression
   1. Check if we're in the middle of a power operation:
      a. If currentOperator is "pow" and leftOperand is not null:
         i. Calculate base^exponent using Math.pow
         ii. Update history.textContent to show the full operation
         iii. Update display.value with the result
         iv. Reset leftOperand and currentOperator
   2. Otherwise:
      a. Update history.textContent with the current expression
      b. Calculate the result using evaluateExpression
      c. Update display.value with the result
   3. Set calculationDone to true
*/
function calculate() {
   try {
        if (currentOperator === "pow" && leftOperand !== null) {
            // Handle power operation
            const rightOperand = parseFloat(display.value);
            history.textContent = `${leftOperand}^${rightOperand}`;
            display.value = Math.pow(leftOperand, rightOperand);
            leftOperand = null;
            currentOperator = null;
        } else {
            // Handle normal operations
            history.textContent = display.value;
            display.value = evaluateExpression(display.value);
        }
        calculationDone = true;
    } catch (e) {
        display.value = "Error";
    }
}

function animate(animType) {

    const calculator = document.querySelector('.calculator');

    if (animType === 'clear') {

        calculator.classList.add('shake');
        setTimeout(() => {
            calculator.classList.remove('shake');
        }, 500);
    }
    else if (animType === 'equals') {

        calculator.classList.add('bounce');
        setTimeout(() => {
            calculator.classList.remove('bounce');
        }, 500);
    }

}
   
// some animations for fun


// Add event listener to the equals button
const clearButton = document.getElementById('btn-clear'); // Replace with your equals button's ID
const equalsButton = document.getElementById('btn-equals'); // Replace with your equals button's ID

clearButton.addEventListener('click', () => {
    let animType = 'clear';
    animate(animType); // Call the animate function
})
equalsButton.addEventListener('click', () => {
    let animType = 'equals';
    animate(animType); // Call the animate function
});



// Contacts App Functions
let contactsData = {
    "contacts": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "555-123-4567",
            "type": "personal"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@company.com",
            "phone": "555-987-6543",
            "type": "work"
        },
        {
            "id": 3,
            "name": "Bob Johnson",
            "email": "bob@family.net",
            "phone": "555-555-5555",
            "type": "family"
        }
    ]
};

function displayContacts(contacts = contactsData.contacts) {
    const contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = '';
    
    if (contacts.length === 0) {
        contactsList.innerHTML = '<p>No contacts found.</p>';
        return;
    }
    
    contacts.forEach(contact => {
        const div = document.createElement('div');
        div.className = 'contact-card';
        div.innerHTML = `
            <h3>${contact.name}</h3>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <p>Type: ${contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}</p>
        `;
        contactsList.appendChild(div);
    });
}

function updateJSONDisplay() {
    const jsonContent = document.getElementById('json-content');
    jsonContent.textContent = JSON.stringify(contactsData, null, 4);
}

function searchContacts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (!searchTerm) {
        displayContacts();
        return;
    }
    
    const filteredContacts = contactsData.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(searchTerm) ||
                contact.email.toLowerCase().includes(searchTerm) ||
                contact.phone.includes(searchTerm) ||
                contact.type.toLowerCase().includes(searchTerm);
    });
    
    displayContacts(filteredContacts);
}

function addContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const type = document.getElementById('type').value;
    
    let newId;
    if (contactsData.contacts.length > 0) {
        const maxId = Math.max(...contactsData.contacts.map(function(c) { 
            return c.id; 
        }));
        newId = maxId + 1;
    } else {
        newId = 1;
    }
    
    const newContact = {
        id: newId,
        name,
        email,
        phone,
        type
    };
    
    contactsData.contacts.push(newContact);
    document.getElementById('contact-form').reset();
    displayContacts();
    updateJSONDisplay();
    alert('Contact added successfully!');
    switchTab('view');
    
    return false;
}

function resetSearch() {
    document.getElementById('search-input').value = '';
    displayContacts();
}

function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(tabId)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.id === `${tabId}-contacts` || content.id === `${tabId}-contact` || content.id === `${tabId}-view`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
    
    if (tabId === 'json') {
        updateJSONDisplay();
    }
}

// Initialize contacts on load
window.addEventListener('load', function() {
    displayContacts();
    updateJSONDisplay();
});