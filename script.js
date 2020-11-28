//var text = document.getElementById("myClick").addEventListener('click', myClick)


function myClick() {

    var style = document.getElementsByClassName('item-content');

    for (var i = 0; i < style.length; i++) {
        if (style[i].style.display == "none") {
            style[i].style.display = "block";
            style[i].classList.add("animation");

        }
        else {
            style[i].style.display = "none";
        }
    }


}

