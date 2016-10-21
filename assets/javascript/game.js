var words = [
    ["C","H","I","C","A","G","O"],
    ["C","L","E","V","E","L","A","N","D"],
    ["D","E","T","R","O","I","T"],
    ["B","O","S","T","O","N"],
    ["B","A","L","T","I","M","O","R","E"]
]
var random = Math.floor((Math.random()*(words.length-1)));

var guess = words[random];
var remain = new 
Array(guess.length);
var wins = 0;

for (var i =0; i < remain.length; i++){
    remain[i] = "_ ";
}
                            
  function printRemain(){
    for (var i = 0; i < remain.length; i++){
        var remaining = document.getElementById("remaining");
        var gotchya = document.createTextNode(remain[i]);
        remaining.appendChild(gotchya);
        }
  }    

  var matches = function(){
    var t = document.forming;
    var f = t.elements["wasPicked"];
    var picked = f.value;
    picked = picked.toUpperCase();
    for (var i =0; i < guess.length; i++){
        if (guess[i] === picked){
            remaining[i] = picked + " ";
            var indeed = true;
        }
        f.value = "";
    }
  

    var remaining = document.getElementById("remaining");
    remaining.innerHTML=""; 
    printRemain();

if(!wrong){
    var tryAgain = document.getElementById("tryAgain");
    var gotchya = document.createTextNode(" " + picked);
    tryAgain.appendChild(gotchya);
    wins++;




}    

var chosen= true;
     for (var i = 0; i < remain.length; i++){
         if(remain[i] === "_ "){
             chosen = false;
         }
    }  
if(chosen){
window.alert("You win!");
}
    

if(wins === 6) {
window.alert("Uh...I guess you're dead now.");
}

}  

function init(){
    printRemain();
}

window.onload = init;

// var lsgwoerter = [
// ["T", "R", "E", "E", "H", "O", "U", "S", "E"],

// ]
// var random = Math.floor((Math.random()*(lsgwoerter.length-1))); 

// var lsgwort = lsgwoerter[random]; // the word to guess will be chosen from the array above
// var ratewort = new Array(lsgwort.length);
// var fehler = 0;

// // every letter in the word is symbolized by an underscore in the guessfield
// for (var i = 0; i < ratewort.length; i++){
//     ratewort[i] = "_ ";
// }

// // prints the guessfield
// function printRatewort(){
//     for (var i = 0; i < ratewort.length; i++){
//     var ratefeld = document.getElementById("ratefeld");
//     var buchstabe = document.createTextNode(ratewort[i]);
//     ratefeld.appendChild(buchstabe);
//     }
// }

// //checks if the the letter provided by the user matches one or more of the letters in the word
// var pruefeZeichen = function(){
//     var f = document.rateformular; 
//     var b = f.elements["ratezeichen"]; 
//     var zeichen = b.value; // the letter provided by the user
//     zeichen = zeichen.toUpperCase();
//     for (var i = 0; i < lsgwort.length; i++){
//         if(lsgwort[i] === zeichen){
//             ratewort[i] = zeichen + " ";
//             var treffer = true;
//         }
//     b.value = "";
//     }
    
//     //deletes the guessfield and replaces it with the new one
//     var ratefeld = document.getElementById("ratefeld");
//     ratefeld.innerHTML=""; 
//     printRatewort();
    
//     // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
//     if(!treffer){
//         var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
//         var buchstabe = document.createTextNode(" " + zeichen);
//         gerateneBuchstaben.appendChild(buchstabe); 
//         fehler++;
//         var hangman = document.getElementById("hangman");
//     hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
//     }
    
//     //checks if all letters have been found
//     var fertig = true;
//     for (var i = 0; i < ratewort.length; i++){
//         if(ratewort[i] === "_ "){
//             fertig = false;
//         }
//     }
//     if(fertig){
//         window.alert("You win!");
//     }
    
//     //once you got six wrong letters, you lose
//     if(fehler === 6){
//         window.alert("Uh...I guess you're dead now.");
//     }
// }

// function init(){
//     printRatewort();
// }

// window.onload = init;                           
// //pos = indians.indexOf('d');
// //pos = 2; returns -1 if not there.
// //hangman = indians.split('')