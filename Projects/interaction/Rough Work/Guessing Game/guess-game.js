const words = ['HUNGRY', 'EXCITED', 'NERVOUS', 'TIRED'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill('_');
let guessesRemaining = 10;
let lettersGuessed = [];

updateDisplay();

function guessLetter() {
    const userInput = document.getElementById('userInput').value.toUpperCase();

    if (!userInput.match(/^[A-Z]$/)) {
        alert('Please enter a single alphabetic character.');
        return;
    }

    if (lettersGuessed.includes(userInput)) {
        alert('You have already guessed this letter.');
        return;
    }

    lettersGuessed.push(userInput);

    if (selectedWord.includes(userInput)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === userInput) {
                guessedWord[i] = userInput;
            }
        }
    } else {
        guessesRemaining--;
    }

    updateDisplay();

    if (guessesRemaining === 0 || guessedWord.join('') === selectedWord) {
        endGame();
    }
}

function updateDisplay() {
    document.getElementById('wordDisplay').textContent = guessedWord.join(' ');
    document.getElementById('guessesRemaining').textContent = `Guesses Remaining: ${guessesRemaining}`;
    document.getElementById('lettersGuessed').textContent = `Letters Guessed: ${lettersGuessed.join(', ')}`;
}

function endGame() {
    if (guessedWord.join('') === selectedWord) {
        alert('Congratulations! You guessed the word!');
    } else {
        alert(`Game Over! The word was "${selectedWord}".`);
    }
    location.reload(); // You might want to handle the end game scenario differently
}



