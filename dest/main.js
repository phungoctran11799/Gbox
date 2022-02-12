//nav mobile
const btnMenu = document.querySelector(".btnmenu"),
  nav = document.querySelector(".nav");
btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

function hideNav() {
  btnMenu.classList.remove("active");
  nav.classList.remove("active");
}

window.addEventListener("resize", function () {
  let reWindow = window.innerWidth;
  if (reWindow > 992) {
    hideNav();
  }
});

//backtotop
let backtotop = document.querySelector(".footer__bottom-backtotop .backtop");

backtotop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//slider studio detail

let elem = document.querySelector(".slider .slider__item-wrap");

if (elem) {
  let flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });
  let nextButton = document.querySelector(".slider__bottom-content .control .control-next");
    nextButton?.addEventListener("click", function () {
      flkty.next();
  });

  let previousButton = document.querySelector(".slider__bottom-content .control .control-prev");
    previousButton.addEventListener("click", function () {
      flkty.previous();
  });
}

//slider cafe pages

let elem1 = document.querySelector(".gallery__thumb-wrap");
if (elem1) {
  let flkty1 = new Flickity(elem1, {
    // options
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots:false,
    wrapAround: true
  });

  let nextButton1 = document.querySelector(".gallery .gallery__btn .gallery__btn-nextPrev .btn-next");
    nextButton1?.addEventListener("click", function (e) {
      e.preventDefault();
      flkty1.next();
  });

  let previousButton1 = document.querySelector(".gallery .gallery__btn .gallery__btn-nextPrev .btn-prev");
    previousButton1?.addEventListener("click", function (e) {
      e.preventDefault();
      flkty1.previous();
  });
}
