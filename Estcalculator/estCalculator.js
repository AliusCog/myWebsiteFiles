let input1=document.getElementById("numberOf")
let pricePerUnit=document.getElementById("ppu")
let form=document.getElementById("calculator-form")
form.addEventListener("submit", getEstimate)

function getEstimate(evt){
    evt.preventDefault()
    console.log("estimating")
    let est=0
    let num=input1.value
    let ppu=pricePerUnit.value
    console.log(num)
    console.log(ppu)
    est= estimate(num,ppu,est)
    displayEstimate(est)
}

function estimate(num,ppu,est){
    est=num*ppu
    return est
}

function displayEstimate(est){
    let estDiv=document.createElement("div")
    estDiv.innerHTML=`Your Estimate is ${est}`
    document.body.appendChild(estDiv)
}