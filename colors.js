let changeColor = function(area) {
    let color = document.getElementById("color"+area).value;
    console.log(color);
    document.getElementById("area"+area).style.backgroundColor = color;
}
let changeHex = function(area) {
    let color = document.getElementById("color"+area).value;
    console.log("#"+color);
    document.getElementById("area"+area).style.backgroundColor = "#"+color;
}

let changeImage = function(area) {
    let cimg = document.getElementById("color"+area).value;
    console.log(cimg);
    document.getElementById("area"+area).style.backgroundImage = "url('"+cimg+"')";
    document.getElementById("area"+area).style.backgroundSize = "1220px 140px";
}

document.getElementById("button1").addEventListener("click", 
    function() {
        changeColor(1);
    }
);
document.getElementById("button2").addEventListener("click",
    function() {
        changeImage(2);
    }
);
document.getElementById("button3").addEventListener("click",
function() {
    changeHex(3);
}
);