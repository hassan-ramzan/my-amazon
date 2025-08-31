// const url = "https://supersimplebackend.dev/products/first";     // json
// const url = "https://supersimplebackend.dev/documentation";   // html
// const url = "https://supersimplebackend.dev/hello";              // text
const url = "https://supersimplebackend.dev/images/apple.jpg";              // image

const xhr = new XMLHttpRequest();

xhr.addEventListener("load" , () => {
    console.log(xhr.response);
})

xhr.open("GET" , url);
xhr.send();
console.log(xhr.readyState);

