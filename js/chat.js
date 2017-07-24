var nom = "";
var emoji = 0;
var message;
var i;
var tableauReponse = ["salut, comment ça va?","je vais bien merci","j'aime GOT","j'aime manger des sushis", "j'ai déjà un copain désolé", "j'adore les mangas", "je me casse", "mdr", ":)","lol"];
//var listEmoji = ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Day-template.svg/150px-Day-template.svg.png"];


//fonction cachant le chat à la fin du chargement
function depart(){
 $("#chat").fadeOut(0);
}

//fonction récupérant le nom de l'utisateur et passe de la page d'accueil au chat lui même
function nomUtilisateur(){
    nom = $("#entreeNom").val();
    $("#entree").fadeOut(1000);
    $("#chat").fadeIn(1000);
    $("#nomUtilisateur").text(nom);
}

//fonction principal lancant le tout
$(document).ready(function(){
  depart();
  $("#validationNomUtilisateur").click(function(){
    nomUtilisateur();
  });
  $("#envois").click(function(){
    envoisMessageUtilisateur();
  });
  $(".imgEmoji").click(function(){
    var utilEmoji = (this);
    $("#fenetreUtilisateur").append(utilEmoji);
  });
});

//fonction récupérant le message de l'utilisateur et l'ajoute à la fenetre des messages
function envoisMessageUtilisateur(){
    message = $("#messageUtilisateur").val();
    $("#messageUtilisateur").val("");
    $("#fenetreUtilisateur").append("<p>"+message+"</p><br>");
    preparationBot();
    /*var arrayOfStrings = message.split(" ");
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if(arrayOfStrings[i]==":)"){
          emoji = 0;
      }
    }
    if (emoji == 0) {
      $("#fenetreUtilisateur").append("<p>"+message+"</p><br>");
      $(arrayOfStrings).remplace(":)","<img class='emoji' src:'' alt='smiley'>")
      console.log("test")
      ajoutEmoji();
    }
    else {
      $("#fenetreUtilisateur").append("<p>"+message+"</p>");
    }*/

}

//donne un temps de réaction "humain" au bot
function preparationBot(){
  setTimeout(function () {
    envoisMessageBot();
  }, 3000);
}

//le bot choisit une réponse et l'ajoute à sa fenetre de message
function envoisMessageBot(){
  var random = Math.floor(Math.random()*tableauReponse.length);
  $("#fenetreBot").append("<div class='messageBot'><img src='http://cdn-elle.ladmedia.fr/var/plain_site/storage/images/media/images/hotesse/55732491-1-fre-FR/hotesse_large.jpg' alt='portrait'>"+"<i>BotSimplon</i> </br><b>"+tableauReponse[random]+"</b></div>");
}
