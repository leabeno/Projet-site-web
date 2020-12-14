// Permet d'ouvrir et fermer les différents encarts 
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




var currentTab = 0; // Initialisation de l'encart à 0
showTab(currentTab); // Appelle de la fonction 

function showTab(n) {
    // Permet de mettre en display block le bon encart 
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    x[n].style.marginTop = "70px";

}

// Permet d'afficher l'encart suivant au click 
function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    //Réduire l'opacité de l'encart actulle
    x[currentTab].style.opacity = "0.3";
    // Passe à l'encart suivant 
    currentTab = currentTab + n;
    // Si dernier encart..
    if (currentTab >= x.length) {
        // ... on appelle la fonction suivante
        ValidationR();
        return false;
    }
    // Sinon, On display l'encart suivant
    showTab(currentTab);
}

// Permet d'afficher l'input surface Cave si OUI
function clickCave() {
    var cave = document.getElementById("cave");
    cave.style.display = "block";
}

// Récupère et affiche le récapitulatif et l'estmation
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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log("dans la fonction")
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
        console.log("dans le if")
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}