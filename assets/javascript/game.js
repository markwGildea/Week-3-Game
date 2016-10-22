var trywords = [
["C","H","I","C","A","G","O"],
    ["C","L","E","V","E","L","A","N","D"],
    ["D","E","T","R","O","I","T"],
    ["B","O","S","T","O","N"],
    ["B","A","L","T","I","M","O","R","E"]
]
var random = Math.floor((Math.random() * (tryWords.length-1)));

var guess = trywords[random];
var remain = new Array(guess.length);
var error = 0;

for (var i =0; i < remain.length; i++){
    remain[i] = "_ ";
}
                            
  function printRemain(){
    for (var i = 0; i < remain.length; i++){
        var inspect = document.getElementById("inspect");
        var letter = document.createTextNode(remain[i]);
        inspect.appendChild(gotchya);
        }
  }    

  var tryMatches = function(){
    var t = document.forming;
    var f = t.elements["foomatches"];
    var matches = f.value;
    matches = matches.toUpperCase();
    for (var i =0; i < guess.length; i++){
        if (guess[i] === matches){
            remain[i] = matches + " ";
            var indeed = true;
        }
    f.value = "";
    }
  

    var inspect = document.getElementById("inspect");
    inspect.innerHTML=""; 
    printRemain();

if(!indeed){
    var guessedLetters = document.getElementById("guessedLetters");
    var letter = document.createTextNode("" + picked);
    guessedLetters.appendChild(letter);
    error++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";

}    

var chosen= true;

     for (var i = 0; i < Remain.length; i++){
         if(Remain[i] === "_ "){
             chosen = false;
         }
    }  

    if(Chosen){
    window.alert("You win!");
    }
    
    if(Wins === 6) {
    window.alert("Uh...I guess you're dead now.");
    }

}  

    function init(){
    printRemain();
}

window.onload = init;