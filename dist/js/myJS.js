// Validating Empty Field
// Validating Empty Field
function check_empty() {
if ( isEmailOk() && isNameOk() == true ) {
alert("Form Submitted Successfully! Thank you!!");
} else if ( isEmailOk()== false && isNameOk() == false ) {
	document.getElementById("email").style.border = "2px solid #ff0000";
	document.getElementById("name").style.border = "2px solid #ff0000";
	return false;
}
else if (isEmailOk() == false ){
	document.getElementById("email").style.border = "2px solid #ff0000";
	return false; }

	else if {
	document.getElementById("name").style.border = "2px solid #ff0000";
	return false;
}
}
function isEmailOk() {

        var email = document.getElementById( 'email' ).value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);

}
 function isNameOk(){
 	if (document.getElementById('name').value !== ""){
 		return true; 
 	} else {
 		return false;
 	}
 }
/*function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields!");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully! Thank you!!");
}
}
*/
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
      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      function checkInputBox() {
        var email = document.getElementById( '0xff' ).value;
        var style = document.getElementById( '0xff' ).style; /* 'style' is an object of element with the id '0xff' */
        var valid = validateEmail( email );
        /* upate border of s1 */
        if (valid == true) {
          style.border = "2px solid #00ff00";
        } else {
          style.border = "2px solid #ff0000";
        }
      }

