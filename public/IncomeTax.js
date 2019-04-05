class IncomeTax{
    ontarioTax(nIncome){
        let nRc = (nIncome - 81847)* .1116 + 5811;
        return Number(nRc.toFixed(2));
    }
    federalTax(nIncome){
        let nRc = (nIncome - 90563) * .26 + 16075;
        return Number(nRc.toFixed(2));
    }

}

module.exports = IncomeTax;