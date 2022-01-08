let signInForm = document.getElementById("signInForm")

signInForm.onsubmit = (e) =>{
    e.preventDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")



    let email = signInForm.email.value
    let password = signIpForm.password.value
    let confirmPassword = signIpForm.password.value

    let validate = true
    
    if(!email){
        setTextErr("#emailErr", " Email is required")
        let validate = false
    }
    if(!password){
        setTextErr("#passwordErr", " Password is required")
        let validate = false
    }
    if(password.lenght <6){
        setTextErr("#passwordErr", "Pasword must be at least 6 characters")
        let validate = false
    }
    if(validate){
        console.log("aaaa");
    }
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}


