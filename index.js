/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

let lengthVal = document.getElementById("length-val")
let volumeVal = document.getElementById("volume-val")
let massVal = document.getElementById("mass-val")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    inputEl.value = ""
    lengthVal.textContent = `
    ${baseValue} meter(s) = ${Number(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(3)}
    `
    volumeVal.textContent = `
    ${baseValue} liters = ${Number(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${Number(baseValue / literToGallon).toFixed(3)}
    `
    massVal.textContent = `
    ${baseValue} kilos = ${Number(baseValue * kilogramToPound).toFixed(3)} | ${baseValue} pounds = ${Number(baseValue / kilogramToPound).toFixed(3)}`
})
