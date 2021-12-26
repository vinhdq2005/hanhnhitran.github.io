let signUpForm = document.getElementById("signUpForm")

signUpForm.onsubmit = (e) =>{
    e.preventDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")



    let email = signUpForm.email.value
    let password = signUpForm.password.value
    let confirmPassword = signUpForm.password.value

    let validate = true
    
    if(!email){
        setTextErr("#emailErr", " Email is required")
        let validate = false
    }
    if(!password){
        setTextErr("#passwordErr", " Password is required")
        let validate = false
    }
    if(!confirmPassword){
        setTextErr("#confirmPasswordErr", " confirmPassword is required")
        let validate = false
    }

    if(password.lenght <6){
        setTextErr("#passwordErr", "Pasword must be at least 6 characters")
        let validate = false
    }else{
        if(confirmPassword != password){
            setTextErr("#confirmPasswordErr", "Password does not match")
            let validate = false
        }
    }
    if(validate){
        console.log("aaaa");
    }
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}


