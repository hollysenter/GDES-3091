document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('imageContainer');
    // Create a listener to capture keystroke events
    document.addEventListener('keydown', function (event) {
        // If the user pressed 'Enter' add a new line to the html
        if (event.key == 'Enter') {
            imageContainer.innerHTML += '<br>';
        }
        // If the user pressed 'Delete' or 'Backspace' remove the last element in the html
        else if (event.key === 'Delete' || event.key === 'Backspace') {
            // Check for the last element being a new line
            if (imageContainer.innerHTML.endsWith('<br>')) {
                imageContainer.innerHTML = imageContainer.innerHTML.substring(0, imageContainer.innerHTML.length - 4);
            }
            // Otherwise remove the last image in the html
            else {
                const images = document.querySelectorAll('#imageContainer img');
                const lastImage = images[images.length - 1];
                // Only try to remove if an image exists
                if (lastImage) {
                    lastImage.remove();
                }
            }
        }
        // If the user pressed the space bar then add a blank space
        else if (event.key == ' ') {
            imageContainer.innerHTML += '<img src="https://i.pinimg.com/564x/29/cd/5d/29cd5d9310ae0f771ef24abe5c467927.jpg">';
        }
        // Finally use the character entered as an index into the image matrix and add the appropriate image to the html.
        else {
            // Convert the character to upper case
            const pressedKey = event.key.toUpperCase();
            // Use the character as the row index in the image matrix
            const imagePool = imagePools[pressedKey];
            // Randomize the column selection in the image matrix
            const imageUrl = imagePool[Math.floor(Math.random() * imagePool.length)];
            // If we have an image URL create an image element and add it to the html
            if (imageUrl) {
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageElement.alt = `Image for ${pressedKey}`;
                imageElement.className = 'image';
                imageContainer.appendChild(imageElement);
            }
        }

    });
});

//When a letter key, spacebar, enter key, number key are touched, remove the background image/titlepage
document.addEventListener('keydown', function (event) {
    const isLetterOrNumberOrEnterOrSpace = (
        (event.key.length === 1 && event.key.match(/[a-z0-9]/i)) ||
        event.key === 'Enter' ||
        event.key === ' '
    );

    if (isLetterOrNumberOrEnterOrSpace) {
        const body = document.body;

        // Fade-out effect
        body.style.transition = 'background-image 1s ease-out, background-color 1s ease-out';

        // Set the background image and color to 'none' and 'white'
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'white';

        // Remove the transition property after the fade-out is complete
        setTimeout(() => {
            body.style.transition = 'none';
        }, 1000);
    }
});

