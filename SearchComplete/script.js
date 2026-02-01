const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".auto-com box");
inputBox.onkeyup = (e) => {
  console.log(e.target.value);
}
