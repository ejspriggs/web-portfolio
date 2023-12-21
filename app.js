function darkMode() {
    document.body.className = "colors-dark";
}

function lightMode() {
    document.body.className = "colors-light";
}

function selectFirst() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
}

function selectSecond() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

document.getElementById("switch-light").addEventListener("click", lightMode);
document.getElementById("switch-dark").addEventListener("click", darkMode);
document.getElementById("select-first").addEventListener("click", selectFirst);
document.getElementById("select-second").addEventListener("click", selectSecond);
