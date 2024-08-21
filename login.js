const email = document.getElementById('enter_email')
const password = document.getElementById('enter_password')
const phoneNumber = document.getElementById('phoneNumber')
const btn = document.getElementById('log-in')
const lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upper =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numb =['0','1','2','3','4','5','6','7','8','9']
const specialChar= ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","'","\\","!","@","#","$","%","^","_","=",";",",",".","<",">","`"]
let count = 0;
let check = 0;
let tool = 0;

let fullName = document.getElementById('fullName');

function emailCheck(){
    const emailValue = email.value;


    if(emailValue.length == 0){
        alert('Please enter an email')
    }else if(emailValue.includes('@')=== false){
        alert("@ symbol is missing")
    }else{
        check++
    }
}
function pass(){
    const passwordValue=password.value;
    if(passwordValue.length == 0){
        alert('Please enter a password')
    }else if(passwordValue.length < 8){
        alert('Your Password is too Short')
    }else if(passwordValue.includes(lower) < 0){
        alert('Include a lowercase letter');
    }else if(passwordValue.includes(upper) < 0){
        alert('Include a Capital letter');
    }else if(passwordValue.includes(numb) < 0){
        alert('Include a number');
    }
    for (let i = 0; i < passwordValue.length; i++) {

        if(specialChar.includes(passwordValue[i])){
        count++
        check++
        break;
       }
    }
    if(count == 0){
        alert('include special characters')
        
    }
}

function number(){
    const phoneValue = phoneNumber.value;
    if(phoneValue.length== 0){
        alert('Please enter your Phone Number')
        return;
    } else if(phoneValue.length < 8){
        alert('Please enter a valid Phone number')
        return;
    }
    
    for (let i = 0; i < phoneValue.length; i++) {

        if(numb.includes(phoneValue[i])){
        tool++
        check++
        break;
       }
    }
    if(tool == 0){
        alert('add numbers')
        
    }
}


btn.addEventListener('click',function(){
    emailCheck()
    pass()
    number()
    if(check > 2){
        window.location.href = "/todo.html"
    }
    localStorage.setItem('name', fullName.value);
})