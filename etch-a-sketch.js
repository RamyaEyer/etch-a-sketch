rowNum = 16;
colNum = 16;

const container = document.querySelector(".container");

for(i = 0 ; i < rowNum * colNum ; i++ ){

    var div = document.createElement("div");
    div.style.height = "20px";
    div.style.width = "20px";
    div.style.background = "black";
    container.appendChild(div);
    
}

container.style.gridTemplateRows = "repeat(${rowNum}, 1fr)";
container.style.gridTemplateColumns = "repeat(${colNum}, 1fr)";


