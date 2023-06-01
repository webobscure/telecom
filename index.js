let btn = document.getElementsByClassName('btn');


function openPopup() {
   const popup = document.getElementById('popup');
   popup.classList.toggle('active')
}

function switchTheme() {
    let close = document.getElementById("close");

    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")) {
        close.src = "assets/dark-close.png"
    } else {
        close.src = "assets/close.png"
    }
}
