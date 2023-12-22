var avant = document.getElementById("avant");
var lettre = document.getElementById("lettre");
var apres = document.getElementById("apres");
var selection = document.getElementById("slctr");
var le_mot_complet = document.getElementsByClassName("lemot");
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var skipback = document.getElementById("skipback");
var skipforward = document.getElementById("skipforward");
var h1 = document.getElementById("h1");
var reglage = document.getElementById("reglages");
var edit = document.getElementById("edit");
var retour = document.getElementById("retour");
var jaune = document.getElementById("jaune");
var vert = document.getElementById("vert");
var bleu = document.getElementById("bleu");
var violet = document.getElementById("violet");
var rose = document.getElementById("rose");
var rouge = document.getElementById("rouge");
var orange = document.getElementById("orange");
var header = document.querySelector("header");
var optionparametre = document.getElementById("option_parametre");
var optionedit = document.getElementById("option_edit");
var optionretour = document.getElementById("option_retour");
var taille = document.getElementById("taille");
var vitesseplus = document.getElementById("vitesseplus");
var vitessemoins = document.getElementById("vitessemoins");
var vitesse = document.getElementById("vitesse");
var modesombre = document.getElementById("modesombre");
var remonte = document.getElementById("remonte");
var explication = document.getElementById("explication");
var pexplication = document.getElementById("pexplication");
var lancerexample = document.getElementById("lancerexample");
var wave = document.getElementById("wave");
var valider = document.getElementById("valider");
var body = document.querySelector("body");
var block1 = document.getElementById("block1");
var espacepourparagraphe = document.getElementById("espace_pour_paragraphe");
var espacepourbouton2 = document.getElementById("espace_pour_bouton2");
var espacepourparametre = document.getElementById("espace_pour_parametre");
var parametre = document.getElementById("parametre");
var vitesseplus = document.getElementById("vitesseplus");
var vitessemoins = document.getElementById("vitessemoins");
var mail = document.getElementById("mail");
var h1explication = document.getElementById("h1explication");
var corps = document.getElementById("corps");
var pied = document.getElementById("pied");
var espacepexplication = document.getElementById("espacepexplication");
var lemotcomplet = document.getElementById("lemotcomplet");
var valeurmodesombre = 0;
var remonteroupas = 0;
var avant_la_lettre = "";
var apres_la_lettre = "";
var interval = "";
var mot = "";
var r1 = /\s+/;
var tableau = [];
var i = 0;
var t = 0;
var pause_ou_pas = 1;
var couleur = "jaune";
var taillebody = corps.offsetHeight;
var taillegrandbody = taillebody *= 1.4;

//parametre ajustable
var vitesse_voulue = 300;
lettre.style.color = "rgb(212, 184, 26)";


var dhkjl = 0;








// bouton remonte
remonte.addEventListener("click", remontefonciton);

remontefonciton();
function remontefonciton(){
    if(remonteroupas == 0){
        remonte.src = "image/chevron-down.svg";
        explication.style.height = "30px";
        espacepexplication.style.display = "none";
        pexplication.style.display = "none";
        lancerexample.style.display = "none";
        corps.style.height = "initial";
        remonteroupas = 1;
    }
    else{
        remonte.src = "image/chevron-up.svg";
        explication.style.height = "200px";
        espacepexplication.style.display = "flex";
        pexplication.style.display = "initial";
        lancerexample.style.display = "initial";
        corps.style.height = taillegrandbody + "px";
        remonteroupas = 0;
    }
}


// bouton lancer example

lancerexample.addEventListener("click", fonctionlancerexample);

function fonctionlancerexample(){
    remontefonciton();
    clearInterval(interval);
    t = -1;
    selection.value = pexplication.textContent;
    tableau = selection.value.split(r1);
    interval = setInterval(afficher_mot, 60000/vitesse_voulue);
    pause_ou_pas = 0;
    if(valeurmodesombre == 1){
        pause.src = "image/pause(1) (2).svg";
    }
    else{
        pause.src = "image/pause.svg";
    }
}

// bouton valider
valider.style.display = "none";

valider.addEventListener("click", fonctionvalider);


function fonctionvalider(){
    clearInterval(interval);
    t = -1;
    tableau = selection.value.split(r1);
    interval = setInterval(afficher_mot, 60000/vitesse_voulue);
    pause_ou_pas = 0;
    if(valeurmodesombre == 1){
        pause.src = "image/pause(1) (2).svg";
    }
    else{
        pause.src = "image/pause.svg";
    }
    valider.style.display = "none";
}


