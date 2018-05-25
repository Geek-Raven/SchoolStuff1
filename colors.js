let changeColor = function(area) {
    let color = document.getElementById("color"+area).value;
    console.log("#"+color);
    document.getElementById("area"+area)
        .style.backgroundColor = "#"+color || color;
}


document.getElementById("button1").addEventListener("click", 
    function() {
        changeColor(1);
    }
);
document.getElementById("button2").addEventListener("click",
    function() {
        changeColor(2);
    }
);
document.getElementById("button3").addEventListener("click",
function() {
    changeColor(3);
}
);

// Hex code field, 