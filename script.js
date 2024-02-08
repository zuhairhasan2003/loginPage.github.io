import User from "./classUser.js";

let user = new User("admin@gmail.com", "admin", "admin", "admin");

let signInButton = document.querySelector("#signInButton");

signInButton.addEventListener("click", (event)=>{

    if(user.signInRequest(document.querySelector("input[type = email]").value , document.querySelector("input[type = password]").value)){
        
        document.querySelector("input[type = email]").value = "";
        document.querySelector("input[type = password]").value = "";

        window.open("https://www.linkedin.com/in/zuhair-hasan-raza-0978b5246/", "_self");
    }
    else{
        document.querySelector("#errorMessage").innerHTML = "Wrong email or password! Try again.";
    }
});