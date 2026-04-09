const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-toggle");
const currentPage = document.body.dataset.page;

if (nav && currentPage) {
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (
      (currentPage === "accueil" && href === "index.html") ||
      href === `${currentPage}.html`
    ) {
      link.classList.add("is-current");
    }
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
