let signUpForm = document.getElementById("signUpForm")

let users = []
let userFormLocal = JSON.parse(localStorage.getItem("users"))
if (userFormLocal) {
    users = userFormLocal
}

signUpForm.onsubmit = (e) =>{
    e.preventDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")



    let email = signUpForm.email.value
    let password = signUpForm.password.value
    let confirmPassword = signUpForm.confirmPassword.value

    
    let validate = true
    
    if(!email){
        setTextErr("#emailErr", " Email is required")
        validate = false
    }
    if(!password){
        setTextErr("#passwordErr", " Password is required")
        validate = false
    }
    if(!confirmPassword){
        setTextErr("#confirmPasswordErr", " confirmPassword is required")
        validate = false
    }
    if(password.length < 6){ 
        setTextErr("#passwordErr", "Pasword must be at least 6 characters")
        validate = false
    }else{
        if(confirmPassword != password){
            setTextErr("#confirmPasswordErr", "Password does not match")
            validate = false
        }
    }
    if(validate){
        console.log("aaaa");
        let user = {
            email: email,
            password: password
        }
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
    }
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}


