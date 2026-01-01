const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item) => {
  let header = item.querySelector("header");
  let description = item.querySelector(".description");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
    }
    else {
      description.style.height = "0px";
    }
  })

})


