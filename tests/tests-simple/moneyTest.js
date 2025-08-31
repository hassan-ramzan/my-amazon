import { formatCurrency } from "../../scripts/utils/money.js";

if(formatCurrency(3393) === "33.93") {
    console.log("Passed");
}
else {
    console.log("Fialed");
}
if(formatCurrency(0) === "0.00") {
    console.log("Passed");
}
else {
    console.log("Fialed");
}
if(formatCurrency(2000.5) === "20.01") {
    console.log("Passed");
}
else {
    console.log("Fialed");
}

