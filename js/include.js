function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // executa depois de carregar
    });
}

function ativarMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("ativo");
    });
  }
}

loadComponent("navebar", "components/navebar.html", ativarMenu);
loadComponent("footer", "components/footer.html");

