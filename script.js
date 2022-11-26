const precedentEl = document.querySelector(".precedent");
const containerEl = document.querySelector(".container");
const tabEl = document.querySelector(".tab");
const iconEl = document.querySelectorAll("div i");
iconEl.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.id);
    console.log(tabEl.scrollLeft);
    tabEl.scrollLeft += element.id === "left" ? -350 : 350;
    tabEl.scrollLeft != 0
      ? (precedentEl.style.display = "block")
      : (precedentEl.style.display = "none");
  });
});
let isscrlx = false;
const scrlx = (e) => {
  if (!isscrlx) return;
  tabEl.classList.add("select");
  tabEl.scrollLeft -= e.movementX;
  tabEl.scrollLeft != 0
    ? (precedentEl.style.display = "block")
    : (precedentEl.style.display = "none");
};

let Stop = () => {
  isscrlx = false;
  tabEl.classList.remove("select");
};
tabEl.addEventListener("mousedown", () => (isscrlx = true));
tabEl.addEventListener("mousemove", scrlx);
document.addEventListener("mouseup", Stop);
