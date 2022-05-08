let form_update = document.querySelector("#form_update")

console.log(form_update);

form_update.onsubmit = (e) =>{
    e.preventDefault();

    let userName = form_update.userName.value;

    let phone = form_update.phone.value;

    let photo = form_update.photo.value;

    console.log(userName, phone, photo)
}


let updateAccount = (data) =>{
    
}