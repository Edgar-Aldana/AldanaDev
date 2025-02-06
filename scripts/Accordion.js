
document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector(".icon");

    toggleContent(content);
    content.classList.toggle("open");
    icon.classList.toggle("rotate-180");
  });
});



document.querySelectorAll(".toggle-list").forEach((button) => {
    button.addEventListener("click", () => {
      const list = button.nextElementSibling;
      const plusIcon = button.querySelector(".plus-icon");

      
      list.classList.toggle("hidden");
      plusIcon.classList.toggle("rotate-90");
      
    });
  });


function toggleContent(element) {
    if (element.style.maxHeight) {
      element.style.maxHeight = null;
      element.style.padding = "0";
    } else {
      element.style.maxHeight = element.scrollHeight * 5 + "px";
      element.style.padding = "12px";
    }
}