const pasta = "imagens/galeria/";

fetch(pasta)
  .then(res => res.text())
  .then(text => {

    const parser = new DOMParser();
    const html = parser.parseFromString(text, "text/html");
    const links = html.querySelectorAll("a");

    const grid = document.getElementById("gridGaleria");

    links.forEach(link => {
      const href = link.getAttribute("href");

      if (href.match(/\.(jpg|jpeg|png|webp|gif)$/)) {

        const img = document.createElement("img");
        img.src = pasta + href;

        grid.appendChild(img);
      }

    });

  });