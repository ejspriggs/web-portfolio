function darkMode() {
    document.body.className = "colors-dark";
}

function lightMode() {
    document.body.className = "colors-light";
}

document.getElementById("switch-light").addEventListener("click", lightMode);
document.getElementById("switch-dark").addEventListener("click", darkMode);
