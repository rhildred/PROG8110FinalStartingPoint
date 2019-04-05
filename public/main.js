const IncomeTax = require("./IncomeTax");

document.getElementById("taxForm").addEventListener("submit", (evt)=>{
    evt.preventDefault();
    let nIncome = document.getElementById("taxableIncome").value;
    let nDeducted = document.getElementById("taxDeducted").value;
    let oTax = new IncomeTax();
    let nOntario = oTax.ontarioTax(nIncome);
    let nFederal = oTax.federalTax(nIncome);
    document.getElementById("taxOwing").innerHTML = (nOntario + nFederal - nDeducted).toFixed(2);
});