import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';






import { RomanNumber } from './roman-nums';


//front end
$(document).ready(function(){
  $("form#numberForm").submit(function(){
    event.preventDefault();
    var inputNumber = parseInt($("input[name=numberInput]").val());
    console.log(inputNumber);
    var newRomanNumber = new RomanNumber(inputNumber);
    console.log(newRomanNumber);
   newRomanNumber.toRoman();
    console.log(newRomanNumber);
    $("p#results").text(newRomanNumber.outputNum.join(""));
  });
});
