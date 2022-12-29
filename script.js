const navs = [...document.querySelectorAll(".page-scroll")];
window.addEventListener("DOMContentLoaded", (event) => {
  watchActiveNavs();
  const rowClient = document.querySelector("#row-clients");
  const rowPortfolio = document.querySelector("#row-portfolio");
  for (let i = 0; i < 12; i++) {
    rowClient.append(
      getClient({
        src: `/images/clients/${i + 1}.png`,
        alt: "",
        height: "80px",
      })
    );
  }
  for (let i = 0; i < 8; i++) {
    rowPortfolio.append(
      getPortfolio({
        src: `/images/portfolio/${i + 1}.jpg`,
        alt: "",
      })
    );
  }
  const options = {
    keyboard: true,
    size: "lg",
    constrain: true,
  };
  document.querySelectorAll(".portfolio-image").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const lightbox = new Lightbox(el, options);
      lightbox.show();
    })
  );
});

window.addEventListener("scroll", (event) => {
  watchActiveNavs();
});

function removeNavActive(navs) {
  navs.map((nav) => {
    nav.classList.remove("brand-color");
    nav.classList.remove("fw-bold");
  });
}

function watchActiveNavs() {
  const heightAbout = document.querySelector("#about").offsetTop;
  const heightClient = document.querySelector("#clients").offsetTop;
  const heightService = document.querySelector("#services").offsetTop;
  const heightPortfolio = document.querySelector("#portfolio").offsetTop;
  const heightContact = document.querySelector("#contact").offsetTop;
  const scrollHeight = window.scrollY + 10;
  if (scrollHeight >= heightContact) {
    removeNavActive(navs);
    setNavActive(document.querySelector('.page-scroll[href="#contact"]'));
  } else if (scrollHeight >= heightPortfolio && scrollHeight < heightContact) {
    removeNavActive(navs);
    setNavActive(document.querySelector('.page-scroll[href="#portfolio"]'));
  } else if (scrollHeight >= heightService && scrollHeight < heightPortfolio) {
    removeNavActive(navs);
    setNavActive(document.querySelector('.page-scroll[href="#services"]'));
  } else if (scrollHeight >= heightClient && scrollHeight < heightService) {
    removeNavActive(navs);
    setNavActive(document.querySelector('.page-scroll[href="#clients"]'));
  } else if (scrollHeight >= heightAbout && scrollHeight < heightClient) {
    removeNavActive(navs);
    setNavActive(document.querySelector('.page-scroll[href="#about"]'));
  } else if (scrollHeight >= 0 && scrollHeight < heightAbout) {
    removeNavActive(navs);
  }
}

function setNavActive(elm) {
  elm.classList.add("brand-color");
  elm.classList.add("fw-bold");
}

function getClient({ src, alt, height }) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.setAttribute("height", height);
  div.classList.add("text-center");
  div.classList.add("col-6");
  div.classList.add("col-md-3");
  div.classList.add("col-lg-2");
  div.classList.add("py-3");
  div.appendChild(img);
  return div;
}

function getPortfolio({ src, alt }) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const a = document.createElement("a");
  a.setAttribute("href", src);
  a.setAttribute("data-gallery", "portfolio-gallery");
  a.classList.add("portfolio-image");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.setAttribute("width", "100%");
  img.classList.add("img-fluid");
  div.classList.add("text-center");
  div.classList.add("col-6");
  div.classList.add("col-md-4");
  div.classList.add("col-lg-3");
  div.classList.add("p-2");
  a.appendChild(img);
  div.appendChild(a);
  return div;
}
