document.addEventListener('keydown', function (event) {
    const keyPageMapping = {
        'A': 'colour-letters-a.html',
        'B': 'pageB.html',
        'C': 'pageC.html',
        'D': 'a.html',
        'E': 'pageB.html',
        'F': 'pageC.html',
        'G': 'a.html',
        'H': 'pageB.html',
        'I': 'pageC.html',
        'J': 'a.html',
        'K': 'pageB.html',
        'L': 'pageC.html',
        'M': 'a.html',
        'N': 'pageB.html',
        'O': 'pageC.html',
        'P': 'a.html',
        'Q': 'pageB.html',
        'R': 'pageC.html',
        'S': 'a.html',
        'T': 'pageB.html',
        'U': 'pageC.html',
        'V': 'a.html',
        'W': 'pageB.html',
        'X': 'pageC.html',
        'Y': 'a.html',
        'Z': 'pageB.html',
        // Add more keys and corresponding page URLs
    };

    const pressedKey = event.key.toUpperCase();
    const pageUrl = keyPageMapping[pressedKey];

    if (pageUrl) {
        window.location.href = pageUrl;
    }
});
