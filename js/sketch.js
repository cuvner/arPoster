let images = [];
let imageNames = [
  'PacManB.png', 'PacManBc.png', 'PacManG.png', 'PacManGc.png',
  'PacManR.png', 'PacManRc.png', 'PacManY.png', 'PacManYc.png'
];

function preload() {
  for (let i = 0; i < imageNames.length; i++) {
    let img = loadImage('https://cuvner.github.io/arPoster/images/' + imageNames[i]);
    images.push(img);
  }
}

let h = 0

function setup() {
	createCanvas(1912, 1912, document.getElementById('canvas-ar')) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag
	frameRate(10)

}

function draw() {
	for(let i = 0; i < width; i += 100) {
		for(let j = 0; j < height; j += 100) {
			let r = random(images);
			
			image(r, i, j);
		}
	}
}

function mousePressed() {
	// clear()
	// h = random(360)
}