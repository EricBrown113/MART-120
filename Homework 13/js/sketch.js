// x and y for character 1
var characterX = 100;
var characterY = 100;

// l and m for character 2
var characterL = 100;
var characterM = 100;

// key codes for first character
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// key codes for second character
var i = 73; 
var k = 75;
var j = 74;
var l = 76;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var myXs = [];
var myYs = [];
var myDiameters = [];

// l and m for a shape
var shapeL = 40;
var shapeM = 20;
var shapeLSpeed;
var shapeMSpeed;


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 700);
    var x = 50;
    var y = 50;
    var diameter = 25;
    for(var i = 0; i < 3; i++)
    {
        
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 50;
        y += 50;
        diameter += 25;
    }
   
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    createCharacter(200, 350);

}

function draw()
{
    background(120,95,78);
    stroke(0);
    fill(100);

    for(var i = 0; i < myXs.length; i++)
        {
            circle(myXs[i],myYs[i],myDiameters[i]);
        }
    
    // call createBorders Function
    createBorders();
    
    // call createCharacter Function
    createCharacter();

    // call createExit Function
    createExit();

    // call createCharacter2 Function
    createCharacter2();

    // call 
    createMouseclick();
    
    // first set of keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

     // second set of keys
     if(keyIsDown(j))
     {
         characterL -= 10;   
     }
     if(keyIsDown(l))
     {
         characterL += 10;   
     }
     if(keyIsDown(i))
     {
         characterM -= 10;   
     }
     if(keyIsDown(k))
     {
         characterM += 10;   
     }

    // potential enemy
    fill(13,145,14);
    
    // draw the shape
    circle(shapeX, shapeY, 10);


     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    if(characterL > width && characterM > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    else{
        fill(0);
        stroke(5);
        textSize(26);
        text("Go!", width/2-100, height/2-100);
    }
    
 
}
    //  FUNCTIONS

function createMouseclick(){
   // create the shape based on the mouse click
   fill(120,130,140);
   circle(mouseShapeX, mouseShapeY, 50);
}

function createCharacter2(){
    //character
    fill(23,100,125);
    circle(characterX,characterY,45);
}

function createCharacter(){
    //character
    fill(23,150,125);
    circle(characterL,characterM,35);
}

function createBorders(){
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
}

function createExit(){
// exit message
textSize(18);
text("EXIT", width-50,height-50)
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
