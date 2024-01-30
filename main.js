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

var correctColor;

function getRandomColorFromButtons() {
    var filterButtons = Array.from(allBtns).filter(item => item.style.display === 'block');
    
    if (filterButtons.length > 0) {
        var randColorIndex = Math.floor(Math.random() * filterButtons.length);
        correctColor = filterButtons[randColorIndex].style.backgroundColor.toLowerCase();
        randColorText.textContent = "Can you guess the color? " + correctColor;
    } else {
        randColorText.textContent = "Can you guess the color?";
    }
}


function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = `rgb(${red},${green},${blue})`;
    return rgb;
}

Btn.addEventListener("click", function () {
    allBtns.forEach(item => {
        item.style.display = "block";
        item.style.backgroundColor = getRandomColor();
    });
    getRandomColorFromButtons();
});

btnEasy.addEventListener("click", function () {
    generateElementsOnClick(3, true);
});

btnHard.addEventListener("click", function () {
    generateElementsOnClick(9, false);
});

function checkColor() {
    var buttonColor = this.style.backgroundColor.toLowerCase();
    
    if (buttonColor === correctColor.toLowerCase()) {
        alert('You win!');
    } else {
        alert('You lost!');
    }
}

allBtns.forEach(button => {
    button.addEventListener('click', checkColor);
});
