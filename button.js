var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var Email = document.getElementById("Email");
var button = document.getElementById("btnFooter")

button.setAttribute("disabled","");

 const checkInputs = {
	'fname': false,
	'lname': false,
	'Email': false
 }

fname.addEventListener("input", function() {
	checkInput(fname);
})

lname.addEventListener("input", function() {
    checkInput(lname);
})

Email.addEventListener("input", function() {
    checkInput(Email);
})

function onclickBTN(){
	alert("Спасибо за ваш интерес к нашему сервису! Мы получили вашу заявку и будем рады помочь вам. Наша команда свяжется с вами в ближайшее время.")
}

function checkInput(obj ){
	if(obj.value !="")
    {
		checkInputs[obj.id] = true;
		activateButton();
    }
}

function activateButton(){
	for( elem in checkInputs ){
		if(!checkInputs[elem]) return;
	}
	button.removeAttribute("disabled","");
}

button.addEventListener("onclick", onclickBTN);