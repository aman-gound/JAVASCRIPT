const defaultBtn = document.querySelector("#default-btn");
const fileName = document.querySelector(".file-name");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("img");
function defaultActive() {
  defaultBtn.click();
}
customBtn.addEventListener("click", defaultActive);
defaultBtn.addEventListener("change", function (e) {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
    }
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStore = this.value;
    fileName.textContent = valueStore;
  }
})