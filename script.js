function setup() {
	createCanvas(500, 400);
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	background(225);
	
	fill(0, 255, 0);
	rect(xpos, ypos, 50, 50);
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -2;
			break;
		case 39:
		case 68:
			xspeed = 2;
			break;
		case 38:
		case 87:
			yspeed = -2;
			break;
		case 40:
		case 83:
			yspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}


function movepaddles(){
  paddleLTop = paddleLeftY - paddleH/2, 
 paddleLB = paddleLeftY + paddleH/2, 
 paddleRTop = paddleRightY - paddleH/2, 
 paddleRB = paddleRightY + paddleH/2;

	if (keyIsDown(87) && (paddleLTop > 0)) {
		paddleLeftY -= paddleVel;
	} else if (keyIsDown(83) && (paddleLB < canvasH)) {
		paddleLeftY += paddleVel;
	}

	if (keyIsDown(79) && (paddleRTop > 0)) {
		paddleRightY -= paddleVel;
	} else if (keyIsDown(76) && (paddleRB < canvasH)) {
		paddleRightY += paddleVel;
}

paddleLTop = paddleLeftY - paddleH/2, 
paddleLB   = paddleLeftY + paddleH/2, 
paddleRTop = paddleRightY - paddleH/2, 
paddleRB   = paddleRightY + paddleH/2;
