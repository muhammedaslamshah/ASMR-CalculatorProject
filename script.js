let outputScreen = document.getElementById("output-screen");
const clickAudio = document.getElementById("clickAudio");

function display(num) {
    outputScreen.value += num;
    playClickSound();
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
    playClickSound(); 
}

function Cleared() {
    outputScreen.value = "";
    playClickSound();
}

function delBtn() {
    outputScreen.value = outputScreen.value.slice(0, -1);
    playClickSound();
}

function playClickSound() {
    if (clickAudio.paused) {
        clickAudio.currentTime = 0;
    }
    clickAudio.play(); 
}