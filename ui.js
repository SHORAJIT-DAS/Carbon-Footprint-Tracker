document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ------------------------------
   Sticky Navbar Shadow on Scroll
------------------------------- */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* ------------------------------
   Input Focus UX Enhancement
------------------------------- */
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#0f2f24";
  });

  input.addEventListener("blur", () => {
    input.style.borderColor = "#d1d5db";
  });
});

/* ------------------------------
   Result Reveal Animation
   (Triggered after calculation)
------------------------------- */
function revealResult() {
  const result = document.getElementById("result");
  if (!result) return;

  result.style.opacity = "0";
  result.style.transform = "translateY(10px)";

  setTimeout(() => {
    result.style.transition = "all 0.4s ease";
    result.style.opacity = "1";
    result.style.transform = "translateY(0)";
  }, 50);
}

/* ------------------------------
   Hook into Calculator Logic
------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.querySelector("button");

  if (calcBtn && typeof calculateFootprint === "function") {
    calcBtn.addEventListener("click", () => {
      setTimeout(revealResult, 50);
    });
  }
});

/* ------------------------------
   Accessibility Helper
------------------------------- */
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const active = document.activeElement;
    if (active.tagName === "INPUT") {
      const btn = document.querySelector("button");
      if (btn) btn.click();
    }
  }
});
