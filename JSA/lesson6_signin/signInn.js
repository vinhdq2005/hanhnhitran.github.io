let signInForm = document.getElementById("signInForm")

signInForm.onsubmit = (e) =>{
    e.preventDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")



    let email = signInForm.email.value
    let password = signInForm.password.value
    let confirmPassword = signInForn.password.value

    let validate = true

    if(!email){
        setTextErr("emailErr", "Email is required")
        let validate = false
    }
    if(!password){
        setTextErr("passwordErr", "Password is required")
        let validate = false
    }
    if(password.lenght <6){
        setTextErr("passwordErr", "Password must be at least 6 characters")
        let validate = false
    }
    if(validate){
        console.log("#")
    }
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}