// quand on modifie le texte

selection.addEventListener("beforeinput", faitapparaitrevalider);

function faitapparaitrevalider(){
    valider.style.display = "initial";
}


// bouton pause
pause.addEventListener("click", tempsmort);
pause.addEventListener("mouseover", pausejaune);
pause.addEventListener("mouseout", pauseblanc);





function afficher_mot(){
    if(tableau[t]){
        avant_la_lettre = "";
        apres_la_lettre = "";
        mot = tableau[t].split("");
        // on stock dans une varaiable la lettre du milieu (ou milieu gauche) du mot puis on affiche
        taille_mot = (tableau[t].length)-1;
        la_position_de_la_lettre = Math.floor((taille_mot)/2);
        lettre.innerHTML = mot[la_position_de_la_lettre];

        // on stock dans une variabe les lettres du debut du mot puis on affiche
        for(i = 0; i < la_position_de_la_lettre; i++){
            avant_la_lettre += mot[i];
        }
        avant.innerHTML = avant_la_lettre;

        // on stock dans une variable les lettres de fin du mot puis on affiche
        for(i = (la_position_de_la_lettre + 1); i < (taille_mot + 1); i++){
            apres_la_lettre += mot[i];
        }
        apres.innerHTML = apres_la_lettre;
    }
    if(t > tableau.length){
        clearInterval(interval);
    }
    t++;
}

function tempsmort(){
    if(pause_ou_pas == 1){
        clearInterval(interval);
        interval = setInterval(afficher_mot, 60000/vitesse_voulue);
        pause_ou_pas = 0;
        if(couleur == "jaune"){
            pause.src = "image/pause(1).svg";
        }
        if(couleur == "vert"){
            pause.src = "image/pause(1) (1).svg";
        }
        if(couleur == "bleu"){
            pause.src = "image/pause(2).svg";
        }
        if(couleur == "violet"){
            pause.src = "image/pause(3).svg";
        }
        if(couleur == "rose"){
            pause.src = "image/pause(4).svg";
        }
        if(couleur == "rouge"){
            pause.src = "image/pause(5).svg";
        }
        if(couleur == "orange"){
            pause.src = "image/pause(6).svg";
        }
    }
    else{
        clearInterval(interval);
        pause_ou_pas = 1;
        if(couleur == "jaune"){
            pause.src = "image/play(1).svg";
        }
        if(couleur == "vert"){
            pause.src = "image/play(1) (1).svg";
        }
        if(couleur == "bleu"){
            pause.src = "image/play(2).svg";
        }
        if(couleur == "violet"){
            pause.src = "image/play(3).svg";
        }
        if(couleur == "rose"){
            pause.src = "image/play(4).svg";
        }
        if(couleur == "rouge"){
            pause.src = "image/play(5).svg";
        }
        if(couleur == "orange"){
            pause.src = "image/play(6).svg";
        }
    }
}
function pausejaune(){
    if(pause_ou_pas == 1){
        if(couleur == "jaune"){
            pause.src = "image/play(1).svg";
        }
        if(couleur == "vert"){
            pause.src = "image/play(1) (1).svg";
        }
        if(couleur == "bleu"){
            pause.src = "image/play(2).svg";
        }
        if(couleur == "violet"){
            pause.src = "image/play(3).svg";
        }
        if(couleur == "rose"){
            pause.src = "image/play(4).svg";
        }
        if(couleur == "rouge"){
            pause.src = "image/play(5).svg";
        }
        if(couleur == "orange"){
            pause.src = "image/play(6).svg";
        }
    }
    else{
        if(couleur == "jaune"){
            pause.src = "image/pause(1).svg";
        }
        if(couleur == "vert"){
            pause.src = "image/pause(1) (1).svg";
        }
        if(couleur == "bleu"){
            pause.src = "image/pause(2).svg";
        }
        if(couleur == "violet"){
            pause.src = "image/pause(3).svg";
        }
        if(couleur == "rose"){
            pause.src = "image/pause(4).svg";
        }
        if(couleur == "rouge"){
            pause.src = "image/pause(5).svg";
        }
        if(couleur == "orange"){
            pause.src = "image/pause(6).svg";
        }
    }
}
function pauseblanc(){
    if(pause_ou_pas == 1){
        if(valeurmodesombre == 1){
            pause.src = "image/play(1) (2).svg";
        }
        else{
            pause.src = "image/play.svg";
        }
    }
    else{
        if(valeurmodesombre == 1){
            pause.src = "image/pause(1) (2).svg";
        }
        else{
            pause.src = "image/pause.svg";
        }
    }
}


