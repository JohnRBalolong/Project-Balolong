const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middleinitial = document.getElementById('middleinitial');
const lastname = document.getElementById('lastname');
const contactnum = document.getElementById('contactnum');
const email = document.getElementById('email');
const brg = document.getElementById('brg');
const city = document.getElementById('city');
const province = document.getElementById('province');
const username = document.getElementById('username');
const password = document.getElementById('password');
const conpassword = document.getElementById('conpassword');
//const bdate = document.getElementById('day');


form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
})

function checkInputs(){
	//const bdateValue = day.value;
	const firstnameValue = firstname.value.trim();
	const middleinitialValue = middleinitial.value.trim();
	const lastnameValue = lastname.value.trim();
	const contactnumValue = contactnum.value.trim();
	const emailValue = email.value.trim();
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const conpasswordValue = conpassword.value.trim();
	const brgValue = brg.value.trim();
	const cityValue = city.value.trim();
	const provinceValue = province.value.trim();
	var getnum=String(contactnumValue).charAt(0);
	var firstnum=Number(getnum);
	var getnum2=String(contactnumValue).charAt(1);
	var secondnum=Number(getnum2);

	const gender = document.forms["registerform"]["gender"].value;
//	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	var num=  /^[0-9]+$/;
	var letter = /^[a-zA-Z ]*$/;




	var	day = document.forms["registerform"]["day"].value;
	var month = document.forms["registerform"]["month"].value; 
  	var	year = document.forms["registerform"]["year"].value;
  //	const all =day+month+year;

  		if (month == "" || day == "" || year == "") { //conditions if the values of the select inputs for month, day, and year are empty.
  		document.getElementById("small").style.visibility = "visible";//setErrorFordate(all  'fill in all'); //alert indicates if the condition is true.
		document.getElementById("day").classList.remove("valid");
		document.getElementById("month").classList.remove("valid");
		document.getElementById("year").classList.remove("valid");
  		if (month == "") {
  			document.getElementById("month").classList.add("invalid");
  			//document.getElementById("small").style.visibility = "visible";
  		}else{
  			document.getElementById("month").classList.add("valid");
  			//document.getElementById("month").classList.remove("invalid");
  			//document.getElementById("small").style.visibility = "hidden";
  		}
  		if (day == "") {
  			document.getElementById("day").classList.add("invalid");
  			//document.getElementById("small").style.visibility = "visible";
  		}
  		else{
  			document.getElementById("day").classList.add("valid");
  			//document.getElementById("day").classList.remove("invalid");
  			//document.getElementById("small").style.visibility = "hidden";
  		}

  		if (year == "") {
  			document.getElementById("year").classList.add("invalid");
  			//document.getElementById("small").style.visibility = "visible";
  		}
  		else{
  			document.getElementById("year").classList.add("valid");
  			document.getElementById("year").classList.remove("invalid");
  			
  		}
  	}
    else{
      document.getElementById("month").classList.add("valid");
      document.getElementById("month").classList.remove("invalid");
      document.getElementById("day").classList.add("valid");
      document.getElementById("day").classList.remove("invalid");
      document.getElementById("year").classList.add("valid");
      document.getElementById("year").classList.remove("invalid");
      document.getElementById("small").style.visibility = "hidden";
    }




//address



//bdate
 //if(bdateValue == ""){
 //		setErrorForbdate(day, 'please fill all');
 //}
// end of bdate

//address:
if(brgValue === ''){
		setErrorFor(brg, 'Please provide your barangay');
	}else {
		setSuccessFor(brg);
	}
	if(cityValue === ''){
		setErrorFor(city, 'Please provide your city');
	}else {
		setSuccessFor(city);
	}
if(provinceValue === ''){
		setErrorFor(province, 'Please provide your province');
	}else {
		setSuccessFor(province);
	}


if(contactnumValue === ''){
		setErrorFor(contactnum, 'Contact No. cannot be blank');
	}else if(num.test(contactnumValue)&&contactnumValue.length == 11 && firstnum ==0 && secondnum == 9 ){
		setSuccessFor(contactnum);
	}
	else{
		setErrorFor(contactnum, 'Invalid Contact No.');
	}
	

//start fuction for firstname

	if(firstnameValue === ''){
		setErrorFor(firstname, 'Firstname cannot be blank');
	}else if(firstnameValue.length >=3){
		setSuccessFor(firstname);
	}else if(firstnameValue.length <=2){
		setErrorFor(firstname, 'Firstname must minimum of  3 characters:');
	}
	//end fuction for firstname
	//start fuction for Middle initial:
	if(middleinitialValue === ''){
		setErrorFor(middleinitial, 'Middle initial cannot be blank');
	}
	//else if(middleinitialValue.length ==1 ){
	//	setSuccessFor(middleinitial);
	//}
	else if(letter.test(middleinitialValue)&&middleinitialValue.length ==1){
		setSuccessFor(middleinitial);
		//setErrorFor(middleinitial, 'Middle initial not allow number ');
	}
	else if(letter.test(middleinitialValue)&&middleinitialValue.length >1 ){
		setErrorFor(middleinitial, 'Middle initial must have 1 character only');
	}else {
		setErrorFor(middleinitial, 'Middle initial must not a number');
		//setSuccessFor(middleinitial);
	}
	//end fuction for Middle initial:
	//start fuction for lastname:
	if(lastnameValue ===''){
		setErrorFor(lastname, 'Lastname cannot be blank');
	}else if(lastnameValue.length >=3){
		setSuccessFor(lastname);
	}else if(lastnameValue.length <=2){
		setErrorFor(lastname, 'Lastname must minimum of  3 characters');
	}
	//end fuction for lastname:
	//email
	 if(emailValue ===''){
		setErrorFor(email, 'Email cannot be blank');
	}else if(!isEmail(emailValue)){
		setErrorFor(email, 'Email is not valid');
	}else if(isEmail(emailValue)){
		setSuccessFor(email);
	}
	//end of email
	//username
	if(usernameValue ===''){
		setErrorFor(username, 'Username cannot be blank');
	}else if(usernameValue.length <8){
		setErrorFor(username, 'Username must have minimum of 8 characters');
	}else if(usernameValue.length >8){
		setSuccessFor(username);
	}
	//end of uusername
	//password
	 if(passwordValue ===''){
		setErrorFor(password, 'Password cannot be blank');
	}else if(passwordValue.length <=7){
		setErrorFor(password, 'Password must have minimum of 8 characters');
	}else if(passwordValue.length >=16){
		setErrorFor(password, 'Password must not exceed 15 characters');
	}
	else if(passwordValue.length >=7 && passwordValue.length <=16) {
		setSuccessFor(password);
	}
	if(conpasswordValue ===''){
		setErrorFor(conpassword, 'Confirm Password cannot be blank');
	}else if(passwordValue != conpasswordValue){
		setErrorFor(conpassword, 'Passwords does not match');
	}else if(passwordValue == conpasswordValue){
		setSuccessFor(conpassword);
	}
	//end password


if (gender == "") { //Condition if the value for the gender input is empty is true.
   document.getElementById("genderError").style.visibility = "visible";
  }else if(gender !=""){
  	document.getElementById("genderError").style.visibility = "hidden";
  }

  //complete submission
 if(brgValue!="" && cityValue != "" && provinceValue != "" && firstnameValue.length >=3 && (letter.test(middleinitialValue)&&middleinitialValue.length ==1) && lastnameValue.length >=3 && gender !="" && (month && day && year) != "" && (num.test(contactnumValue)&&contactnumValue.length == 11 && firstnum ==0 && secondnum == 9 ) && isEmail(emailValue) && usernameValue.length >8 && (passwordValue.length >=7 && passwordValue.length <=16) && (passwordValue == conpasswordValue)){
  	alert("Complete! You are now Registered");
  	return true;
  }else{
  	return false;
  }
  
	
}//end of function

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;
	//error class
	formControl.className = 'form-control error';
} 
function setSuccessFor (input ){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


//email:
function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	//return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	//return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}


function setErrorFordate(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;
	//error class
	//formControl.className = 'form-control error';
} 
/*
function separateValidation(){
	var	day = document.forms["registerform"]["day"].value;
	var month = document.forms["registerform"]["month"].value; 
  	var	year = document.forms["registerform"]["year"].value;
  	

  		if (month == "" || day == "" || year == "") { //conditions if the values of the select inputs for month, day, and year are empty.
  		const addall = document.getElementById("addall").classList.add("small"); //alert indicates if the condition is true.
  		if (month == "") {
  			document.getElementById("month").classList.add("invalid");
  		}
  		else{
  			document.getElementById("month").classList.remove("invalid");
  		}

  		if (day == "") {
  			document.getElementById("day").classList.add("invalid");
  		}
  		else{
  			document.getElementById("day").classList.remove("invalid");
  		}

  		if (year == "") {
  			document.getElementById("year").classList.add("invalid");
  		}
  		else{
  			document.getElementById("year").classList.remove("invalid");
  		}
  	}
    else{
      document.getElementById("month").classList.remove("invalid");
      document.getElementById("day").classList.remove("invalid");
      document.getElementById("year").classList.remove("invalid");
    }

}
*/
/*
}else if((contactnumValue.charAt(0) !=0) && (contactnumValue.charAt(1) !=9)){
		setErrorFor(contactnum, 'Invalid Contact No.');
		}*/