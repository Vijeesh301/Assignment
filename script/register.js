let username = document.getElementById("username");
let password = document.getElementById("password");
let password1 = document.getElementById("password1");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var pass = /^[a-zA-Z0-9!@#$%^&*]{3,15}$/;
let box = document.getElementById("checkbox");


function validate(){
    if(username.value.trim()==""){
        username.style.border="1px solid red"
        message.innerHTML = "**Enter your name";
        return false;
    }

    else if(email.value.trim()==""){
        email.style.border="1px solid red"
        message1.innerHTML = "**Enter your email address";
        return false;
    }

    else if (!filter.test(email.value)){
        email.style.border="1px solid red"
        message1.innerHTML = "**Please provide a valid email address";
        email.focus;
        return false;
     }

    else if(mobile.value.trim()==""){
        mobile.style.border="1px solid red"
        message2.innerHTML = "**Enter your mobile number";
        return false;
    }

    else if(isNaN(mobile.value)){
        mobile.style.border="1px solid red"
        message2.innerHTML = "**Enter numberic values";
        return false; 
    }

    else if(mobile.value.length < 10){  
        message2.innerHTML = "**Enter a 10 digit mobile number"; 
        mobile.style.border="1px solid red" 
        return false;
    }

    else if(mobile.value.length > 10){  
        message2.innerHTML = "**Enter a 10 digit mobile number"; 
        mobile.style.border="1px solid red" 
        return false;
    }

    else if(password.value.trim()==""){
        message3.innerHTML = "**Enter your password";
        password.style.border="1px solid red"
        return false;
    }

    else if (!pass.test(password.value)){
        message3.innerHTML = "**Password must contain at least one uppercase letter and one special charactor";
        password.style.border="1px solid red"
        return false;  
    } 

    else if(password.value.length < 8){  
        message3.innerHTML = "Password length must be atleast 8 characters"; 
        password.style.border="1px solid red" 
        return false;  
    }

    else if(password1.value.trim()==""){
        message4.innerHTML = "Re-enter your password";
        password1.style.border="1px solid red"
        return false;
    }

    else if(password1.value!=password.value){
        message4.innerHTML = "Password did not match";
        password1.style.border = "1px solid red";
        return false;     
    }

    else if(!this.checkbox.checked){
        check.style.color = "red";
        return false;
    }

    else{
        return true;   
    }

    


}




        