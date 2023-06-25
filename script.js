const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello,world!"); 
  }, 1000);
});
let div = document.querySelector("div");
myFirstPromise.then((successMessage) => {
  div.insertAdjacentHTML("afterbegin", `<p>${successMessage}</p>`)
});