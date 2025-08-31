import { formatCurrency } from "../../scripts/utils/money.js";


describe("test suite : formatCurrency" , () => {
    it("converts cents into dollars" , () => {
        expect(formatCurrency(3393)).toEqual("33.93")
    });
    it("works with zero" , () => {
        expect(formatCurrency(0)).toEqual("0.00")
    });
    it("rounds up to the nearest cent" , () => {
        expect(formatCurrency(2000.5)).toEqual("20.01")
    });
    
});



//same as:


// if(formatCurrency(3393) === "33.93") {
//     console.log("Passed");
// }
// else {
//     console.log("Fialed");
// }
// if(formatCurrency(0) === "0.00") {
//     console.log("Passed");
// }
// else {
//     console.log("Fialed");
// }
// if(formatCurrency(2000.5) === "20.01") {
//     console.log("Passed");
// }
// else {
//     console.log("Fialed");
// }

