const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Criar bolinhas
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

prev.onclick = () => {
  let i = index - 1;
  if (i < 0) i = slides.length - 1;
  showSlide(i);
};

next.onclick = () => {
  let i = index + 1;
  if (i >= slides.length) i = 0;
  showSlide(i);
};

// automático
setInterval(() => {
  let i = index + 1;
  if (i >= slides.length) i = 0;
  showSlide(i);
}, 5000);

showSlide(0);

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});