// bouton retrour 10 mots en arriere
skipback.addEventListener("click", retour_arriere);
skipback.addEventListener("mouseover", skipbackjaune);
skipback.addEventListener("mouseout", skipbackblanc);

function retour_arriere(){
    t -= 11;
    if(t < 0){
        t = 0;
    }
    afficher_mot();
}
function skipbackjaune(){
    if(couleur == "jaune"){
        skipback.src = "image/skip-back(1).svg";
    }
    if(couleur == "vert"){
        skipback.src = "image/skip-back(1) (1).svg";
    }
    if(couleur == "bleu"){
        skipback.src = "image/skip-back(2).svg";
    }
    if(couleur == "violet"){
        skipback.src = "image/skip-back(3).svg";
    }
    if(couleur == "rose"){
        skipback.src = "image/skip-back(4).svg";
    }
    if(couleur == "rouge"){
        skipback.src = "image/skip-back(5).svg";
    }
    if(couleur == "orange"){
        skipback.src = "image/skip-back(6).svg";
    }
}
function skipbackblanc(){
    if(valeurmodesombre == 1){
        skipback.src = "image/skip-back(1) (2).svg";
    }
    else{
        skipback.src = "image/skip-back.svg";
    }
}

// bouton avancer de 10 mots
skipforward.addEventListener("click", avancer);
skipforward.addEventListener("mouseover", skipforwardjaune);
skipforward.addEventListener("mouseout", skipforwardblanc);

function avancer(){
    t += 9;
    if(t > tableau.length){
        t = tableau.length;
    }
    afficher_mot();
}
function skipforwardjaune(){
    if(couleur == "jaune"){
        skipforward.src = "image/skip-forward(2).svg";
    }
    if(couleur == "vert"){
        skipforward.src = "image/skip-forward(1).svg";
    }
    if(couleur == "bleu"){
        skipforward.src = "image/skip-forward(3).svg";
    }
    if(couleur == "violet"){
        skipforward.src = "image/skip-forward(4).svg";
    }
    if(couleur == "rose"){
        skipforward.src = "image/skip-forward(5).svg";
    }
    if(couleur == "rouge"){
        skipforward.src = "image/skip-forward(6).svg";
    }
    if(couleur == "orange"){
        skipforward.src = "image/skip-forward(7).svg";
    }
}
function skipforwardblanc(){
    if(valeurmodesombre == 1){
        skipforward.src = "image/skip-forward(1) (1).svg";
    }
    else{
        skipforward.src = "image/skip-forward.svg";
    }
}

// bouton restart
restart.addEventListener("click", restartfunction);
restart.addEventListener("mouseover", restartjaune);
restart.addEventListener("mouseout", restartblanc);

function restartfunction(){
    t = 0;
    afficher_mot();
}
function restartjaune(){
    if(couleur == "jaune"){
        restart.src = "image/rotate-ccw(1).svg";
    }
    if(couleur == "vert"){
        restart.src = "image/rotate-ccw(1) (1).svg";
    }
    if(couleur == "bleu"){
        restart.src = "image/rotate-ccw(2).svg";
    }
    if(couleur == "violet"){
        restart.src = "image/rotate-ccw(4).svg";
    }
    if(couleur == "rose"){
        restart.src = "image/rotate-ccw(3).svg";
    }
    if(couleur == "rouge"){
        restart.src = "image/rotate-ccw(5).svg";
    }
    if(couleur == "orange"){
        restart.src = "image/rotate-ccw(6).svg";
    }
}
function restartblanc(){
    if(valeurmodesombre == 1){
        restart.src = "image/rotate-ccw(1) (2).svg";
    }
    else{
        restart.src = "image/rotate-ccw.svg";
    }
}

// change la couleur du titre quand on passe dessus
h1.addEventListener("mouseover", h1jaune);
h1.addEventListener("mouseout", h1blanc);

