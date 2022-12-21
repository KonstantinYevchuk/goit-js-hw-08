var throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input")
const messageEl = document.querySelector(".feedback-form textarea")

const arrayData = {};
const KEY = "feedback-form-state";

formEl.addEventListener("input", throttle(inputCallBack, 500));
formEl.addEventListener("submit", formCallBack);

savedInfo()


function inputCallBack(evt) { 
    arrayData[evt.target.name] = evt.target.value;
    
    const infoStrigify = JSON.stringify(arrayData);
        
    localStorage.setItem(KEY, infoStrigify)  
}

function formCallBack(evt) {
    
    evt.preventDefault();
    // const savedInfo = localStorage.getItem(KEY);
    // const savedInfoParsed = JSON.parse(savedInfo); 
    // console.log(savedInfoParsed)
    console.log(arrayData);
    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
    
}

function savedInfo() {
    try {
    const savedStoradgeInfo = localStorage.getItem(KEY);
   
    if (savedStoradgeInfo) {
    arrayData = JSON.parse(savedStoradgeInfo);
    Object.fromEntries(arrayData).forEach(([key, value]) => {
    formEl.elements[key] = value.trim();
         });
       }
     } catch (error) {
    console.log(error);
     }
   } 