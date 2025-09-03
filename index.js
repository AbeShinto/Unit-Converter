/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let inputBtn = document.getElementById("input-btn")
let lengthEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let massEl = document.getElementById("mass-el")
let main = document.getElementById("main")
let smallCont = document.getElementsByClassName("out-cont")
let darkBtn = document.getElementById("dark")
let darkOn = true

inputBtn.addEventListener("click", function(){
    let userInput = document.getElementById("user-inp").value
    let feet = (userInput* 3.281).toFixed(3)
    let meters = (userInput/3.281).toFixed(3)
    let liters = (userInput* 0.264).toFixed(3)
    let gallons = (userInput/0.264).toFixed(3)
    let kilos = (userInput* 2.204).toFixed(3)
    let lbs = (userInput/2.204).toFixed(3) 
    lengthEl.innerHTML = `
        ${userInput} meters = ${feet} feet | ${userInput} feet = ${meters} meters
    `
    volEl.innerHTML = `
        ${userInput} liters = ${gallons} gallons | ${userInput} gallons = ${liters} liters
    `
    massEl.innerHTML = `
        ${userInput} kilos = ${lbs} pounds | ${userInput} pounds = ${kilos} kilos
    `
})

function darkmode(){
    main.classList.toggle("dark-mode")
    for (let el of smallCont) {
        el.classList.toggle("darkmode");
    }
    if(darkOn){
    darkBtn.textContent = "Light mode" 
    } else {
      darkBtn.textContent = "Dark Mode"   
    }
    
}


