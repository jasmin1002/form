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
        // context.style.borderColor = 'red';
        context.addEventListener('click', event => {
            // event.target.blur();
        })
        context.classList.add('error');
    } else {
        context.classList.remove('error');
        errorFlag.style.opacity = 0;
        isFilled = true;
    }

    return isFilled;
}

function validateEmail(el) {
    // const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // const controls = el.parentElement.children;
    // const errorFlag = controls[1];
    // const context = controls[0];

    // if (el.value.trim().match(validRegex)) {
    //     context.classList.add('error');
    //     errorFlag.innerText = `${context.placeholder} contains invalid token`;
    //     context.style.color = 'hsl(0, 100%, 74%)';
    // }
}

function validateInput() {
    checkInput(firstnameInput, 'cannot be empty');
    checkInput(lastnameInput, 'cannot be empty');
    checkInput(emailInput, 'cannot be empty');
    validateEmail(emailInput);
    checkInput(passwordInput, 'cannot be empty');
    // return;
}

form.addEventListener('submit', event => {
    event.preventDefault()

    validateInput()
})

// console.log(form);