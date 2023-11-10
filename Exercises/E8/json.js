// Access Art Institute of Chicago API
fetch('https://api.artic.edu/api/v1/artworks')
    .then(response => response.json())
    .then(data => {
        // Handle the data
        const artworksContainer = document.getElementById('artworks');

        // Iterate through the artworks and display functional info
        data.data.forEach(artwork => {
            const artworkDiv = document.createElement('div');
            artworkDiv.innerHTML = `
                        <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" width=50% ></img>
                        <h2>${artwork.title}</h2>
                        <h3>${artwork.artist_display}</h3>
                        <br></br>
                        <br></br>
                        <br></br>
                    `;
            artworksContainer.appendChild(artworkDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));