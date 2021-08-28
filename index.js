const country = document.querySelector(".country-name");
const btn = document.querySelector(".search-btn");
btn.addEventListener("click", () =>{
  var bg = chrome.extension.getBackgroundPage();
  console.log(bg.a)
  bg.start(country.value * 60000)
})
