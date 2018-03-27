var inputSentence;
var letters=[];

var vowels =["a","e","i","o","u","A","E","I","O","U"];
var newSentence="";

var found=0;

$(document).ready(function() {
$("form#vowel").submit(function(event) {
  event.preventDefault();

  inputSentence=$("#sentence").val();
  letters=inputSentence.split("");
  console.log(letters);

  letters.forEach(function(letter) {
    found = 0;
    vowels.forEach(function(vowel) {
      if (letter.toString()===vowel.toString()) {
        newSentence+="-";
        found++;
      }
    });

    if (found===0) {
      newSentence += letter;
    } else {}
  });

    $("#puzzle").append(newSentence);
    $("#result").show();

   });

});
