document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil home
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Animaciones home
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const visiblePoint = 100;

      if (elementTop < windowHeight - visiblePoint) {
        element.classList.add("visible");
      }
    });
  };

  if (revealElements.length) {
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  }

  // Categorías carta/pizzas
  const pills = document.querySelectorAll(".category-pill");
  const sections = document.querySelectorAll(".menu-section");

  if (pills.length && sections.length) {
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const filter = pill.dataset.filter;

        pills.forEach((item) => item.classList.remove("active"));
        pill.classList.add("active");

        sections.forEach((section) => {
          section.classList.toggle(
            "active",
            section.dataset.section === filter
          );
        });
      });
    });
  }

  // Modal imágenes
  const imageButtons = document.querySelectorAll(".list-card-image");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  if (modal && modalImage && imageButtons.length) {
    const closeImageModal = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      modalImage.src = "";
      document.body.style.overflow = "";
    };

    imageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const fullImage = button.dataset.full;
        modalImage.src = fullImage;
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    if (closeModal) {
      closeModal.addEventListener("click", closeImageModal);
    }

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeImageModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) {
        closeImageModal();
      }
    });
  }
});