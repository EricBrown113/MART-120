var headX = 250;
var headY = 100;
var headDirection = 5;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 1;

var legX = 200;
var legY = 185;
var legDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;
function setup()
{
    createCanvas(500, 600);
    movement = Math.floor(Math.random() * 10) + 1;
    console.log(movement);
}


function draw()
{
background(120,45,78);

//textSize(24)
textSize(size)
text('Eric Brown', 350, 575);
size+= sizeDirection;
count++;
if(count > 5)
{
    sizeDirection *=-1;
    count = 0;
}
    
   
// head
fill(250, 204, 0);
circle(headX,headY,175);
headX+=headDirection;
if(headX >= 418 || headX <= 82)
{
    headDirection *= -1;
}

// eyes
strokeWeight(8);
fill(0);
point(200,75);
point(285,75);


// nose
point(245,90);


// mouth
arc(245, 105, 60, 50, 0, radians(180), PIE);

 
// body
fill(10, 24, 120);
rect(190,bodyY,100,150);
bodyY += bodyDirection;
if(bodyY <= 0 || bodyY >= 450 )
{
    bodyDirection *= -1;
}

// Body Triangle
fill(255);
triangle(200,320,240,220,280,320)


//limbs
line(bodyY,360,bodyY,175);
bodyY += bodyDirection;
if(bodyY <= 0 || bodyY >= 450 )
{
    bodyDirection *= -1;
}

//Right arm
line(240,275,340,175);  

//Left arm
line(240,275,140,175);  

//Left Leg
line(240,360,140,425);  

//Right Leg
line(240,legY,340,legY);
legY += bodyDirection;
if(legY <= 0 || legY >= 450 )
{
    legDirection *= 0;
}


}



