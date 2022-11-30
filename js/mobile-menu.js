(() => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector(".mobile-menu__button--toggle");
  const closeMenuBtn = document.querySelector(".mobile-menu__button--close");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("open");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
})();