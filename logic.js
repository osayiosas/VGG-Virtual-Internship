let fullname = document.getElementById('name');
let password = document.getElementById('password');
 if(fullname === "idiagheOsaigbovo" && password === "1234"){
    alert("Logged In");
 }else{
    alert("You have to Access");
 }

 let name, email;
const submit = document.querySelector('#submit');

function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if(pass1.value == pass2.value){
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "ok!"
    }
    else{
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
	
    if(pass1.length > 5){
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    }
    else{
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 8 or 16 digit!"
    }
}