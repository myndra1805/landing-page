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

const navs = [...document.querySelectorAll(".page-scroll")];

navs.map((nav) => {
  nav.addEventListener("click", (event) => {
    navs.map((_nav) => {
      _nav.classList.remove("brand-color");
      _nav.classList.remove("fw-bold");
    });
    nav.classList.add("brand-color");
    nav.classList.add("fw-bold");
  });
});
