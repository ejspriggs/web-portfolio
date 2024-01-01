function darkMode() {
    document.body.className = "colors-dark";
}

function lightMode() {
    document.body.className = "colors-light";
}

function selectHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("bio").style.display = "none";
}

function selectBio() {
    document.getElementById("home").style.display = "none";
    document.getElementById("bio").style.display = "block";
}

document.getElementById("switch-light").addEventListener("click", lightMode);
document.getElementById("switch-dark").addEventListener("click", darkMode);
document.getElementById("select-home").addEventListener("click", selectHome);
document.getElementById("select-bio").addEventListener("click", selectBio);
