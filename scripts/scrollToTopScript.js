let mybutton = document.getElementById("toTopButton");

window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        mybutton.style.opacity = 1;
        mybutton.style.pointerEvents = "auto";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.pointerEvents = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}