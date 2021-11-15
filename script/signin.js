
let username = document.getElementById("username");
let pword = document.getElementById("pword");

function validate(){
    if (username.value=="") {    
        alert("Must enter your username");    
        return false;  
}

else if(pword.value==""){
    alert("Must enter your password");
    return false;
}

else{
    return true;
    alert("success");
    }

}
