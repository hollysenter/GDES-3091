document.addEventListener('keydown', function (event) {
    const pressedKey = event.key;
    const imageUrl = getImageUrlForLetter(pressedKey);

    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = `Image for ${pressedKey}`;
        imageElement.className = 'image';

        document.getElementById('image-container').appendChild(imageElement);
    }
});

function getImageUrlForLetter(letter) {
    // Letter Image Association
    const imageMap = {
        'a': 'https://i.pinimg.com/736x/48/03/2a/48032a8b693140d9849d9af9d88821af.jpg',
        'b': 'https://i.pinimg.com/736x/98/21/58/98215852ccf79da1c972c3a4dfa9e995.jpg',
        'c': 'https://i.pinimg.com/736x/93/94/b5/9394b5412576325b045139781e917ca3.jpg',
    };

    return imageMap[letter.toLowerCase()];
}
