// Holly Senter
// December 4th 2023

// Establish array of names of div sections that animate scrolling
const animationNames = ['exercises', 'projects', 'readings', 'resources' ];

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

//Establish an array of URLs for the background images in the Exercise scroll
const imageExercises = [
	'https://i.pinimg.com/originals/f0/3b/5f/f03b5fe11c80dcf051b4d80c294213c9.png',
	'https://i.pinimg.com/originals/3e/e3/8f/3ee38f6dc052c8a90d8a1c8e500b8be0.png',
	'https://i.pinimg.com/originals/fd/34/b9/fd34b97bff8829d9e366eadadd9413c3.png',
	'https://i.pinimg.com/originals/66/97/87/669787f24b2c17d22c312a85a348db62.png',
	'https://i.pinimg.com/originals/a2/b4/8f/a2b48f79b64bb063e4c7b21799c5f46c.png',
	'https://i.pinimg.com/originals/bc/13/cf/bc13cf6cb837a4cdb078b92aab42685e.png',
	'https://i.pinimg.com/originals/e0/d2/f6/e0d2f6c560fe93f58572b003467b88ab.png',
	'https://i.pinimg.com/originals/80/b3/56/80b356b3fdbebc04ae3d9b7be3a7f62c.png' ];

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
	'https://i.pinimg.com/originals/ef/06/84/ef0684ee0c82eb2a2ccf8c6118bd72ec.png' ];

// Set the background image of each div in the scroll
	SetImages("project", imageProjects);

// Establish an array of URLS for the background images in the Readings scroll
const imageReadings = [
	//'imageURLforReading1',
	];
// Set the background image of each div in the scroll
	SetImages("readings", imageReadings);

// Establish an array of URLS for the background images in the Resources scroll
const imageResources = [
	//'imageURLforResource1',
	];
// Set the background image of each div in the scroll
	SetImages("resources", imageResources);


// Assign the images from the array as the background to the corresponding div
// e.g. div ID sample1 gets background imageSample[0] 
//      div ID sample2 gets background imageSample[1]
//		etc.
		
function SetImages(divName, imageArray) {
	for (let index = 1; index <= imageArray.length; index++) {
		var divIndex = divName + index;
		if (document.getElementById(divIndex))
			document.getElementById(divIndex).style.backgroundImage="url("+imageArray[index-1]+")";
	}
}