function h1jaune(){
    if(couleur == "jaune"){
        h1.style.color = "rgb(212, 184, 26)";
    }
    if(couleur == "vert"){
        h1.style.color = "rgb(20, 144, 35)";
    }
    if(couleur == "bleu"){
        h1.style.color = "rgb(12, 121, 160)";
    }
    if(couleur == "violet"){
        h1.style.color = "rgb(166, 37, 205)";
    }
    if(couleur == "rose"){
        h1.style.color = "rgb(207, 0, 138)";
    }
    if(couleur == "rouge"){
        h1.style.color = "rgb(181, 37, 37)";
    }
    if(couleur == "orange"){
        h1.style.color = "rgb(241, 111, 3)";
    }
}
function h1blanc(){
    h1.style.color = "rgb(228, 228, 228)";
}

// bouton reglage
reglage.addEventListener("click", reglagefonction);
reglage.addEventListener("mouseover", reglagejaune);
reglage.addEventListener("mouseout", reglageblanc);

reglagefonction();

function reglagefonction(){
    optionparametre.style.display = "initial";
    optionedit.style.display = "none";
    optionretour.style.display = "none";

    if(valeurmodesombre == 1){
        reglage.style.backgroundColor = "rgb(235, 235, 235)";
        edit.style.backgroundColor = "rgb(210, 210, 210)";
        retour.style.backgroundColor = "rgb(210, 210, 210)";
    }
    else{
        reglage.style.backgroundColor = "rgb(69, 69, 69)";
        edit.style.backgroundColor = "rgb(22, 22, 22)";
        retour.style.backgroundColor = "rgb(22, 22, 22)";
    }
}

function reglagejaune(){
    if(couleur == "jaune"){
        reglage.src = "image/settings(1).svg";
    }
    if(couleur == "vert"){
        reglage.src = "image/settings (8).svg";
    }
    if(couleur == "bleu"){
        reglage.src = "image/settings(1) (1).svg";
    }
    if(couleur == "violet"){
        reglage.src = "image/settings(2).svg";
    }
    if(couleur == "rose"){
        reglage.src = "image/settings(3).svg";
    }
    if(couleur == "rouge"){
        reglage.src = "image/settings(4).svg";
    }
    if(couleur == "orange"){
        reglage.src = "image/settings(5).svg";
    }
}
function reglageblanc(){
    if(valeurmodesombre == 1){
        reglage.src = "image/settings (1).svg";
    }
    else{
        reglage.src = "image/settings.svg";
    }
}

// bouton texte
edit.addEventListener("click", editfonction);
edit.addEventListener("mouseover", editjaune);
edit.addEventListener("mouseout",editblanc);

function editfonction(){
    optionparametre.style.display = "none";
    optionedit.style.display = "initial";
    optionretour.style.display = "none";

    if(valeurmodesombre == 1){
        reglage.style.backgroundColor = "rgb(210, 210, 210)";
        edit.style.backgroundColor = "rgb(235, 235, 235)";
        retour.style.backgroundColor = "rgb(210, 210, 210)";
    }
    else{
        reglage.style.backgroundColor = "rgb(22, 22, 22)";
        edit.style.backgroundColor = "rgb(69, 69, 69)";
        retour.style.backgroundColor = "rgb(22, 22, 22)";
    }
}

function editjaune(){
    if(couleur == "jaune"){
        edit.src = "image/type.svg";
    }
    if(couleur == "vert"){
        edit.src = "image/type(2).svg";
    }
    if(couleur == "bleu"){
        edit.src = "image/type(3).svg";
    }
    if(couleur == "violet"){
        edit.src = "image/type(4).svg";
    }
    if(couleur == "rose"){
        edit.src = "image/type(5).svg";
    }
    if(couleur == "rouge"){
        edit.src = "image/type(6).svg";
    }
    if(couleur == "orange"){
        edit.src = "image/type(7).svg";
    }
}
function editblanc(){
    if(valeurmodesombre == 1){
        edit.src = "image/type(2) (1).svg";
    }
    else{
        edit.src = "image/type(1).svg";
    }
}

// bouton retour
retour.addEventListener("click", retourfonction);
retour.addEventListener("mouseover", retourjaune);
retour.addEventListener("mouseout", retourblanc);

function retourfonction(){
    optionparametre.style.display = "none";
    optionedit.style.display = "none";
    optionretour.style.display = "initial";

    if(valeurmodesombre == 1){
        reglage.style.backgroundColor = "rgb(210, 210, 210)";
        edit.style.backgroundColor = "rgb(210, 210, 210)";
        retour.style.backgroundColor = "rgb(235, 235, 235)";
    }
    else{
        reglage.style.backgroundColor = "rgb(22, 22, 22)";
        edit.style.backgroundColor = "rgb(22, 22, 22)";
        retour.style.backgroundColor = "rgb(69, 69, 69)";
    }
}

