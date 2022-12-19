var throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input")
const messageEl = document.querySelector(".feedback-form textarea")

const arrayData = {};
const KEY = "feedback-form-state";

formEl.addEventListener("input", throttle(inputCallBack, 500));
formEl.addEventListener("submit", formCallBack);

savedInfo()

function formCallBack(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
    
}

function inputCallBack(evt) { 
    arrayData[evt.target.name] = evt.target.value;
    
    const infoStrigify = JSON.stringify(arrayData);
        
    localStorage.setItem(KEY, infoStrigify)  
}



function savedInfo() {
    const savedStoradgeInfo = localStorage.getItem(KEY);
    // console.log(savedStoradgeInfo)
    const infoParse = JSON.parse(savedStoradgeInfo);
    
    if(infoParse) {
       emailEl.value = infoParse.email;
       messageEl.value = infoParse.message;
    }
    
}