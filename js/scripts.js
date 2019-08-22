//back end
var romanNumber = [];


function toRoman(inputNumber) {
  for (var i = inputNumber; i > 0 ; i+=0) {
    console.log(i);
    if (i >= 1000) {
      romanNumber.push("M");
      var i = (i - 1000);
        var inputNumber = i;
    } else if (i >= 900) {
      romanNumber.push("CM");
      var i = (i - 900);
        var inputNumber = i;
    } else if (i >= 500) {
      romanNumber.push("D");
      var i = (i-500);
        var inputNumber = i;
    } else if (i >= 400) {
      romanNumber.push("CD");
      var i = (i-400);
        var inputNumber = i;
    } else if (i >= 100) {
      romanNumber.push("C");
      var i = (i - 100);
        var inputNumber = i;
    } else if (i >= 90) {
      romanNumber.push("XC");
      var i = (i - 90);
        var inputNumber = i;
    } else if (i >= 50) {
      romanNumber.push("L");
      var i = (i - 50);
        var inputNumber = i;
    } else if (i >= 40) {
      romanNumber.push("XL");
      var i = (i - 40);
        var inputNumber = i;
    } else if (i >= 10) {
      romanNumber.push("X");
      var i = (i - 10);
        var inputNumber = i;
    } else if (i >= 9) {
      romanNumber.push("IX");
      var i = (i - 9);
        var inputNumber = i;
    } else if (i >= 5) {
      romanNumber.push("V");
      var i = (i - 5);
        var inputNumber = i;
    } else if (i >= 4) {
      romanNumber.push("IV");
      console.log(i+"hey I'm in 4");
      var i = (i - 4);
        var inputNumber = i;
    } else if (i >= 1) {
      romanNumber.push("I");
      var i = (i - 1);
        var inputNumber = i;
    }
  }
}


//front end
$(document).ready(function(){
  $("form#numberForm").submit(function(){
    event.preventDefault();
    var inputNumber = parseInt($("input[name=numberInput]").val());
    toRoman(inputNumber);
    romanNumber = romanNumber.join("")

    console.log(romanNumber);
    $("p#results").text(romanNumber);
  });
});