function retourjaune(){
    if(couleur == "jaune"){
        retour.src = "image/feather(1).svg";
    }
    if(couleur == "vert"){
        retour.src = "image/feather (1).svg";
    }
    if(couleur == "bleu"){
        retour.src = "image/feather(1) (1).svg";
    }
    if(couleur == "violet"){
        retour.src = "image/feather(2).svg";
    }
    if(couleur == "rose"){
        retour.src = "image/feather(3).svg";
    }
    if(couleur == "rouge"){
        retour.src = "image/feather(4).svg";
    }
    if(couleur == "orange"){
        retour.src = "image/feather(5).svg";
    }
}
function retourblanc(){
    if(valeurmodesombre == 1){
        retour.src = "image/feather (2).svg";
    }
    else{
        retour.src = "image/feather.svg";
    }
}



// vitesse texte
vitesseplus.addEventListener("click", augmentevitesse);
vitessemoins.addEventListener("click", diminuevitesse);

function augmentevitesse(){
    vitesse_voulue += 20;
    vitesse.innerHTML = vitesse_voulue + " mots/minute";
    clearInterval(interval);
    interval = setInterval(afficher_mot, 60000/vitesse_voulue);
}
function diminuevitesse(){
    vitesse_voulue -= 20;
    vitesse.innerHTML = vitesse_voulue + " mots/minute";
    clearInterval(interval);
    interval = setInterval(afficher_mot, 60000/vitesse_voulue);
}



// mode sombre
modesombre.addEventListener("click", fonctionmodesombre);

function fonctionmodesombre(){
    if(valeurmodesombre == 0){
        valeurmodesombre = 1;
        reglagefonction();
        body.style.backgroundColor = "white";
        header.style.boxShadow = "none";
        block1.style.backgroundColor = "rgb(235, 235, 235)";
        selection.style.backgroundColor = "rgb(235, 235, 235)";
        selection.style.color = "black";
        valider.src = "image/check.svg";
        espacepourparagraphe.style.backgroundColor = "rgb(235, 235, 235)";
        lemotcomplet.style.color = "black";
        espacepourbouton2.style.backgroundColor = "rgb(210, 210, 210)";
        restart.src = "image/rotate-ccw(1) (2).svg";
        skipback.src = "image/skip-back(1) (2).svg";
        if(pause_ou_pas == 1){
            pause.src = "image/play(1) (2).svg";
        }
        else{
            pause.src = "image/pause(1) (2).svg";
        }
        skipforward.src = "image/skip-forward(1) (1).svg";
        espacepourparametre.style.backgroundColor = "rgb(210, 210, 210)";
        parametre.style.backgroundColor = "rgb(235, 235, 235)";
        parametre.style.color = "black";
        vitessemoins.src = "image/chevron-down (1).svg";
        vitesseplus.src = "image/chevron-up (1).svg";
        taille.style.backgroundColor = "rgb(235, 235, 235)";
        mail.style.color = "black";
        reglage.src = "image/settings (1).svg";
        edit.src = "image/type(2) (1).svg";
        retour.src = "image/feather (2).svg";
        h1explication.style.backgroundColor = "rgb(210, 210, 210)";
        h1explication.style.color = "black";
        remonte.style.backgroundColor = "rgb(210, 210, 210)";
        if(remonteroupas == 1){
            remonte.src = "image/chevron-down (1).svg";
        }
        else{
            remonte.src = "image/chevron-up (1).svg";
        }
        espacepexplication.style.backgroundColor = "rgb(235, 235, 235)";
        espacepexplication.style.color = "black";
        lancerexample.style.backgroundColor = "rgb(235, 235, 235)";
        lancerexample.src = "image/play(1) (2).svg";

        


        
    }
    else{
        valeurmodesombre = 0;
        reglagefonction();
        body.style.backgroundColor = "#2e2e2e";
        if(couleur == "jaune"){
            header.style.boxShadow = "0px 8px 20px rgb(212, 184, 26)";
        }
        if(couleur == "vert"){
            header.style.boxShadow = "0px 8px 20px rgb(20, 144, 35)";
        }
        if(couleur == "bleu"){
            header.style.boxShadow = "0px 8px 20px rgb(12, 121, 160)";
        }
        if(couleur == "violet"){
            header.style.boxShadow = "0px 8px 20px rgb(166, 37, 205)";
        }
        if(couleur == "rose"){
            header.style.boxShadow = "0px 8px 20px rgb(207, 0, 138)";
        }
        if(couleur == "rouge"){
            header.style.boxShadow = "0px 8px 20px rgb(181, 37, 37)";
        }
        if(couleur == "orange"){
            header.style.boxShadow = "0px 8px 20px rgb(241, 111, 3)";
        }
        block1.style.backgroundColor = "rgb(69, 69, 69)";
        selection.style.backgroundColor = "rgb(69, 69, 69)";
        selection.style.color = "rgb(228, 228, 228)";
        valider.src = "image/check(1).svg";
        espacepourparagraphe.style.backgroundColor = "rgb(69, 69, 69)";
        lemotcomplet.style.color = "rgb(228, 228, 228)";
        espacepourbouton2.style.backgroundColor = "rgb(22, 22, 22)";
        restart.src = "image/rotate-ccw.svg";
        skipback.src = "image/skip-back.svg";
        if(pause_ou_pas == 1){
            pause.src = "image/play.svg";
        }
        else{
            pause.src = "image/pause.svg";
        }
        skipforward.src = "image/skip-forward.svg";
        espacepourparametre.style.backgroundColor = "rgb(22, 22, 22)";
        parametre.style.backgroundColor = "rgb(69, 69, 69)";
        parametre.style.color = "rgb(228, 228, 228)";
        vitessemoins.src = "image/chevron-down.svg";
        vitesseplus.src = "image/chevron-up.svg";
        taille.style.backgroundColor = "rgb(69, 69, 69)";
        mail.style.color = "rgb(228, 228, 228)";
        reglage.src = "image/settings.svg";
        edit.src = "image/type(1).svg";
        retour.src = "image/feather.svg";

        h1explication.style.backgroundColor = "rgb(116, 116, 116)";
        h1explication.style.color = "rgb(228, 228, 228)";
        remonte.style.backgroundColor = "rgb(116, 116, 116)";
        if(remonteroupas == 1){
            remonte.src = "image/chevron-down.svg";
        }
        else{
            remonte.src = "image/chevron-up.svg";
        }
        espacepexplication.style.backgroundColor = "rgb(69, 69, 69)";
        espacepexplication.style.color = "rgb(228, 228, 228)";
        lancerexample.style.backgroundColor = "rgb(69, 69, 69)";
        lancerexample.src = "image/play.svg";
    }
}



