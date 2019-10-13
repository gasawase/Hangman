var difficultySetting = "easy";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://hangman-api.lively.software/?difficulty=" + difficultySetting);
xhttp.onload  = function (){
    var word = JSON.parse(xhttp.responseText);
};
xhttp.send();

function renderHTML (){

}