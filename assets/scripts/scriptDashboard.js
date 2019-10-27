photoArray = ["./assets/img/0.svg", "./assets/img/1.svg", "./assets/img/2.svg"];
let i = 0;
setInterval(function () {
    const img = document.getElementById('smartHouse');
    img.src = photoArray[i];
    i++;
    if (i > 2) {
        i = 0;
    }

}, 1000);
