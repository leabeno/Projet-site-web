//var text = document.getElementById("myClick").addEventListener('click', myClick)


function myClick() {

    var style = document.getElementsByClassName('item-content');

    for (var i = 0; i < style.length; i++) {
        if (style[i].style.display == "none") {
            style[i].style.display = "block";
        }
        else {
            style[i].style.display = "none";
        }
    }


}

function formValidation() {
    var nom = document.getElementById("nom");
    var mail = document.getElementById("mail");
    var message = document.getElementById("message").value;

    if (nom.value == "") {
        var error = document.getElementById('errorname');
        error.innerHTML = "Veuillez entrez votre nom ";
        error.style.color = "#D8000C";
        error.style.background = "#FFBABA";
        nom.focus();

        return false;
    }
    else if (nom.value.length < 3) {
        var error = document.getElementById('errorname');
        error.innerHTML = "Veuillez entrez un nom valide";
        error.style.color = "#D8000C";
        error.style.background = "#FFBABA";
        nom.focus();

        return false;
    }
    else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (mail.value == "") {
        var errormail = document.getElementById('errormail');
        errormail.innerHTML = "Veuillez entrez votre mail ";
        errormail.style.color = "#D8000C";
        errormail.style.background = "#FFBABA";
        mail.focus();

        return false;
    }
    if (!checkEmail(mail)) {
        var errormail = document.getElementById('errormail');
        errormail.innerHTML = "Veuillez entrez un mail valide";
        errormail.style.color = "#D8000C";
        errormail.style.background = "#FFBABA";
        mail.focus();

        return false;
    }


}

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

