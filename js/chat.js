var nom = "";
var emoji = 0;
var message;
var i;
var tableauReponse = ["salut, comment ça va?","je vais bien merci","j'aime GOT","j'aime manger des sushis", "j'ai déjà un copain désolé", "j'adore les mangas", "je me casse", "mdr", ":)","lol"];
var listEmoji = ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Day-template.svg/150px-Day-template.svg.png"];

function depart(){
 $("#chat").fadeOut(0);
}

function nomUtilisateur(){
    nom = $("#entreeNom").val();
    $("#entree").fadeOut(1000);
    $("#chat").fadeIn(1000);
    $("#nomUtilisateur").text(nom);
}

$(document).ready(function(){
  depart();
  $("#validationNomUtilisateur").click(function(){
    nomUtilisateur();
  });
  $("#envois").click(function(){
    envoisMessageUtilisateur();
  });
  $(".imgEmoji").click(function(){
    $("#fenetreUtilisateur").append(this);
  });
});

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

function ajoutEmoji(){
  $(".emoji").src = listEmoji[emoji];
  preparationBot();
}

function preparationBot(){
  setTimeout(function () {
    envoisMessageBot();
  }, 3000);
}

function envoisMessageBot(){
  var random = Math.floor(Math.random()*tableauReponse.length);
  $("#fenetreBot").append("<p>"+tableauReponse[random]+"</p>");
}
