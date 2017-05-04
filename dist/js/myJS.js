// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields!");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully! Thank you!!");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function number () {
var randomNumber = Math.floor(Math.random() * 5 ) + 1;

var guess = prompt('I am thinking of a random number between 1 and 5. What is it?');

if (parseInt(guess) === randomNumber ) {

  alert('You guessed the number!');
  
}  else {


  alert('Sorry. The number was ' + randomNumber + '');

}	
}
