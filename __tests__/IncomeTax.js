const IncomeTax = require('../public/IncomeTax');

let oTax = new IncomeTax();

it("Calculates Ontario Tax on $100,000", ()=>{
    expect(oTax.ontarioTax(100000)).toBe(7836.87);
});

it("Calculates Federal Tax on $100,000", ()=>{
    expect(oTax.federalTax(100000)).toBe(18528.62);
});