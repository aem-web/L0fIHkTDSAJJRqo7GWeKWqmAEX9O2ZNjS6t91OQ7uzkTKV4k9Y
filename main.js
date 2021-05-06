window.onscroll = function() {headerFunction()};
function headerFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("header").style.background = "linear-gradient(-45deg, #c7ca00, #00e280)";
    } else {
        document.getElementById("header").style.background = "none";
        document.getElementById("header").style.background = "rgba(0,0,0,0.1)";

    }
}