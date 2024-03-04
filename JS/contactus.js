// Abdullatif Abuzannad - 60101855

function validateForm() {
    const nameField = document.getElementById('name');
    const msgField = document.getElementById('message');
    let phoneOption = document.getElementById('phone');
    let emailOption = document.getElementById('email');
    let errOption = document.getElementById('ErrMsg');
    let MOC = document.getElementById('MOC');
    let LMOC = document.getElementById('LMOC');

    let isValid = true;

    const nameValue = nameField.value.trim();
    if (nameValue.length == 0) {
        alert('The name of the user cannot be empty.')
        nameField.placeholder = 'Please enter your name';
        nameField.style.border = '2px solid red';
        isValid = false;
    } else {
        nameField.style.border = '';
    }

    const msgValue = msgField.value.trim();
    if (msgValue.length == 0) {
        alert('The message in the text area cannot be empty.')
        msgField.placeholder = 'Please enter your message';
        msgField.style.border = '2px solid red';
        isValid = false;
    } else {
        msgField.style.border = '';
    }

    if (validate_type_radio(phoneOption, emailOption) == false) {
        errOption.innerHTML = 'Please select the method of contact';
        errOption.style.color = 'red';
        errOption.style.display = 'block';
        isValid = false;
    }

    const phoneNumberRegex = /^\+974\d{8}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+edu\.qa$/;

    if (MOC.value.length == 0) {
        alert('All fields are required.')
        isValid = false;
    } else if (phoneOption.checked == true) {
        if (!(MOC.value.trim().length) == 12 || !phoneNumberRegex.test(MOC.value.trim())) {
            alert('Invalid Phone Number. Phone number must contain 12 digits and conform to the Qatari phone number format.');
            MOC.value = '+974';
            MOC.placeholder = 'Please enter a valid phone number';
            MOC.style.border = '2px solid red';
            isValid = false;
        }
    } else if (emailOption.checked == true) {
        if (!emailRegex.test(MOC.value.trim())){
            alert('Invalid Email. Email must be in the format "example@domain.edu.qa"');
            MOC.value = '';
            MOC.placeholder = 'Please enter a valid email';
            MOC.style.border = '2px solid red';
            isValid = false;
        }
    } else{
        MOC.value = '';
        MOC.placeholder = ''
    }

    return isValid
}



function validate_type_radio(x, y) {
    let validRadio = true;
    if (!x.checked && !y.checked) {
        validRadio = false;
    }

    return validRadio
}

function validate_MOC_box() {
    var phoneOption = document.getElementById("phone");
    var emailOption = document.getElementById("email");
    var LMOC = document.getElementById("LMOC");
    var MOC = document.getElementById("MOC");

    if (phoneOption.checked) {
        LMOC.innerHTML = 'Phone Number:';
        MOC.type = 'tel';
        MOC.value = '+974';
        MOC.style.display = 'block';
    } else if (emailOption.checked) {
        LMOC.innerHTML = 'Email Address:';
        MOC.type = 'email';
        MOC.value = ''
    }
}

