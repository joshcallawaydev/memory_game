function gameInfo() {
    let info = document.getElementById("gameInfo");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

gameInfo();