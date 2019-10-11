let x, y;
let w;

// Random Walker (No Vectors)

// A random walker class!

class Walker {
	constructor() {
   		this.x = width/2;
		this.y = height/2;
		this.size = 36;
	}

   	get xPosition() {
   		return this.x;
   	}

   	get yPosition() {
   		return this.y;
   	}

   	set xPosition(x) {
   		this.x = x;
   	}

   	set yPosition(y) {
   		this.y = y;
   	}
  
 	render() {
 		stroke("#FF00CC");
   		fill("red");
   		//rectMode(CENTER);
   		//rect(x, y, size, size);
		ellipse(this.x, this.y, this.size);
   	}

   	// Randomly move up, down, left, right, or stay in one place
   	walk() {
     	let vx = random(-1, 1);
	   	let vy = random(-1, 1);
	   	this.x += vx;
	   	this.y += vy;

		// Stay on the screen
		this.x = constrain(this.x, this.size/2, width - this.size/2);
		this.y = constrain(this.y, this.size/2, height - this.size/2);
   	}
}


function setup() {
	createCanvas(400, 400); 
	//frameRate(30);

	// Create a walker object
	w = new Walker();
	
	return w;
}

function draw() {
	background("#DDDDDD");
	
	// Run the walker object
    w.walk();
    w.render();
}