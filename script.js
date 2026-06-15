let box = document.querySelector("#lightBox");

function changeLight(color) {
    if (color === "red") {
        box.style.background = "red";
        box.innerHTML = "Stop 🚨"
    }
    else if (color === "yellow") {
        box.style.background = "yellow";
        box.innerHTML = "wait ⏳";
        box.style.color = "black";
    }
    else if (color === "green") {
        box.style.background = "green";
        box.style.color = "white";
        box.innerText = "GO 🚗";
    }
}

function resetLight(){
    box.style.background = "#333";
  box.innerText = "READY";
  box.style.color = "white";
}