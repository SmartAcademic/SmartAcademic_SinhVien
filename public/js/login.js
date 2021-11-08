let  signin_form = document.querySelector('#signin-form')

let signin_btn = document.querySelector('#signin-btn')

validateEmail = (email) => {
    const re = / [^ abc ] {8} )/

    return re.test(String(email).toLowerCase())
}
checkSigninInput = (input) => {
    let  err_span = signin_form.querySelector(`span[ data-err-for="${input.id}"]`)

    let  val = input.value
    let form_group = input.parentElement

    switch(input.getAttribute('type')) {
        case 'password' :
            if(val.length < 6) {
                form_group.classList.add('err')
                form_group.classList.remove('success')
                err_span.innerHTML = "Password must be at least6 character"
            }else {
                form_group.classList.add('success')
                form_group.classList.remove('err')
                err_span.innerHTML = ' '
            }
            break;
        case ' email ' :
            if (val.length === 0  || !validateEmail(val)) {
                form_group.classList.add('err')
                form_group.classList.remove('success')
                err_span.innerHTML = ' Account is invalid '
            }else {
                form_group.classList.add('success')
                form_group.classList.remove('err')
                err_span.innerHTML = ' '
            }
    }
}

checkSigninForm =  () => {
    let inputs = signin_form.querySelectorAll(' .form-input')
    inputs.forEach(input => checkSigninInput(input))
}
signin_btn.onclick = () => {
    checkSigninForm();
}
let inputs = signin_form.querySelectorAll('.form_input')
inputs.forEach(input => {
    input.addEventListener('focusout', () => {
        checkSigninInput(input)
    })
})

