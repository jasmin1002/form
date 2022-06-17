const formControl = document.querySelector('.form-control');
const form = formControl.parentElement;
const errorMessage = formControl.children[1];
const formInput = formControl.children[0];
const firstnameInput	= document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function checkInput(el, message) {
    const controls = el.parentElement.children;
    const errorFlag = controls[1];
    const context = controls[0];
    let isFilled = false

    if (el.value.trim() === '') {
        errorFlag.innerText = `${context.placeholder} ${message}`
        errorFlag.style.opacity = 1;
        context.classList.add('error');
    } else {
        context.classList.remove('error');
        errorFlag.style.opacity = 0;
        isFilled = true;
    }
}

function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 

function validateInput() {
    checkInput(firstnameInput, 'cannot be empty');
    checkInput(lastnameInput, 'cannot be empty');
    checkInput(passwordInput, 'cannot be empty');
    if (emailInput.value.trim() === '') {
        checkInput(emailInput, 'cannot be empty');
    } else if (validateEmail(emailInput.value) === false) {
        const controls = emailInput.parentElement.children;
        const errorFlag = controls[1];
        const context = controls[0];

        context.style.color = 'hsl(0, 100%, 74%)';
        errorFlag.innerText = "Looks like this is not an email"
        errorFlag.style.opacity = 1;
        context.classList.add('error');
    } else if (validateEmail(emailInput.value)) {
        const controls = emailInput.parentElement.children;
        const errorFlag = controls[1];
        const context = controls[0];

        context.classList.remove('error');
        context.style.color = '#222'
        errorFlag.style.opacity = 0;
    }
    return;
}

form.addEventListener('submit', event => {
    event.preventDefault()

    validateInput()
})

// console.log(form);