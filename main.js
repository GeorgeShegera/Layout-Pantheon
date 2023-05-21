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
// gallary swiper
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

// gym swiper
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

/*gym-memberships swiper*/
const gymMembershipsSwiper = new Swiper(".gym-memberships_swiper", {
  // Settings
  direction: "horizontal",
  speed: 800,
  loop: false,

  scrollbar: {
    el: ".gym-membership-scrollbar",
    draggable: true,
    dragSize: 402,
  },

  breakpoints: {
    950: {
      slidesPerView: 5,
    },

    850: {
      slidesPerView: 4,

      scrollbar: {
        dragSize: 402,
      },
    },

    576: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 202,
      },
    },

    350: {
      slidesPerView: 2,

      scrollbar: {
        dragSize: 102,
      },
    },
    0: {
      slidesPerView: 1.7,
      scrollbar: {
        dragSize: 70,
      },
    },
  },
});

const membershipDurations = document.querySelectorAll(
  ".gym-memberships_slide:not(:nth-child(1)) > .gym-membership-item:nth-child(1)"
);
const membershipKinds = document.querySelectorAll(
  ".gym-memberships_slide:nth-child(1) > .gym-membership-item:not(:nth-child(1))"
);
const membershipPrices = Array.from(
  document.querySelectorAll(
    ".gym-memberships_slide:not(:nth-child(1)) > .gym-membership-item:not(:nth-child(1))"
  )
);

tableHover(membershipPrices, membershipKinds, membershipDurations);

const membershipByTimeTop = document.querySelectorAll(
  ".time-memberships_slide:not(:nth-child(1)) > .time-membership-item:nth-child(1)"
);
const membershipByTimeLeft = document.querySelectorAll(
  ".time-memberships_slide:nth-child(1) >  .time-membership-item:not(:nth-child(1))"
);
const membershipByTimeCentral = Array.from(
  document.querySelectorAll(
    ".time-memberships_slide:not(:nth-child(1)) >  .time-membership-item:not(:nth-child(1))"
  )
);

tableHover(membershipByTimeCentral, membershipByTimeLeft, membershipByTimeTop);
console.log(membershipByTimeTop, membershipByTimeLeft, membershipByTimeCentral);

function tableHover(centralElements, leftElements, topElements) {
  centralElements.forEach((price) => {
    const leftIndex = centralElements.indexOf(price) % leftElements.length;
    const topIndex = parseInt(
      centralElements.indexOf(price) / leftElements.length
    );

    price.onmouseover = price.onmouseout = () => {
      itemToggle(price);
      itemToggle(leftElements[leftIndex]);
      itemToggle(topElements[topIndex]);

      function itemToggle(item) {
        item.classList.toggle("gym-membership-item__hover");
      }
    };
  });
}

/* Memberships by time */
new Swiper(".time-memberships_swiper", {
  settings: "horizontal",
  speed: 800,
  loop: false,

  scrollbar: {
    el: ".gym-membership-scrollbar",
    draggable: true,
    dragSize: 402,
  },

  breakpoints: {
    950: {
      slidesPerView: 5,
    },

    850: {
      slidesPerView: 4,

      scrollbar: {
        dragSize: 402,
      },
    },

    576: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 202,
      },
    },

    350: {
      slidesPerView: 2,

      scrollbar: {
        dragSize: 102,
      },
    },
    0: {
      slidesPerView: 1.7,
      scrollbar: {
        dragSize: 70,
      },
    },
  },
});
