document.addEventListener("DOMContentLoaded", function () {
  const offcanvasToggle = document.getElementById("offcanvas-toggle");
  const offcanvasClose = document.getElementById("offcanvas-close");
  const offcanvasMenu = document.getElementById("offcanvas-menu");

  if (offcanvasToggle && offcanvasMenu) {
    offcanvasToggle.addEventListener("click", function () {
      offcanvasMenu.classList.add("is-open");
      offcanvasToggle.classList.add("is-active");
    });

    offcanvasClose.addEventListener("click", function () {
      offcanvasMenu.classList.remove("is-open");
      offcanvasToggle.classList.remove("is-active");
    });
  }

  const mobileToggleLinks = document.querySelectorAll(".nav-link-toggle");

  mobileToggleLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const targetId = this.getAttribute("data-toggle-target");
        const targetMenu = document.querySelector(targetId);

        if (targetMenu) {

          targetMenu.classList.toggle("show");

          const isExpanded = targetMenu.classList.contains("show");
          this.setAttribute("aria-expanded", isExpanded);
        }
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".nav-item-mobile-dropdown") &&
      window.innerWidth < 992
    ) {
      document.querySelectorAll(".nav-dropdown-menu-mobile").forEach((menu) => {
        menu.classList.remove("show");
      });
      document.querySelectorAll(".nav-link-toggle").forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });
    }
  });
});
