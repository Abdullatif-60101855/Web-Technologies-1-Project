// Abdullatif Abuzannad - 60101855

function validateForm() {
  const inputFields = document.querySelectorAll('input');
  const fullNameField = document.getElementById('full-name');
  const userNameField = document.getElementById('username');
  const passwordField = document.getElementById('password');
  const verifyField = document.getElementById('confirm-password');
  const emailField = document.getElementById('email');
  const verifyEmail = document.getElementById('confirm-email');
  const telField = document.getElementById('phone');
  const ageField = document.getElementById('age');
  const buildingField = document.getElementById('building-number');
  let isValid = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === '') {
      alert('All fields are required.');
      isValid = false;
      break;
    }
  }

  const fullNameValue = fullNameField.value.trim();
  const nameRegex = /^[\sa-zA-Z]+$/;
  if (!nameRegex.test(fullNameValue)) {
    alert('Invalid Full Name. Full name field must be composed of only letters.');
    fullNameField.value = '';
    fullNameField.placeholder = 'Please enter your full name';
    fullNameField.style.border = '2px solid red';
    isValid = false;
  } else {
    fullNameField.style.border = '';
  }

  const userNameValue = userNameField.value.trim();
  if (!nameRegex.test(userNameValue)) {
    alert('Invalid User Name. User name field must be composed of only letters.');
    userNameField.value = '';
    userNameField.placeholder = 'Please enter your user name';
    userNameField.style.border = '2px solid red';
    isValid = false;
  } else {
    userNameField.style.border = '';
  }

  const passwordValue = passwordField.value.trim();
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!passwordValue.length >= 8 || !passwordRegex.test(passwordValue)) {
    alert('Invalid Password. Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
    passwordField.value = '';
    passwordField.placeholder = 'Please enter a valid password';
    passwordField.style.border = '2px solid red';
    isValid = false;
  } else {
    passwordField.style.border = '';
  }

  const verifyFieldValue = verifyField.value.trim();
  if (!verifyFieldValue.match(passwordValue)) {
    alert('The confirmation password must be the same as the original password')
    verifyField.value = '';
    verifyField.placeholder = 'Please enter a valid password';
    verifyField.style.border = '2px solid red';
    isValid = false;
  } else {
    verifyField.style.border = '';
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+edu\.qa$/;
  const emailValue = emailField.value.trim();
  if (!emailRegex.test(emailValue)) {
    alert('Invalid Email. Email must be in the format "example@domain.edu.qa"');
    emailField.value = '';
    emailField.placeholder = 'Please enter a valid email';
    emailField.style.border = '2px solid red';
    isValid = false;
  } else {
    emailField.style.border = '';
  }

  const verifyEmailValue = verifyEmail.value.trim();
  if (!emailValue.match(verifyEmailValue)) {
    alert('The confirmation email must be the same as the original email.')
    verifyEmail.value = '';
    verifyEmail.placeholder = 'Please enter a valid email';
    verifyEmail.style.border = '2px solid red';
    isValid = false;
  } else {
    verifyEmail.style.border = '';
  }
  
  const phoneNumber = telField.value.trim();
  const phoneNumberRegex = /^\+974\d{8}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    alert('Invalid Phone Number. Phone number must contain 12 digits and conform to the Qatari phone number format.');
    telField.value = '+974';
    telField.placeholder = 'Please enter a valid phone number';
    telField.style.border = '2px solid red';
    isValid = false;
  } else {
    telField.style.border = '';
  }

  const ageValue = ageField.value.trim();
  if(!(ageValue >= 18 && ageValue <= 100)){
    alert('Invalid Age. the age field must be between 18 and 100');
    ageField.value = '';
    ageField.placeholder = 'Please enter a valid age';
    ageField.style.border = '2px solid red';
    isValid = false;
  } else {
    ageField.style.border = '';
  }

  const buildingValue = buildingField.value.trim();
  if(!(buildingValue >= 1 && buildingValue <= 666)){
    alert('Invalid building number. The building number must be a number between 1 and 666');
    buildingField.value = '';
    buildingField.placeholder = 'Please enter a valid building number';
    buildingField.style.border = '2px solid red';
    isValid = false;
  } else {
    buildingField.style.border = '';
  }
  
  return isValid;
}



function calculateAge() {
  var birth_date = new Date(document.getElementById('dob').value);
  var birth_date_day = birth_date.getDate();
  var birth_date_month = birth_date.getMonth();
  var birth_date_year = birth_date.getFullYear();

  var today_date = new Date();
  var today_day = today_date.getDate();
  var today_month = today_date.getMonth();
  var today_year = today_date.getFullYear();

  var calculated_age = 0;
  if (today_month > birth_date_month){
    calculated_age = today_year - birth_date_year;
  }
  else if (today_month == birth_date_month){
    if (today_day >= birth_date_day){
      calculated_age = today_year - birth_date_year;
    }else{
      calculated_age = today_year - birth_date_year - 1;
    }
  }
  else calculated_age = today_year - birth_date_year - 1;

  var output_value = calculated_age;
  document.getElementById('age').value = output_value;
}



function displaypassword(){
  let checkpass  = document.getElementById("password");
  let typechanger = document.getElementById("showpass");
  if (typechanger.checked == true){
    checkpass.type = "text";
  }
  else{
    checkpass.type = "password";
  }
}