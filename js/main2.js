function validateForm(){
// 	Funkcija ispod provjerava da li sadržaj ima oblik e-maila.
// To znači da ono što korisnik unese mora imati @ znak i bar jednu tačku(.).
//  Takođe, @ ne smije biti prvi znak email adrese, i zadnja tačka mora biti nakon znaka @, i bar 2 znaka prije kraja:
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		document.getElementById('poruka').innerHTML = "Unesite ispravnu email adresu!";
		return false;
	}
}