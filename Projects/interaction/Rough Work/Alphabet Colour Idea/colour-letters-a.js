const targetWord = "Alizarin";
let currentWord = "";

document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toUpperCase();
    currentWord += pressedKey;

    if (currentWord === targetWord) {
        changeColor();
        currentWord = "";  // Reset the current word after successfully spelling the target word
    }
});

function changeColor() {
    const colorBox = document.getElementById('colorBox');
    if (colorBox) {
        // Change the color to a random color for demonstration purposes
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}