// taille du texte
taille.addEventListener("click", changetaille);


for(var j = 0; j < le_mot_complet.length; j++){
    le_mot_complet[j].style.fontSize = taille.value + "px";
}
function changetaille(){
    for(var j = 0; j < le_mot_complet.length; j++){
        le_mot_complet[j].style.fontSize = taille.value + "px";
    }
}


// bouton des couleurs
jaune.addEventListener("click", changejaune);
vert.addEventListener("click", changevert);
bleu.addEventListener("click", changebleu);
violet.addEventListener("click", changeviolet);
rose.addEventListener("click", changerose);
rouge.addEventListener("click", changerouge);
orange.addEventListener("click", changeorange);

function changejaune(){
    lettre.style.color = "rgb(212, 184, 26)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(212, 184, 26)";
    }
    wave.src = "image/wave.svg";
    couleur = "jaune";
}
function changevert(){
    lettre.style.color = "rgb(20, 144, 35)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(20, 144, 35)";
    }
    wave.src = "image/wave(1).svg";
    couleur = "vert";
}
function changebleu(){
    lettre.style.color = "rgb(12, 121, 160)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(12, 121, 160)";
    }
    wave.src = "image/wave(2).svg";
    couleur = "bleu";
}
function changeviolet(){
    lettre.style.color = "rgb(166, 37, 205)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(166, 37, 205)";
    }
    wave.src = "image/wave(3).svg";
    couleur = "violet";
}
function changerose(){
    lettre.style.color = "rgb(207, 0, 138)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(207, 0, 138)";
    }
    wave.src = "image/wave(4).svg";
    couleur = "rose";
}
function changerouge(){
    lettre.style.color = "rgb(181, 37, 37)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(181, 37, 37)";
    }
    wave.src = "image/wave(5).svg";
    couleur = "rouge";
}
function changeorange(){
    lettre.style.color = "rgb(241, 111, 3)";
    if(valeurmodesombre != 1){
        header.style.boxShadow = "0px 8px 20px rgb(241, 111, 3)";
    }
    wave.src = "image/wave(6).svg";
    couleur = "orange";
}
