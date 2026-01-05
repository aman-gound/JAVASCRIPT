const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

inputs.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      previouInput = input.previousElementSibling;
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index <= index2 && previouInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          previouInput.focus();
        }
      })
    }
  })
})
console.log()

window.addEventListener("load", () => {
  inputs[0].focus();
})