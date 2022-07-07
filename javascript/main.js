
function validateForm(){

	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var email = document.forms["messageForm"]["email"].value;
	var phone = document.forms["messageForm"]["phone"].value;
	var address = document.forms["messageForm"]["address"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (fname == "" || lname == "" || email == ""){

		alert("Fields cannot be empty");
	}

    else if (phone.length <= 9 ){

		alert("Please enter all the digits.");

	}

    else{
        
		alert("Thank you");
	}
}