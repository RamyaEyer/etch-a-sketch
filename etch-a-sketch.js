rowNum = 16;
colNum = 16;

const container = document.querySelector(".container");

for(i = 0 ; i < rowNum * colNum ; i++ ){

    var div = document.createElement("div");
    div.style.height = "20px";
    div.style.width = "20px";
    div.style.background = "black";
    container.style.gridTemplateRows = "repeat(16, 1fr)";  //Figure out why this doesn't like variables
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    //Increasing margins forces everything together, more needs to be understood about gridTemplateRows and repeat
    container.appendChild(div);
    
}



