// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const themeBtn = document.getElementById("chiaro-scuro");
  const themeIcon = document.getElementById("icon");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
      } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
      }
    });
  }

  const modalOverlay = document.getElementById("modal-preventivo");
  const btnOpenHero = document.getElementById("btn-hero-preventivo");
  const btnClose = document.getElementById("chiudi-preventivo");
  const form = document.getElementById("form-preventivo");
  const messaggioSuccesso = document.getElementById("messaggio-successo");

  const openModal = () => modalOverlay.classList.add("active");
  const closeModal = () => modalOverlay.classList.remove("active");

  if (btnOpenHero) btnOpenHero.addEventListener("click", openModal);

  if (btnClose) btnClose.addEventListener("click", closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.style.display = "none";
      if (messaggioSuccesso) {
        messaggioSuccesso.style.display = "block";
      }

      setTimeout(() => {
        closeModal();
        form.reset();
        form.style.display = "flex";
        if (messaggioSuccesso) {
          messaggioSuccesso.style.display = "none";
        }
      }, 2000);
    });
  }
});