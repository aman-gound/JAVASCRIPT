const connectButton = document.querySelector(".reconnect");
const counttext = document.querySelector(".desc b");
const wifiIcon = document.querySelector(".icon i");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");

connectButton.addEventListener("click", () => {
  let count = 10;
  const value = counttext;
  const timer = setInterval(() => {
    value.textContent = count - 1;
    count--;
    if (count <= 0) {
      clearInterval(timer);
      online();
    }
  }, 100)

})
const online = () => {

  wifiIcon.classList.replace("uil-wifi-slash", "uil-wifi");
  wifiIcon.style.backgroundColor = "green";
}