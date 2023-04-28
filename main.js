/*##################################### Header Links style #####################################*/
let navs = document.querySelectorAll(".nav-link");

navs.forEach((nav) => {
  nav.onclick = () => {
    nav.style.color = "white";
    nav.onmouseover = () => {
      nav.style.color = "#f38f31";
    };
    nav.onmouseout = () => {
      nav.style.color = "white";
    };
    nav.onmousedown = () => {
      nav.style.color = "#f38f31";
    };
  };
});

/*##################################### Header Adapt #####################################*/
const headerContent = document.querySelector(".header-content");

const burderMenu = document.querySelector(".navbar-toggler");

burderMenu.onclick = () => {
  const mediaQuery = window.matchMedia("(max-height: 700px)");
  // if (!mediaQuery.matches) {
  //   headerContent.style.marginTop = "50px";
  // } else if (
  //   burderMenu.classList.contains("collapsed") &&
  //   window.getComputedStyle(burderMenu).display != "none"
  // ) {
  //   headerContent.style.marginTop = "50px";
  // } else headerContent.style.marginTop = "0px";
};

/*##################################### Carousel #####################################*/
// Slider initialization
const gallary = new Swiper(".gallary", {
  // Settings
  direction: "horizontal",
  spaceBetween: 30,
  speed: 800,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 200,
    draggable: true,
  },

  // Arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {
    850: {
      slidesPerView: 4,

      scrollbar: {
        dragSize: 200,
      },
    },

    451: {
      slidesPerView: 2.283,

      scrollbar: {
        dragSize: 102,
      },
    },

    0: {
      slidesPerView: 1.4,

      scrollbar: {
        dragSize: 70,
      },
    },
  },
});
