let hw = [1,2,3]

localStorage.setItem("hw", JSON.stringify(hw))

let hw = JSON.parse(localStorage.getItem("hw")) 
console.log(hw);

// ----------------------------
// LOCAL STORAGE

//set the value in a local storage obj
localStorage.setItem('name', myName); 

//get the value from storage obj
localStorage.getItem('name');

//delete the value from local storage obj
localStorage.removeItem(name); //delete specifice obj from local storage
localStorage.clear(); //delete all from local storage


//----------------------------------
//SESSION STORAGE

//set the value in a session storage obj
sessionStorage.setItem('name', myName);

//get the value from storage obj
sessionStorage.getItem('name');

//delete the value from session storage obj
sessionStorage.removeItem(name); //delete specific obj from local storage
sessionStorage.clear(); //delete all from session storage

