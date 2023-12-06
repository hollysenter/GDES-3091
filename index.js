// Holly Senter
// December 6th 2023

// Establish array of names of div sections that animate scrolling
const animationNames = ['exercises', 'projects', 'readings', 'resources'];

// For each animation section add a pause in animation when the mouse enters
// and a resumption of animation when the mouse leaves 
for (let index = 0; index < animationNames.length; index++) {
	var el = document.getElementById(animationNames[index]);
	el.addEventListener('mouseenter', () => {
		var el2 = document.getElementById(animationNames[index]);
		el2.style.animationPlayState = 'paused';
	});

	el = document.getElementById(animationNames[index]);
	el.addEventListener('mouseleave', () => {
		var el2 = document.getElementById(animationNames[index]);
		el2.style.animationPlayState = 'running';
	});
}

document.addEventListener('DOMContentLoaded', function () {
	const header = document.getElementById('pageHeader');

	// Add a click event listener to the header
	header.addEventListener('click', function () {
		// Refresh the page when the header is clicked
		location.reload();
	});
});

//Establish an array of URLs for the background images in the Exercise scroll
const imageExercises = [
	'https://i.pinimg.com/originals/f0/3b/5f/f03b5fe11c80dcf051b4d80c294213c9.png',
	'https://i.pinimg.com/originals/3e/e3/8f/3ee38f6dc052c8a90d8a1c8e500b8be0.png',
	'https://i.pinimg.com/originals/fd/34/b9/fd34b97bff8829d9e366eadadd9413c3.png',
	'https://i.pinimg.com/originals/66/97/87/669787f24b2c17d22c312a85a348db62.png',
	'https://i.pinimg.com/originals/a2/b4/8f/a2b48f79b64bb063e4c7b21799c5f46c.png',
	'https://i.pinimg.com/originals/bc/13/cf/bc13cf6cb837a4cdb078b92aab42685e.png',
	'https://i.pinimg.com/originals/e0/d2/f6/e0d2f6c560fe93f58572b003467b88ab.png',
	'https://i.pinimg.com/736x/bd/0c/7e/bd0c7ea422a56165647c47877b64c493.jpg'];

// Set the background image of each div in the scroll
SetImages("exercise", imageExercises);

// Establish an array of URLs for the background images in the Projects scroll
const imageProjects = [
	'https://i.pinimg.com/originals/d9/5e/26/d95e269da93d326521ee7676649c6a2a.png',
	'https://i.pinimg.com/originals/f7/f5/e8/f7f5e8abd7f41c32765bb08b27f480bd.png',
	'https://i.pinimg.com/originals/ce/da/af/cedaafe53881e46ba84412fd1325bcbd.png',
	'https://i.pinimg.com/originals/7f/9b/f7/7f9bf7c953e0d34eae2c45492b8855ba.png',
	'https://i.pinimg.com/originals/df/80/78/df80782ac53b629a0e6db498cdff825a.png',
	'https://i.pinimg.com/originals/fc/1e/78/fc1e7855dfe30e8e4e082aa089bdd184.png',
	'https://i.pinimg.com/originals/ef/06/84/ef0684ee0c82eb2a2ccf8c6118bd72ec.png'];

// Set the background image of each div in the scroll
SetImages("project", imageProjects);

// Establish an array of URLS for the background images in the Readings scroll
const imageReadings = [
	'https://i.pinimg.com/originals/58/9c/dc/589cdc81a2d0cec767169883cb689755.png',
	'https://i.pinimg.com/originals/f6/f1/4b/f6f14b9768ca44e978aae0628e9a001d.png',
	'https://i.pinimg.com/originals/eb/cb/66/ebcb666ea5bd45d3074db836d58b141c.png',
	'https://i.pinimg.com/originals/7f/22/b3/7f22b360e2d811b7957c2a5fa595445f.png',
	'https://i.pinimg.com/originals/69/c8/06/69c8067a9907c4a04e1b63fa9e9b1a72.png'];
// Set the background image of each div in the scroll
SetImages("reading", imageReadings);

// Establish an array of URLS for the background images in the Resources scroll
const imageResources = [
	'https://i.pinimg.com/originals/6e/57/54/6e5754c44e22dd85b664a491d68221fe.png',
	'https://i.pinimg.com/originals/34/e3/d8/34e3d88fedebda882642c580f2915c90.png',
	'https://i.pinimg.com/originals/0c/94/23/0c9423f4bb1bf229e4ea6d415f4989a3.png',
	'https://i.pinimg.com/originals/f3/4f/57/f34f5735df24f8d068c49e71b7f52583.png'];
// Set the background image of each div in the scroll
SetImages("resource", imageResources);


// Assign the images from the array as the background to the corresponding div
// e.g. div ID sample1 gets background imageSample[0] 
//      div ID sample2 gets background imageSample[1]
//		etc.

function SetImages(divName, imageArray) {
	for (let index = 1; index <= imageArray.length; index++) {
		var divIndex = divName + index;
		if (document.getElementById(divIndex))
			document.getElementById(divIndex).style.backgroundImage = "url(" + imageArray[index - 1] + ")";
	}
}





