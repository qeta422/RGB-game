var Btn = document.querySelector(".main-btn");
var allBtns = document.querySelectorAll(".btn");
var btnEasy = document.querySelector(".easy-btn");
var btnHard = document.querySelector(".hard-btn");
var randColorText = document.querySelector("#guessColor");

function generateElementsOnClick(count, hide) {
    var displayValue = hide ?'none' : 'block';
    for (var i = 0; i < count; i++) {
        allBtns[i].style.display = displayValue;
    }
}

function getRandomColorFromButtons() {
    var filterButtons = [];
    allBtns.forEach(item => {
        if (item.style.display.search("block") >= 0) {
            filterButtons.push(item);
        }
    });

    var randColor = Math.floor(Math.random()*filterButtons.length);
    randColorText.textContent = ("Can you guess the color?" + " " + filterButtons[randColor].style.backgroundColor);
}

function getRandomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    var rgb = `rgb(${red},${green},${blue})`;
    return rgb;
}

Btn.addEventListener("click", function(){
    allBtns.forEach (item => {
        item.style.display = "block";
        item.style.backgroundColor =  getRandomColor();
    });
    getRandomColorFromButtons();
});

btnEasy.addEventListener("click", function(){
    generateElementsOnClick(3, true);
})

btnHard.addEventListener("click", function(){
    generateElementsOnClick(9, false);
})



