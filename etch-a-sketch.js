let sliderNum = 16;

/* letDrawBlack(square)

    Makes individual squares from grid be able to change colour to black.

*/

function letDrawBlack(square){

    square.style.backgroundColor = "black";
    
}

/* returnToStart(square)

 Return squares to start colour (Whitesmoke) on reset.


*/

function returnToStart(square){

    square.style.backgroundColor = "whitesmoke";

}


/* addGrid(sliderNum)

Parses number on slider chosen to form grid with specified dimensions.

*/

function addGrid(sliderNum){

    removeGrid();

    container = document.querySelector(".sketchpad");

    for(i = 0 ; i < sliderNum * sliderNum ; i++ ){

        var div = document.createElement("div");    
        div.className = "square ${i}";
        container.style.gridTemplateRows = "repeat(" + sliderNum + ", 1fr)";  
        container.style.gridTemplateColumns = "repeat("+ sliderNum + ", 1fr)";
        container.appendChild(div);
        
    }

}

/* resetGrid() 

Prompted by button to reset
Sets all squares in Etch-a-sketch to default colour


*/

function resetGrid(){
    
    squares = document.querySelectorAll(".square");
    squares.forEach(square => returnToStart(square));

}

/* randomColor()

Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for drawing in random colours.

*/

function randomColor(){

    document.querySelectorAll(".square").forEach(square =>  square.addEventListener("mouseover", function() {letDrawColor(square)}));
    
}

/* black()

Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for default drawing to be possible.

*/

function black(){

    document.querySelectorAll(".square").forEach(square =>  square.addEventListener("mouseover", function() {letDrawBlack(square)}));

}

/* Randomly generate a colour by choosing random numbers between 0-255 and parsing as a string to be converted as a colour to appear.*/

function letDrawColor(square){

    cnum1 =  (Math.random() * 255);
    cnum2 =  (Math.random() * 255);
    cnum3 =  (Math.random() * 255);

    color = "rgb("+ cnum1 +", "+ cnum2 +", "+ cnum3+")";

    square.style.backgroundColor = color;

}

/* removeGrid()

Removes Grid before creating adding grid with new dimensions in the slider.

*/

function removeGrid(){

    document.querySelector(".sketchpad").innerHTML="";
    
}




/*displayGridValue(x)


Displays value on grid and creates new grid. */


function displayGridValue(x){

    document.getElementById("sliderVal").innerHTML=x;

    sliderNum = x;

    initGrid(sliderNum);

}

/*initGrid(sliderNum)


Initiates Creation of Grid once number is determined on slider. */


function initGrid(sliderNum){
  
    addGrid(sliderNum);

    black();

}


/* Function Call Generates Etch-a-Sketch Grid */

initGrid(sliderNum);