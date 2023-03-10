
var circleColors = [
    "rgb(173, 229, 227)",
    "rgb(255,154,154)",
    "rgb(255 118 161)",
    "rgb(110, 152, 196)",
    "rgb(255 167 91)",
    "rgb(255 173 134)",
    "rgb(124 229 255)",
    "rgb(45 164 223)",
    "rgb(111 177 140)",
    "wheat"
];

/* HOW TO REPLACE ONE OF THE LIST ITEMS 
circleColors[9] = "yellow";
*/

function clrChange(index) {
    var bgdColor = document.getElementById("bgdColor");
    bgdColor.style.backgroundColor = circleColors[index];
    var wrdGone = document.getElementById("instructGone");
    wrdGone.innerHTML = "";
}

function reset() {
    clrChange(9);
    var wrdBack = document.getElementById("instructGone");
    wrdBack.innerHTML = "click on a circle";
}
