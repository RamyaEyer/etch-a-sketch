let rowNum = 16;
let colNum = 16;

/*letDraw(square)

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

/*addGrid(rowNum, colNum)

Parses number of rows and columns requested to form grid with specified dimensions.

*/

function addGrid(rowNum, colNum){

    const container = document.querySelector(".sketchpad");

    for(i = 0 ; i < rowNum * colNum ; i++ ){

        var div = document.createElement("div");    
        div.className = "square";
        container.style.gridTemplateRows = "repeat(" + rowNum + ", 1fr)";  
        container.style.gridTemplateColumns = "repeat("+ colNum + ", 1fr)";
        container.appendChild(div);
        
    }

}

/*

resetGrid() 

Prompted by button to reset
Sets all squares in Etch-a-sketch to default colour


*/

function resetGrid(){
    
    squares = document.querySelectorAll(".square");
    squares.forEach(square => returnToStart(square));

}

/*Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for drawing in random colours.*/

function randomColor(){

    document.querySelectorAll(".square").forEach(square =>  square.addEventListener("mouseover", function() {letDrawColor(square)}));
    
}

/*Takes each square from etch-a-sketch grid and assigns an Event Listener for all of them allowing for default drawing to be possible.*/

function black(){

    document.querySelectorAll(".square").forEach(square =>  square.addEventListener("mouseover", function() {letDrawBlack(square)}));

}

/*Randomly generate a colour by choosing random numbers between 0-255 and parsing as a string to be converted as a colour to appear.*/

function letDrawColor(square){

    cnum1 =  (Math.random() * 255);
    cnum2 =  (Math.random() * 255);
    cnum3 =  (Math.random() * 255);

    color = "rgb("+ cnum1 +", "+ cnum2 +", "+ cnum3+")";

    square.style.backgroundColor = color;
}

/*Functions are in order of call.*/

addGrid(rowNum, colNum);

black();








