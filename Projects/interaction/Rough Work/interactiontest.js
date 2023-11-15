const imagePools = {
    // letters and associated image pools
    A: ['https://i.pinimg.com/736x/48/03/2a/48032a8b693140d9849d9af9d88821af.jpg', 'https://i.pinimg.com/736x/33/cb/2c/33cb2c86f56f889342ee099b69b9490e.jpg', 'https://i.pinimg.com/736x/d8/32/33/d832338fb52016c9ab2cfaad41506e28.jpg'],
    B: ['imageB1.jpg', 'imageB2.jpg', 'imageB3.jpg'],
    C: ['imageC1.jpg', 'imageC2.jpg', 'imageC3.jpg'],

};

document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toUpperCase();
    showRandomImage(pressedKey);
});

function showRandomImage(letter) {
    const imagePool = imagePools[letter];

    if (imagePool && imagePool.length > 0) {
        const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];
        displayImage(randomImage);
    }
}

function displayImage(imageSrc) {
    const imageContainer = document.getElementById('imageContainer');
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = "Random Image";
    imageContainer.appendChild(imgElement);
}