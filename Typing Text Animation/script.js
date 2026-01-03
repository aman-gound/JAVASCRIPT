const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = " Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = " Vlogger";
  }, 8000);
}
setInterval(textLoad, 12000)
textLoad();