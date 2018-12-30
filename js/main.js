// function proveraForme() {
	
// 	var x = document.forms["obrazac"]["email"].value;
	
// 	var manki = x.indexOf("@");

// 	var tacka = x.lastIndexOf(".");

// 	if (manki < 1 || tacka < manki +2 || tacka + 2 > x.length) {
// 		document.getElementById('poruka').innerHTML = "Niste uneli pravilan email";
// 		return false;
// 	}

	
// }


function validateForm() {
var x=document.getElementsByTagName('email').value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
{
alert("Nije validna e-mail adresa.");
return false;
}
}