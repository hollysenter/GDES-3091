const interactionContainer = document.querySelector('.interactionContainer');
const colors = document.querySelectorAll('.colours');

colors.forEach(color => {
    colors.addEventListener('click', () => {
        // Generate a random color for the container's background
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        interactionContainer.style.backgroundColor = randomColor;
    });
});


window.onload = function () {
    const loopContainer = document.getElementById("loopContainer");

    for (let i = 0; i < 5; i++) {
        const textElement = document.createElement("p");
        textElement.textContent = "Repeating Text" + (i + 1);
        container.appendChild(textElement);
    }
}

