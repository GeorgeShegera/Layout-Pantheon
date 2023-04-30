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
// Sliders initialization
const gallary = new Swiper(".gallary", {
  // Settings
  direction: "horizontal",
  spaceBetween: 30,
  speed: 800,

  scrollbar: {
    el: ".swiper-scrollbar",
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

const gym = new Swiper(".gym", {
  // Settings
  direction: "horizontal",
  speed: 800,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {
    850: {
      spaceBetween: 38.3,
      slidesPerView: 3,

      scrollbar: {
        dragSize: 200,
      },
    },

    451: {
      spaceBetween: 30,
      slidesPerView: 1.7,

      scrollbar: {
        dragSize: 102,
      },
    },

    0: {
      spaceBetween: 30,
      slidesPerView: 1.25,

      scrollbar: {
        dragSize: 70,
      },
    },
  },
});