// Image matrix:
const imagePools = {
    // Letters/Numbers and their associated images to randomly pull from
    A: ['https://i.pinimg.com/736x/48/03/2a/48032a8b693140d9849d9af9d88821af.jpg', 'https://i.pinimg.com/736x/33/cb/2c/33cb2c86f56f889342ee099b69b9490e.jpg', 'https://i.pinimg.com/736x/d8/32/33/d832338fb52016c9ab2cfaad41506e28.jpg'],
    B: ['https://i.pinimg.com/736x/98/21/58/98215852ccf79da1c972c3a4dfa9e995.jpg', 'https://i.pinimg.com/736x/57/c7/37/57c7376fee0fd6038728876a1764cd4b.jpg', 'https://i.pinimg.com/736x/f4/34/a9/f434a9c58c22665249eb8384172838da.jpg',],
    C: ['https://i.pinimg.com/736x/93/94/b5/9394b5412576325b045139781e917ca3.jpg', 'https://i.pinimg.com/736x/9e/4f/d2/9e4fd2b6c26aad3649d77457577ae1c9.jpg', 'https://i.pinimg.com/736x/28/b7/91/28b791576f3d33dfe53039e8ab9dc77d.jpg'],
    D: ['https://i.pinimg.com/736x/4f/2f/6d/4f2f6dae31e73e649e1bb2ce54893c22.jpg', 'https://i.pinimg.com/736x/9d/a7/6d/9da76d47b8d7d0fa49df69c95f354d75.jpg', 'https://i.pinimg.com/736x/77/d2/9f/77d29ff420f1324ae3d30372b9b4bf24.jpg'],
    E: ['https://i.pinimg.com/736x/52/28/42/52284256b3c5f01bc99a0e1aaa7cfee4.jpg', 'https://i.pinimg.com/736x/a5/dc/08/a5dc080a1b83f5eaed55b263290dd199.jpg', 'https://i.pinimg.com/736x/3a/f2/52/3af2528383c73306453b3673c0b08f03.jpg'],
    F: ['https://i.pinimg.com/736x/2a/ac/a4/2aaca409cdb07bd92407f709e43a8ff5.jpg', 'https://i.pinimg.com/736x/d0/1f/d8/d01fd8cc3c40bbb13861ae6ec747c500.jpg', 'https://i.pinimg.com/736x/a2/26/0a/a2260a93c08add7c557d4c23cb042cdf.jpg'],
    G: ['https://i.pinimg.com/736x/1a/9d/5e/1a9d5e099ed1c6ec008b6670b36e5a4f.jpg', 'https://i.pinimg.com/736x/67/9d/c5/679dc5132136710e04bd324eca48ba4e.jpg', 'https://i.pinimg.com/736x/8d/0d/5c/8d0d5cb01624186d65ca5aeb42a16b8a.jpg'],
    H: ['https://i.pinimg.com/736x/cd/ac/49/cdac49401db510a3f575f33fddc599da.jpg', 'https://i.pinimg.com/736x/3f/22/e2/3f22e21fdeec817de712a53afb8d5c24.jpg', 'https://i.pinimg.com/736x/16/e0/09/16e009d38dc74c7b978c5fc97c06f684.jpg'],
    I: ['https://i.pinimg.com/736x/23/3e/ff/233eff73b8589c3e2595be7751c69cce.jpg', 'https://i.pinimg.com/736x/3b/21/f3/3b21f35f1c9f14812d081965549479fe.jpg', 'https://i.pinimg.com/736x/7d/b8/00/7db800cc3df8d2ba7b488802d677a1f2.jpg'],
    J: ['https://i.pinimg.com/736x/de/73/b6/de73b6ce6ff61ba0e191afb4c8e4a757.jpg', 'https://i.pinimg.com/736x/19/9c/7d/199c7d43e6d7882e8b9d11eec579e688.jpg'],
    K: ['https://i.pinimg.com/736x/da/25/4e/da254ef5e7eabf516fd7ed9f8cf5d507.jpg', 'https://i.pinimg.com/736x/1d/16/d4/1d16d4a12b058f1a34206ebb73023e83.jpg', 'https://i.pinimg.com/736x/f8/e5/a3/f8e5a32f1a5fc6f94ebcded3eb145282.jpg'],
    L: ['https://i.pinimg.com/736x/43/b8/3a/43b83a1b896400d3f9467380d8801701.jpg', 'https://i.pinimg.com/736x/33/44/c4/3344c4059be054bf0710e26f86b1e49b.jpg', 'https://i.pinimg.com/736x/09/8e/52/098e52ac21b11ba8ad522b50ee9ff711.jpg'],
    M: ['https://i.pinimg.com/736x/8d/e1/80/8de1806bd53ad05edb991d7230ec10c9.jpg', 'https://i.pinimg.com/736x/19/73/a4/1973a4d742b301106b4a8f7ae4bc3670.jpg', 'https://i.pinimg.com/736x/58/ae/c2/58aec2232b609595ed23739ec0836ab9.jpg'],
    N: ['https://i.pinimg.com/736x/85/b9/55/85b95530a714305101cbf482f8730cd2.jpg', 'https://i.pinimg.com/736x/2c/16/37/2c163734f628cdbef7dc8b7c7cfd0413.jpg'],
    O: ['https://i.pinimg.com/736x/d4/05/3a/d4053af071746db7716a4ddc7a948cc6.jpg', 'https://i.pinimg.com/736x/c1/22/1f/c1221f35034990b9caf78873923a2993.jpg', 'https://i.pinimg.com/736x/4a/3e/30/4a3e30d2e1eee181e21021aa629e3d6e.jpg'],
    P: ['https://i.pinimg.com/736x/6d/e6/ab/6de6abdb4d7353ee5840a59598210fd0.jpg', 'https://i.pinimg.com/736x/bf/71/3a/bf713ab0aa51747ee7f0dca85754f1cf.jpg', 'https://i.pinimg.com/736x/31/b4/81/31b48162e842a77826c6601661d47501.jpg'],
    Q: ['https://i.pinimg.com/736x/d7/98/8f/d7988fe419be1fe3ca966eaaee49465d.jpg', 'https://i.pinimg.com/736x/d9/46/62/d94662f6e6c7230bfc6c6c220f7d2cb4.jpg', 'https://i.pinimg.com/736x/bd/37/f8/bd37f8d1747a72c1415594e83f09ad17.jpg'],
    R: ['https://i.pinimg.com/736x/ec/26/70/ec267071e2957f54dc1b54047d4c597c.jpg', 'https://i.pinimg.com/736x/da/a7/ca/daa7cac8bdc5c164e31d7ca735df1a34.jpg', 'https://i.pinimg.com/736x/b2/f0/ea/b2f0eafc4c4236c81a4ce0f61f74c7f6.jpg'],
    S: ['https://i.pinimg.com/736x/f1/25/e1/f125e1558ec0fdbebf61f4f479ec7dd9.jpg', 'https://i.pinimg.com/736x/44/b0/a8/44b0a8f8952f102f5f7ffc1c5b49d3c8.jpg', 'https://i.pinimg.com/736x/37/86/f2/3786f27247b13048eb07b567ddba15a3.jpg'],
    T: ['https://i.pinimg.com/736x/e2/e8/d6/e2e8d6cc82fe3eec37a9a8f13eacd0f7.jpg', 'https://i.pinimg.com/736x/71/6a/4b/716a4b6c8e446cf30f192c45e1f3212d.jpg', 'https://i.pinimg.com/originals/92/98/c5/9298c56751135f097ca5881923414518.png'],
    U: ['https://i.pinimg.com/736x/41/84/4e/41844e142fdf29c6620fe63463a417a6.jpg', 'https://i.pinimg.com/736x/c5/23/91/c523913e5222b16b824d5c51f97eb503.jpg'],
    V: ['https://i.pinimg.com/736x/f7/ee/30/f7ee30ffd5a3fb6110b33dec92776e2e.jpg', 'https://i.pinimg.com/736x/1a/14/06/1a1406263c3727a8dc2e964feef657b1.jpg', 'https://i.pinimg.com/736x/9d/0c/3d/9d0c3d482dcc4d65959df197d0cfaeec.jpg'],
    W: ['https://i.pinimg.com/736x/22/ec/da/22ecda5efe2ce26564684d52a06adae8.jpg', 'https://i.pinimg.com/736x/a6/bf/d7/a6bfd78aa3a05bdb6b4d33cded3e8181.jpg', 'https://i.pinimg.com/736x/f6/66/84/f66684b4e1b414a903c630db17285de3.jpg'],
    X: ['https://i.pinimg.com/736x/bc/2a/99/bc2a992efd1a5712e4c77436c183a7ed.jpg', 'https://i.pinimg.com/736x/ff/36/e7/ff36e759f95c5c057ea939085856f0d9.jpg'],
    Y: ['https://i.pinimg.com/736x/2d/1a/a8/2d1aa8e1f78415febe4f5c6b0a602d83.jpg', 'https://i.pinimg.com/736x/bb/fc/9b/bbfc9b61669e731fc2ae896d44831ffa.jpg', 'https://i.pinimg.com/736x/b3/17/6d/b3176debc88480f5687f666f2667a19b.jpg'],
    Z: ['https://i.pinimg.com/736x/31/db/a8/31dba82cf2e76980e4d1de23556040d2.jpg', 'https://i.pinimg.com/736x/43/15/2b/43152b16cc77caca990e07632caaa210.jpg', 'https://i.pinimg.com/736x/62/c8/38/62c838e6df3481384ab7942ef251c1bc.jpg'],
    0: ['https://i.pinimg.com/736x/b2/28/e0/b228e06ba961e5938f2bc549432050bd.jpg'],
    1: ['https://i.pinimg.com/736x/56/20/73/562073c66554c346d4d65977d6dbdb0c.jpg'],
    2: ['https://i.pinimg.com/736x/37/fa/44/37fa4417dad29f69d2de57f5688d1b0a.jpg'],
    3: ['https://i.pinimg.com/736x/45/a8/69/45a8699a5abde50985471c45d4208140.jpg'],
    4: ['https://i.pinimg.com/736x/1b/46/ed/1b46ed6290b79e29baa67e3d8a2d5d98.jpg'],
    5: ['https://i.pinimg.com/originals/2e/3b/f0/2e3bf0ead9fceff4411d4ef0bc83e60d.png'],
    6: ['https://i.pinimg.com/736x/e5/0c/b3/e50cb3008a432c91e3e7673bbdbca95a.jpg'],
    7: ['https://i.pinimg.com/736x/df/17/cd/df17cd673f50e7842b4b98c9db646d79.jpg'],
    8: ['https://i.pinimg.com/736x/e6/f9/7a/e6f97a774b57b295f93bccce6fe3e3b7.jpg'],
    9: ['https://i.pinimg.com/736x/ca/f4/25/caf425a1fec82ca3399dcd1c7a367fab.jpg'],
};