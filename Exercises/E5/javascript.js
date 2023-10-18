// *********************
// Holly Senter
// September 18, 2023
// *********************

// This javascript is intended to work with a page entitled:
// 		IMW Fall 2023 - E5: JavaScript
// written by 
//		Peter Ha
// 

// INTERACTION
// Establish click events on the circles to change the background color 

myGreenCircle = document.getElementById('green');
myGreenCircle.addEventListener('click', ChangeInteractionBackground, false);
myGreenCircle.myParam = 'lightgreen';		// Set the color for green circle here
myPlumCircle = document.getElementById('plum');
myPlumCircle.addEventListener('click', ChangeInteractionBackground, false);
myPlumCircle.myParam = 'plum';				// Set the color for plum circle here
myBlueCircle = document.getElementById('blue');
myBlueCircle.addEventListener('click', ChangeInteractionBackground, false);
myBlueCircle.myParam = 'lightblue';			// Set the color for blue circle here

function ChangeInteractionBackground(currentEvent) {
	myContainer = document.getElementById('interactionContainer');
	myContainer.style.backgroundColor = currentEvent.currentTarget.myParam;
}


// LOOP
// Append to the text of the box repeatedly using a for loop

myContainer = document.getElementById('loopContainer');
repeatedText = ' Container.';   // Change the text to be repeated here
iterations = 67; 				// Change how many times the text is added here
for (step = 0; step < iterations; step++) {
	myContainer.innerText += repeatedText;
}

// CONDITION 
// Select a colour for the square based on a combination of:
//		1) A random number between 1 and 10
//		2) The current date (day of the week)
//	 	3) The current time (seconds)

// (refresh paage to see new color)

let myColor = Math.floor(Math.random() * 10);
let myColorName = 'red';
// Declare array in full or grow one by one
//let myColorArray = ['black', 'blue', 'brown', 'cyan', 'gold', 'green', 'orange', 'red', 'violet'];
let myColorArray = [];
myColorArray.push('black');
myColorArray.push('blue');
myColorArray.push('brown');
myColorArray.push('cyan');
myColorArray.push('gold');
myColorArray.push('green');
myColorArray.push('orange');
myColorArray.push('red');
myColorArray.push('violet');
// myColorArray.push('colorName');

// Get the current date and time
let d = new Date();
// Choose date and time components to add to the index
// getFullYear(), getMonth(), getDate(), getDay() getHours(), getMinutes(), getSeconds() 
myColor = myColor + d.getDay() + d.getSeconds();
// Make sure the index is within the bounds of the array
myColor = myColor % myColorArray.length;
// Set the color from the array of colors
myColorName = myColorArray[myColor];
// Set the background color
document.getElementById('square').style.backgroundColor = myColorName;

// TIME
// Every 3 seconds increase the font size of the text by 1 from 24 to 124. 

myInterval = window.setInterval(IncreaseText, 3000);
size = 24;

function IncreaseText() {
	size = size + 1;
	if (size < 124) {
		newsize = size + 'px';
		document.getElementById('increaseText').style.fontSize = newsize;
	}
	else {
		clearInterval(myInterval);
	}
}

// INPUT
// Establish a click event on the submit button. 
// Have that event collect the text entered by the user, determine the number of characters in it 
// and display the result.

mySubmitButton = document.getElementById('submit');
mySubmitButton.type = 'Button';
mySubmitButton.addEventListener('click', CountCharacters, false);

function CountCharacters() {
	myResult = document.getElementById('text-length');
	myResult.innerText = document.getElementById('inputText').value.length.toString();
}

// CONSOLE
// Have the page send a message to the user

myMessage = 'Have a wonderful day!';	// Change the message displayed here
alert(myMessage);
