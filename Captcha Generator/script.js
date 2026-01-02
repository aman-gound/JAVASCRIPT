const captchaTextBox = document.querySelector(".catpcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".catpcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");
let captchaText = "Click";
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char
  )
  captchaText = changeString.join("  ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
}
const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = '';
  message.innerText = "";
  captchaKeyValidate();
}
const captchaKeyValidate = () => {
  submitButton.classList.toggle("disabled", !captchaInputBox.value);
}
const submitBtnClick = () => {
  const cleanedCaptcha = captchaText
    .split("")
    .filter(char => char !== " ")
    .join("");
  message.classList.add("active");
  if (captchaInputBox.value === cleanedCaptcha) {
    message.innerText = "Entered Captcha is correct";
    message.style.color = "#826afb";
  }
  else {
    if (captchaInputBox.value <= 0) {
      message.innerText = "Please Enter the Captcha";
    }
    else {
      message.innerText = "Incorrect captcha";
      message.style.color = "#df2626ff";
    }

  }
};



refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyValidate);
submitButton.addEventListener("click", submitBtnClick);