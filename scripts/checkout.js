import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";



async function loadPage() {
    try {

        // throw new Error("some thing went wrong")
        await loadProductsFetch();
        // throw "error 2"
        await new Promise((resolve , reject) => {
            loadCart(() => {
                // reject("something went wrong");
                resolve();
            });
        });
    }
    catch (error) {
        console.log("unexpected error. Please try again");
        console.log(error.message);
    }
    

    renderOrderSummary();
    renderPaymentSummary();


}
loadPage();

// Promise


/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
})

*/


/*




new Promise((resolve, reject) => {
    loadProducts(() => {
        resolve()
    });
}).then(() => {
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});



*/


/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });

});

*/



