// fonction page Acheter 
function myClick() {

    var style = document.getElementsByClassName('item-content');

    for (var i = 0; i < style.length; i++) {
        if (style[i].style.display == "none") {
            style[i].style.display = "flex";
        }
        else {
            style[i].style.display = "none";
        }
    }
}
// Validation formulaire Accueil 
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
// Verification email
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// Validation formulaire page assistance
function assistanceCheckForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contenu = document.getElementById("contenu");
    var parent = document.getElementById("error-name");
    //Création d'un nouvel element div du DOM 
    var newDiv = document.createElement('div');
    newDiv.className = "error-item";

    if (name.value == "" && email.value == "" && contenu.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
         <span> S'il vous plaît, remplissez les champs suivants:</span>
                <ul> 
                    <li> Votre nom </li>
                    <li> Votre adresse e-mail</li>
                    <li> Votre message </li>
                </ul>
        `;
        name.style.borderColor = "red";
        email.style.borderColor = "red";
        contenu.style.borderColor = "red";

    }
    else if (name.value == "" && email.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
                 <span> S'il vous plaît, remplissez les champs suivants:</span>
                    <ul> 
                        <li> Votre nom </li>
                        <li> Votre adresse e-mail</li>
                    </ul>
        `;
        name.style.borderColor = "red";
        email.style.borderColor = "red";
        name.style.borderWidth = "2px"

    }
    else if (name.value == "" && contenu.value == "" && !checkEmail(email)) {

        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
         
                 <span> S'il vous plaît, remplissez les champs suivants:</span>
                    <ul> 
                        <li> Votre nom </li>
                        <li> Votre message</li>
                    </ul>
                <span> Veuillez corriger les erreurs suivantes :</span>
                    <ul> 
                        <li> E-mail non valide </li>
                    </ul>
         
        `;
        name.style.borderColor = "red";
        contenu.style.borderColor = "red";



    }
    else if (email.value == "" && contenu.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }

        newDiv.innerHTML = `
        
                <span> S'il vous plaît, remplissez les champs suivants:</span>
                    <ul> 
                        <li> Votre adresse e-mail</li>
                        <li> Votre message </li>
                    </ul>
        `;
        email.style.borderColor = "red";
        contenu.style.borderColor = "red";
    }
    else if (name.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
         
            <span> S'il vous plaît, remplissez les champs suivants:</span>

                    <ul> 
                        <li> Votre nom </li>
                    </ul>
         `;
        name.style.borderColor = "red";

    }
    else if (email.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
         
            <span> S'il vous plaît, remplissez les champs suivants:</span>

                    <ul> 
                        <li> Votre e-mail </li>
                    </ul>
         `;
        email.style.borderColor = "red";

    }
    else if (contenu.value == "") {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
           <span> S'il vous plaît, remplissez les champs suivants:</span>

                    <ul> 
                        <li> Votre message </li>
                    </ul>
         `;
        contenu.style.borderColor = "red";

    }
    else if (!checkEmail(email)) {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }
        newDiv.innerHTML = `
         
            <span> Veuillez corriger les erreurs suivantes :</span>

                    <ul> 
                        <li> E-mail non valide </li>
                    </ul>
         `;
        email.style.borderColor = "red";
    }

    //Ajout de la div avec le contenu erreur 
    parent.appendChild(newDiv);
}




var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // Permet de mettre en display le bon encart 
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    x[n].style.marginTop = "70px";

}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    //Réduire l'opacité de l'encart actulle
    x[currentTab].style.opacity = "0.3";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        ValidationR();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function clickCave() {
    var cave = document.getElementById("cave");
    cave.style.display = "block";
}

function ValidationR() {
    var adresse = document.getElementById('adresse');
    var surface = document.getElementById("surface");
    var piece = document.getElementById("piece");
    var Recap = document.getElementById('recapitulatif')

    var txt = document.createElement('h4');
    var txt2 = document.createElement('h4');
    var txt3 = document.createElement('h4');

    txt.innerHTML = "Votre adresse est :" + " " + adresse.value;
    txt2.innerHTML = "Vous avez une surface de " + "  " + surface.value + "m²" + " " + "et vous avez" + " " + piece.value + " " + "pièces";
    Recap.append(txt, txt2);

    if (piece.value <= 2) {
        txt3.innerHTML = "Notre estimation est de 430 567€ !";
        Recap.append(txt3);

    }
    if (piece.value > 2) {
        txt3.innerHTML = "Notre estimation est de 555 489€ !";
        Recap.append(txt3);

    }
}

