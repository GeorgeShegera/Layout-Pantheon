let navs = document.querySelectorAll(".nav-link");
console.log(navs);

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

/* */
const headerContent = document.querySelector(".header-content");
console.log(headerContent);

const burderMenu = document.querySelector(".navbar-toggler");
console.log(burderMenu);

burderMenu.onclick = () => {
  const mediaQuery = window.matchMedia("(max-height: 700px)");
  if (!mediaQuery.matches) {
    headerContent.style.marginTop = "50px";
  } else if (burderMenu.classList.contains("collapsed")) {
    headerContent.style.marginTop = "50px";
  } else headerContent.style.marginTop = "0px";
};
