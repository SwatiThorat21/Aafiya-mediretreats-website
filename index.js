$("#carousel1").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$("#carousel2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#carousel3").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

let hamburger_container = document.getElementById("hamburger_container");
let header_hamburgerMenu = document.querySelector(".header_hamburgerMenu");
let header_hamburgerMenu_close_contain = document.querySelector(".header_hamburgerMenu_close_contain");
let resNavbarLinks = document.querySelector(".res-navbar-links");

let isOpen = true;

hamburger_container.addEventListener("click", (event) => {

  isOpen = !isOpen;
 
  if (isOpen) {
    header_hamburgerMenu.style.display = "block"
    header_hamburgerMenu_close_contain.style.display = "none";
    resNavbarLinks.style.display = "none";
  } else {
    header_hamburgerMenu.style.display = "none"
    header_hamburgerMenu_close_contain.style.display = "block";
    resNavbarLinks.style.display = "flex";
  }
});


