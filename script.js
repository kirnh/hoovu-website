// Swap image URLs here to curate the visual story. Unsplash's image CDN serves sized, optimized photos.
const photos = {
  hero: "https://images.unsplash.com/photo-1750254347477-0875cc058ae2?auto=format&fit=crop&w=2200&q=85",
  seed: "https://images.unsplash.com/photo-1758702087578-46d7eacfb9ca?auto=format&fit=crop&w=2200&q=85",
  roots: "https://images.unsplash.com/photo-1775050647168-c1ae6942e52d?auto=format&fit=crop&w=1500&q=85",
  light: "https://images.unsplash.com/photo-1776715649007-a83b6f551941?auto=format&fit=crop&w=1800&q=85",
  living: "https://images.unsplash.com/photo-1775457114571-ecc5cedd7ebb?auto=format&fit=crop&w=1500&q=85",
  coming: "https://images.unsplash.com/photo-1767081125029-3ec38e900459?auto=format&fit=crop&w=2200&q=85",
};

for (const layer of document.querySelectorAll("[data-photo]")) {
  const src = photos[layer.dataset.photo];
  if (src) layer.style.backgroundImage = `url("${src}")`;
}

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNav.classList.toggle("open", open);
});
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}));

const notifyOpen = document.querySelector("#notify-open");
const notifyDialog = document.querySelector("#notify-dialog");
const notifyClose = document.querySelector(".notify-close");
if (notifyOpen && notifyDialog && notifyClose) {
  notifyOpen.addEventListener("click", () => {
    notifyOpen.setAttribute("aria-expanded", "true");
    notifyDialog.showModal();
  });
  const closeNotify = () => {
    notifyDialog.close();
    notifyOpen.focus();
  };
  notifyClose.addEventListener("click", closeNotify);
  notifyDialog.addEventListener("click", (event) => {
    if (event.target === notifyDialog) closeNotify();
  });
  notifyDialog.addEventListener("close", () => notifyOpen.setAttribute("aria-expanded", "false"));
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else revealItems.forEach((item) => item.classList.add("visible"));
