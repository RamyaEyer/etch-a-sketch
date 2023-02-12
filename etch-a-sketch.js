let rowNum = 16;
let colNum = 16;

// div.addEventListener("mouseover", function(){div.style.backgroundColor = "red";}); correct syntax
function letDraw(square){

    //square.style.backgroundColor = "red";
    
}

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

addGrid(rowNum, colNum);

document.querySelectorAll(".sketchpad").forEach(square => letDraw());

/*forEach(square => square.addEventListener("mouseover", function() {letDraw(square)}));*/
//for each loop for Event Listeners





