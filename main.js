// Name button function
function nameInput() {
    let name = prompt("Type in your name: ");
    if (name) {
        document.getElementById("nameOutput").textContent = "Welcome, " + name + "!";
    }
}

// Enlarging image function
function enlargeImage() {
    let img = document.getElementById("profileImage");
    img.style.width = "500px";
    img.style.height = "auto";
}

// reset image function
function resetImage() {
    let img = document.getElementById("profileImage");
    img.style.width = "200px";
    img.style.height = "auto";
}

// OnMouseOver function
function navMouseOver(element) {
    element.style.backgroundColor = "#f0e68c";
}

// OnMouseOut function
function navMouseOut(element) {
    element.style.backgroundColor = "";
}