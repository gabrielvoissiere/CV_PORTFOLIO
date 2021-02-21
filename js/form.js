var nom = document.getElementById("name");
var mail = document.getElementById("email");
var msg = document.getElementById("message");
var btn = document.getElementById("submit");
var cautionNom = document.getElementById("cautionnom");
var cautionMail = document.getElementById("cautionmail");
var cautionMsg = document.getElementById("cautionmsg");

var validMail = false
var validNom = false
var validMsg = false

var valNom1 = /[a-zA-Z]+[0123456789 _+-.,!@#$%^&*();\/=|<>"']/g
var valNom2 = /[0123456789 _+-.,!@#$%^&*();\/|<>"'=]+[a-zA-Z]/g
var valMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

btn.setAttribute("disabled", "")

function validationNom() {
    if (nom.value == "") {
        cautionNom.innerHTML = "Veuillez saisir votre nom"
        validNom = false
        nom.classList.add("invalid")
    } else if (valNom1.test(nom.value) == true || valNom2.test(nom.value) == true) {
        cautionNom.innerHTML = "Nom incorrect";
        validNom = false
        nom.classList.add("invalid")
    } else {
        console.log("coucou");
        cautionNom.innerHTML = "";
        validNom = true
        nom.classList.remove("invalid")
    }
}

function validationMail() {
    if (mail.value == "") {
        cautionMail.innerHTML = "Veuillez saisir votre email"
        validMail = false;
        mail.classList.add("invalid")
    } else if (valMail.test(mail.value) == false) {
        cautionMail.innerHTML = "Email incorrect";
        validMail = false;
        mail.classList.add("invalid")
    } else {
        console.log("coucou2");
        cautionMail.innerHTML = "";
        validMail = true;
        console.log(valMail.test(mail.value));
        mail.classList.remove("invalid")
    }
}

function validationMsg() {
    if (msg.value == "") {
        cautionMsg.innerHTML = "Veuillez saisir un message"
        validMsg = false;
        msg.classList.add("invalidmsg")
    } else {
        cautionMsg.innerHTML = "";
        validMsg = true;
        msg.classList.remove("invalidmsg")
    }
}

function validationFinal() {
    if (validNom == true && validMail == true && validMsg == true) {
        btn.removeAttribute("disabled", "")
    } else {
        btn.setAttribute("disabled", "")
    }
}



nom.addEventListener("input", function() {
    validationNom()
    console.log("nom est"+" "+validNom);
    validationFinal()
})

mail.addEventListener("input", function() {
    validationMail()
    console.log("mail est"+" "+validMail);
    validationFinal()
})

msg.addEventListener("input", function() {
    validationMsg()
    console.log("msg est"+" "+validMsg);
    validationFinal()
})

    
















































// function nomVal() {
//     console.log(valNom.test(nom.value)); 
    
//     if (nom.value == "") {
//         cautionNom.innerHTML = "Veuillez saisir votre nom"
//     } else if (valNom.test(nom.value) == true) {
//         cautionNom.innerHTML = "Nom invalide"
//     } else {
//         cautionNom.innerHTML = ""
//     }
// }

// function mailVal() {
//     console.log(valMail.test(mail.value)); 
    
//     if (mail.value == "") {
//         cautionMail.innerHTML = "Veuillez saisir votre email"
//     } else if (valMail.test(mail.value) == false) {
//         cautionMail.innerHTML = "email invalide"
//     } else {
//         console.log("coucou");
//     }
// }
