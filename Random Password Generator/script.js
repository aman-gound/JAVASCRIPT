const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateButton = document.querySelector(".generate-button");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

const generatePassword = () => {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }

  passwordInput.value = newPassword;
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};


rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});


generateButton.addEventListener("click", generatePassword);
