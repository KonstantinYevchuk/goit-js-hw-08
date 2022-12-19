var throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input")
const massegeEl = document.querySelector("textarea")
const button = document.querySelector("button")

formEl.addEventListener("input", inputCallBack)
// emailEl.addEventListener("input", inputCallBack);
// massegeEl.addEventListener("input", inputCallBack);
// button.addEventListener("submit", buttonCallBack);

function inputCallBack(evt) { 
        const { elements: {email, message} 
    } = evt.currentTarget;
        
        console.log(email.value)
        console.log(message.value);
        
        localStorage.setItem("feedback-form-state", JSON.stringify(evt.currentTarget.email, evt.currentTarget.message))  
}

// function buttonCallBack(evt) {
//     evt.preventDefault()
// }