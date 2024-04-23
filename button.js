const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const Email = document.getElementById("Email");
const button = document.getElementById("btnFooter");

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

function checkInput(obj ){
	if(obj.value !=="")
    {
		checkInputs[obj.id] = true;
		activateButton();
    }
}

function activateButton(){
	for(let elem in checkInputs ){
		if(!checkInputs[elem]) return;
	}
	button.removeAttribute("disabled","");
}

function onclickBTN(){
	alert("Спасибо за ваш интерес к нашему сервису! Мы получили вашу заявку и будем рады помочь вам. Наша команда свяжется с вами в ближайшее время.");
}

