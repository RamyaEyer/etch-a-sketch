let sliderNum = 16;

/* letDrawBlack(square)

    Makes individual squares from grid be able to change colour to black.

*/

function letDrawBlack(square){

    square.style.backgroundColor = "black";
    
}

/* returnToStart(square)

 Return squares to start colour (Whitesmoke)


*/

function returnToStart(square){

    square.style.backgroundColor = "whitesmoke";

}

/* addGrid(sliderNum)

Parses number on slider chosen to form grid with specified dimensions.

*/

function addGrid(sliderNum){

    container = document.querySelector(".sketchpad");

    for(i = 0 ; i < sliderNum * sliderNum ; i++ ){

        var div = document.createElement("div");    
        div.className = "square";
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

/* Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for drawing in random colours.*/

function randomColor(){

    document.querySelectorAll(".square").forEach(square =>  square.addEventListener("mouseover", function() {letDrawColor(square)}));
    
}

/* Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for default drawing to be possible.*/

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



function displayGridValue(x){

    document.getElementById("sliderVal").innerHTML=x;

    sliderNum = x;

    initSlider(sliderNum);

}



function initSlider(sliderNum){

    addGrid(sliderNum);

    black();

}


/* Generates Etch-a-Sketch Grid */

initSlider(sliderNum);