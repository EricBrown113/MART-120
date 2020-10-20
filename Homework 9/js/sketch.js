function setup()
{
    createCanvas(500, 600);
}


function draw()
{
    background(120,45,78);
    textSize(24)
    text('Eric Brown', 350, 575);
    
   
// head
fill(250, 204, 0);
circle(245,100,150);

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
rect(190,190,100,150);

fill(255);
triangle(200,320,240,220,280,320)

//limbs
line(240,360,240,175);

//Right arm
line(240,275,340,175);  

//Left arm
line(240,275,140,175);  

//Left Leg
line(240,360,140,425);  

//Right Leg
line(240,360,340,425);

fill(240);

}



