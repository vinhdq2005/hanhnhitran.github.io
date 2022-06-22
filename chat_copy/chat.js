document.querySelector("#sw_darkmode").addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
  });
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(user.email);
      loadchat(user.email)
      // ...
    } else {
      alert("Ban chua dang nhap");
      open("./signin/index.html", "_self")
    }
  });
  
  let signOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
  
  let loadchat = async (email) => {
    let result = await firebase.firestore().collection("chat").where("users", "array-contains", email).get();
    console.log(result);
    let data = getDataFromDocs(result.docs)
    console.log(data);
    renderChat(data[0], email);
  };
  
  
  let getDataFromDoc = (doc) => {
    let data = doc.data();
    data.id = doc.id;
    return data;
  };
  
  let getDataFromDocs = (docs) => {
    let result = [];
    for (let doc of docs) {
      let data = getDataFromDoc(doc);
      result.push(data);
    }
    return result;
  };


  let renderChat = (data, ownerEmail) =>{
    let chat = data.chat;
    let dom = document.querySelector(".chat");
    dom.innerHTML = "";

    for (let i = 0; i < chat.length; i++){
        let html = `<div class="mess ${chat[i].email == ownerEmail ? "owner" : ""}">
        <div class="mess-avatar">
          <img src="${chat[i].img}" alt="" />
        </div>
        <div class="mess-content">
          <p>${chat[i].email}</p>
          <p>
          ${chat[i].content}
          </p>
          <p>${chat[i].time}</p>
        </div>
      </div>`;
      dom.innerHTML += html;
    }
  }