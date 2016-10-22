var trywords = [
["C", "H", "I", "C", "A", "G", "O"],
    ["C","L","E","V","E","L","A","N","D"],
    ["D","E","T","R","O","I","T"],
    ["B","O","S","T","O","N"],
    ["B","A","L","T","I","M","O","R","E"]
    ["P","O","R","T","L","A","N","D"]
]
var random = Math.floor((Math.random()*(trywords.length-1)));

var guess = trywords[random];
var remain = new Array(guess.length);
var error = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i =0; i < remain.length; i++){
    remain[i] = "_ ";
}

// prints the guessfield                        
function printRemain(){
    for (var i = 0; i < remain.length; i++){
    var inspect = document.getElementById("inspect");
    var letter = document.createTextNode(remain[i]);
    inspect.appendChild(letter);
    }
}   

  //checks if the the letter provided by the user matches one or more of the letters in the word
  var tryMatches = function(){
    var f = document.rateformular;
    var b = f.elements["foomatches"];
    var matches = b.value; //letter inputed by user
    matches = matches.toLowerCase();
    for (var i =0; i < guess.length; i++){
        if (guess[i] === matches){
            remain[i] = matches + " ";
            var indeed = true;
        }
    b.value = "";
    }
  
    //deletes the guessfield and replaces it with the new one
    var inspect = document.getElementById("inspect");
    inspect.innerHTML=""; 
    printRemain();

// if a guessed letter is not in the word, the letter will be put on the "Letters Already Guessed"-list and hangman grows
if(!indeed){
    var guessedLetters = document.getElementById("guessedLetters");
    var letter = document.createTextNode("" + matches);
    guessedLetters.appendChild(letter);
    error++;
    var hangman = document.getElementById("hangman");
hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
}   

    //checks if all letter have been found
    var chosen = true;
    for (var i = 0; i < remain.length; i++){
         if(remain[i] === "_ "){
             chosen = false;
         }
    }  
    if(chosen){
        alert("You win!");
    }
    //once you got six wrong letters, you lose
    if(error === 8){
        alert("Uh...I guess you're dead now.");
    }
}  

function init(){
    printRemain();
}

window.onload = init;